// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Helper: logs a test user in and returns to the booking screen.
 */
async function login(page, name = 'Ahmed Khan', phone = '+971501234567') {
  await page.goto('/');
  await page.getByTestId('name-input').fill(name);
  await page.getByTestId('phone-input').fill(phone);
  await page.getByTestId('login-btn').click();
  await expect(page.getByTestId('booking-screen')).toBeVisible();
  await expect(page.getByTestId('user-badge')).toContainText(name);
}

test.describe('RideSharjah - A to Z booking flow', () => {

  test('login screen validates empty fields', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('login-btn').click();
    await expect(page.getByTestId('login-error')).toBeVisible();
    await expect(page.getByTestId('login-error')).toContainText('name and phone');
  });

  test('login screen validates malformed phone number', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('name-input').fill('Sara Ali');
    await page.getByTestId('phone-input').fill('abc123');
    await page.getByTestId('login-btn').click();
    await expect(page.getByTestId('login-error')).toContainText('valid phone number');
  });

  test('successful login navigates to booking screen', async ({ page }) => {
    await login(page);
    await expect(page.getByTestId('login-screen')).toBeHidden();
  });

  test('pickup and dropoff locations are populated from Sharjah location list', async ({ page }) => {
    await login(page);
    const pickupOptions = await page.getByTestId('pickup-select').locator('option').allTextContents();
    const dropoffOptions = await page.getByTestId('dropoff-select').locator('option').allTextContents();

    expect(pickupOptions).toContain('Al Majaz Waterfront');
    expect(pickupOptions).toContain('Sharjah International Airport');
    expect(dropoffOptions.length).toBeGreaterThan(5);
  });

  test('selecting the same pickup and dropoff shows an error and disables booking', async ({ page }) => {
    await login(page);
    await page.getByTestId('pickup-select').selectOption({ index: 0 });
    await page.getByTestId('dropoff-select').selectOption({ index: 0 });

    await expect(page.getByTestId('booking-error')).toBeVisible();
    await expect(page.getByTestId('book-ride-btn')).toBeDisabled();
  });

  test('valid trip selection computes distance and fare estimate', async ({ page }) => {
    await login(page);
    await page.getByTestId('pickup-select').selectOption({ label: 'Al Majaz Waterfront' });
    await page.getByTestId('dropoff-select').selectOption({ label: 'Sharjah International Airport' });

    await expect(page.getByTestId('trip-summary')).toBeVisible();
    const distanceText = await page.getByTestId('distance-value').textContent();
    const fareText = await page.getByTestId('fare-value').textContent();

    expect(parseFloat(distanceText ?? '0')).toBeGreaterThan(0);
    expect(parseFloat(fareText ?? '0')).toBeGreaterThan(8); // base fare is 8 AED
    await expect(page.getByTestId('book-ride-btn')).toBeEnabled();
  });

  test('changing vehicle type updates the fare estimate', async ({ page }) => {
    await login(page);
    await page.getByTestId('pickup-select').selectOption({ label: 'Al Majaz Waterfront' });
    await page.getByTestId('dropoff-select').selectOption({ label: 'Sharjah International Airport' });

    const economyFare = parseFloat((await page.getByTestId('fare-value').textContent()) ?? '0');

    await page.getByTestId('vehicle-select').selectOption('xl');
    const xlFare = parseFloat((await page.getByTestId('fare-value').textContent()) ?? '0');

    expect(xlFare).toBeGreaterThan(economyFare);
  });

  test('full ride lifecycle: book -> driver assigned -> GPS tracking -> completed', async ({ page }) => {
    await login(page);
    await page.getByTestId('pickup-select').selectOption({ label: 'Al Qasba' });
    await page.getByTestId('dropoff-select').selectOption({ label: 'University City Sharjah' });
    await expect(page.getByTestId('book-ride-btn')).toBeEnabled();

    await page.getByTestId('book-ride-btn').click();
    await expect(page.getByTestId('tracking-screen')).toBeVisible();
    await expect(page.getByTestId('ride-status')).toContainText('Searching for driver');

    // driver assignment
    await expect(page.getByTestId('ride-status')).toContainText('Driver Assigned', { timeout: 5000 });
    await expect(page.getByTestId('driver-info')).toBeVisible();
    await expect(page.getByTestId('driver-name')).not.toBeEmpty();
    await expect(page.getByTestId('driver-plate')).not.toBeEmpty();

    // trip starts
    await expect(page.getByTestId('ride-status')).toContainText('Trip In Progress', { timeout: 5000 });

    // GPS coordinates should be present and changing (live tracking)
    await page.waitForTimeout(500);
    const firstCoords = await page.getByTestId('gps-coords').textContent();
    expect(firstCoords).toMatch(/-?\d+\.\d+, -?\d+\.\d+/);

    await page.waitForTimeout(1200);
    const secondCoords = await page.getByTestId('gps-coords').textContent();
    expect(secondCoords).not.toBe(firstCoords); // car position updated

    // progress percentage increases over time
    const progressAfterWait = parseInt((await page.getByTestId('progress-pct').textContent()) ?? '0', 10);
    expect(progressAfterWait).toBeGreaterThan(0);

    // wait for trip completion (20 steps * 400ms ~= 8s)
    await expect(page.getByTestId('ride-status')).toContainText('Trip Completed', { timeout: 12000 });
    await expect(page.getByTestId('completed-screen')).toBeVisible();

    const finalFare = await page.getByTestId('final-fare').textContent();
    const finalDistance = await page.getByTestId('final-distance').textContent();
    expect(parseFloat(finalFare ?? '0')).toBeGreaterThan(0);
    expect(parseFloat(finalDistance ?? '0')).toBeGreaterThan(0);
  });

  test('booking another ride after completion resets the flow', async ({ page }) => {
    await login(page);
    await page.getByTestId('pickup-select').selectOption({ label: 'Al Khan' });
    await page.getByTestId('dropoff-select').selectOption({ label: 'Al Taawun' });
    await page.getByTestId('book-ride-btn').click();

    await expect(page.getByTestId('ride-status')).toContainText('Trip Completed', { timeout: 15000 });
    await page.getByTestId('new-ride-btn').click();

    await expect(page.getByTestId('booking-screen')).toBeVisible();
    await expect(page.getByTestId('book-ride-btn')).toBeEnabled();
  });

  test('cancelling a ride mid-search returns to booking screen', async ({ page }) => {
    await login(page);
    await page.getByTestId('pickup-select').selectOption({ label: 'Muwaileh' });
    await page.getByTestId('dropoff-select').selectOption({ label: 'Al Zahia' });
    await page.getByTestId('book-ride-btn').click();

    await expect(page.getByTestId('tracking-screen')).toBeVisible();
    await page.getByTestId('cancel-btn').click();

    await expect(page.getByTestId('ride-status')).toContainText('Cancelled');
    await expect(page.getByTestId('booking-screen')).toBeVisible({ timeout: 3000 });
  });

  test('map canvas renders pickup, dropoff and live car marker', async ({ page }) => {
    await login(page);
    await page.getByTestId('pickup-select').selectOption({ label: 'Al Nahda, Sharjah' });
    await page.getByTestId('dropoff-select').selectOption({ label: 'Al Majaz Waterfront' });
    await page.getByTestId('book-ride-btn').click();

    const canvas = page.getByTestId('map-canvas');
    await expect(canvas).toBeVisible();

    // sanity check the canvas actually has drawn (non-blank) pixels
    const hasContent = await canvas.evaluate((el) => {
      const ctx = el.getContext('2d');
      const data = ctx.getImageData(0, 0, el.width, el.height).data;
      return data.some((channel) => channel !== 0);
    });
    expect(hasContent).toBeTruthy();
  });
});
