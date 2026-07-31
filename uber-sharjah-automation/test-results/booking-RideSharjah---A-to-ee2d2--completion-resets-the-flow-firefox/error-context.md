# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: booking.spec.js >> RideSharjah - A to Z booking flow >> booking another ride after completion resets the flow
- Location: tests\booking.spec.js:126:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByTestId('ride-status')
Expected substring: "Trip Completed"
Received string:    "Trip In Progress"
Timeout: 15000ms

Call log:
  - Expect "toContainText" with timeout 15000ms
  - waiting for getByTestId('ride-status')
    7 × locator resolved to <span id="rideStatus" data-testid="ride-status">Searching for driver...</span>
      - unexpected value "Searching for driver..."
    3 × locator resolved to <span id="rideStatus" data-testid="ride-status">Driver Assigned - Arriving</span>
      - unexpected value "Driver Assigned - Arriving"
    17 × locator resolved to <span id="rideStatus" data-testid="ride-status">Trip In Progress</span>
       - unexpected value "Trip In Progress"

```

```yaml
- text: Trip In Progress
```

# Test source

```ts
  32  | 
  33  |   test('successful login navigates to booking screen', async ({ page }) => {
  34  |     await login(page);
  35  |     await expect(page.getByTestId('login-screen')).toBeHidden();
  36  |   });
  37  | 
  38  |   test('pickup and dropoff locations are populated from Sharjah location list', async ({ page }) => {
  39  |     await login(page);
  40  |     const pickupOptions = await page.getByTestId('pickup-select').locator('option').allTextContents();
  41  |     const dropoffOptions = await page.getByTestId('dropoff-select').locator('option').allTextContents();
  42  | 
  43  |     expect(pickupOptions).toContain('Al Majaz Waterfront');
  44  |     expect(pickupOptions).toContain('Sharjah International Airport');
  45  |     expect(dropoffOptions.length).toBeGreaterThan(5);
  46  |   });
  47  | 
  48  |   test('selecting the same pickup and dropoff shows an error and disables booking', async ({ page }) => {
  49  |     await login(page);
  50  |     await page.getByTestId('pickup-select').selectOption({ index: 0 });
  51  |     await page.getByTestId('dropoff-select').selectOption({ index: 0 });
  52  | 
  53  |     await expect(page.getByTestId('booking-error')).toBeVisible();
  54  |     await expect(page.getByTestId('book-ride-btn')).toBeDisabled();
  55  |   });
  56  | 
  57  |   test('valid trip selection computes distance and fare estimate', async ({ page }) => {
  58  |     await login(page);
  59  |     await page.getByTestId('pickup-select').selectOption({ label: 'Al Majaz Waterfront' });
  60  |     await page.getByTestId('dropoff-select').selectOption({ label: 'Sharjah International Airport' });
  61  | 
  62  |     await expect(page.getByTestId('trip-summary')).toBeVisible();
  63  |     const distanceText = await page.getByTestId('distance-value').textContent();
  64  |     const fareText = await page.getByTestId('fare-value').textContent();
  65  | 
  66  |     expect(parseFloat(distanceText ?? '0')).toBeGreaterThan(0);
  67  |     expect(parseFloat(fareText ?? '0')).toBeGreaterThan(8); // base fare is 8 AED
  68  |     await expect(page.getByTestId('book-ride-btn')).toBeEnabled();
  69  |   });
  70  | 
  71  |   test('changing vehicle type updates the fare estimate', async ({ page }) => {
  72  |     await login(page);
  73  |     await page.getByTestId('pickup-select').selectOption({ label: 'Al Majaz Waterfront' });
  74  |     await page.getByTestId('dropoff-select').selectOption({ label: 'Sharjah International Airport' });
  75  | 
  76  |     const economyFare = parseFloat((await page.getByTestId('fare-value').textContent()) ?? '0');
  77  | 
  78  |     await page.getByTestId('vehicle-select').selectOption('xl');
  79  |     const xlFare = parseFloat((await page.getByTestId('fare-value').textContent()) ?? '0');
  80  | 
  81  |     expect(xlFare).toBeGreaterThan(economyFare);
  82  |   });
  83  | 
  84  |   test('full ride lifecycle: book -> driver assigned -> GPS tracking -> completed', async ({ page }) => {
  85  |     await login(page);
  86  |     await page.getByTestId('pickup-select').selectOption({ label: 'Al Qasba' });
  87  |     await page.getByTestId('dropoff-select').selectOption({ label: 'University City Sharjah' });
  88  |     await expect(page.getByTestId('book-ride-btn')).toBeEnabled();
  89  | 
  90  |     await page.getByTestId('book-ride-btn').click();
  91  |     await expect(page.getByTestId('tracking-screen')).toBeVisible();
  92  |     await expect(page.getByTestId('ride-status')).toContainText('Searching for driver');
  93  | 
  94  |     // driver assignment
  95  |     await expect(page.getByTestId('ride-status')).toContainText('Driver Assigned', { timeout: 5000 });
  96  |     await expect(page.getByTestId('driver-info')).toBeVisible();
  97  |     await expect(page.getByTestId('driver-name')).not.toBeEmpty();
  98  |     await expect(page.getByTestId('driver-plate')).not.toBeEmpty();
  99  | 
  100 |     // trip starts
  101 |     await expect(page.getByTestId('ride-status')).toContainText('Trip In Progress', { timeout: 5000 });
  102 | 
  103 |     // GPS coordinates should be present and changing (live tracking)
  104 |     await page.waitForTimeout(500);
  105 |     const firstCoords = await page.getByTestId('gps-coords').textContent();
  106 |     expect(firstCoords).toMatch(/-?\d+\.\d+, -?\d+\.\d+/);
  107 | 
  108 |     await page.waitForTimeout(1200);
  109 |     const secondCoords = await page.getByTestId('gps-coords').textContent();
  110 |     expect(secondCoords).not.toBe(firstCoords); // car position updated
  111 | 
  112 |     // progress percentage increases over time
  113 |     const progressAfterWait = parseInt((await page.getByTestId('progress-pct').textContent()) ?? '0', 10);
  114 |     expect(progressAfterWait).toBeGreaterThan(0);
  115 | 
  116 |     // wait for trip completion (20 steps * 400ms ~= 8s)
  117 |     await expect(page.getByTestId('ride-status')).toContainText('Trip Completed', { timeout: 12000 });
  118 |     await expect(page.getByTestId('completed-screen')).toBeVisible();
  119 | 
  120 |     const finalFare = await page.getByTestId('final-fare').textContent();
  121 |     const finalDistance = await page.getByTestId('final-distance').textContent();
  122 |     expect(parseFloat(finalFare ?? '0')).toBeGreaterThan(0);
  123 |     expect(parseFloat(finalDistance ?? '0')).toBeGreaterThan(0);
  124 |   });
  125 | 
  126 |   test('booking another ride after completion resets the flow', async ({ page }) => {
  127 |     await login(page);
  128 |     await page.getByTestId('pickup-select').selectOption({ label: 'Al Khan' });
  129 |     await page.getByTestId('dropoff-select').selectOption({ label: 'Al Taawun' });
  130 |     await page.getByTestId('book-ride-btn').click();
  131 | 
> 132 |     await expect(page.getByTestId('ride-status')).toContainText('Trip Completed', { timeout: 15000 });
      |                                                   ^ Error: expect(locator).toContainText(expected) failed
  133 |     await page.getByTestId('new-ride-btn').click();
  134 | 
  135 |     await expect(page.getByTestId('booking-screen')).toBeVisible();
  136 |     await expect(page.getByTestId('book-ride-btn')).toBeEnabled();
  137 |   });
  138 | 
  139 |   test('cancelling a ride mid-search returns to booking screen', async ({ page }) => {
  140 |     await login(page);
  141 |     await page.getByTestId('pickup-select').selectOption({ label: 'Muwaileh' });
  142 |     await page.getByTestId('dropoff-select').selectOption({ label: 'Al Zahia' });
  143 |     await page.getByTestId('book-ride-btn').click();
  144 | 
  145 |     await expect(page.getByTestId('tracking-screen')).toBeVisible();
  146 |     await page.getByTestId('cancel-btn').click();
  147 | 
  148 |     await expect(page.getByTestId('ride-status')).toContainText('Cancelled');
  149 |     await expect(page.getByTestId('booking-screen')).toBeVisible({ timeout: 3000 });
  150 |   });
  151 | 
  152 |   test('map canvas renders pickup, dropoff and live car marker', async ({ page }) => {
  153 |     await login(page);
  154 |     await page.getByTestId('pickup-select').selectOption({ label: 'Al Nahda, Sharjah' });
  155 |     await page.getByTestId('dropoff-select').selectOption({ label: 'Al Majaz Waterfront' });
  156 |     await page.getByTestId('book-ride-btn').click();
  157 | 
  158 |     const canvas = page.getByTestId('map-canvas');
  159 |     await expect(canvas).toBeVisible();
  160 | 
  161 |     // sanity check the canvas actually has drawn (non-blank) pixels
  162 |     const hasContent = await canvas.evaluate((el) => {
  163 |       const ctx = el.getContext('2d');
  164 |       const data = ctx.getImageData(0, 0, el.width, el.height).data;
  165 |       return data.some((channel) => channel !== 0);
  166 |     });
  167 |     expect(hasContent).toBeTruthy();
  168 |   });
  169 | });
  170 | 
```