from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException

from pages.base_page import BasePage


class CheckoutPage(BasePage):

    EMAIL_LOCATORS = [
        (By.ID, "email"),
        (By.NAME, "email"),
        (By.CSS_SELECTOR, "input[type='email']"),
    ]

    # Shopify checkout markup varies by store/theme, so we try several
    # common patterns for the zip / postal code input, in order.
    ZIP_LOCATORS = [
        (By.CSS_SELECTOR, "input[autocomplete='postal-code']"),
        (By.CSS_SELECTOR, "input[name='postalCode']"),
        (By.CSS_SELECTOR, "input[name*='zip' i]"),
        (By.CSS_SELECTOR, "input[id*='zip' i]"),
        (By.CSS_SELECTOR, "input[id*='postal' i]"),
        (By.CSS_SELECTOR, "[data-testid*='zip' i] input"),
        (By.CSS_SELECTOR, "[data-testid*='postal' i] input"),
        (By.XPATH, "//input[contains(translate(@placeholder,"
                   "'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'zip') "
                   "or contains(translate(@placeholder,"
                   "'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'postal')]"),
    ]

    def fill_email_if_present(self, email):
        """The checkout email step comes before the address form on most themes."""
        for by, locator in self.EMAIL_LOCATORS:
            try:
                field = WebDriverWait(self.driver, 5).until(
                    EC.visibility_of_element_located((by, locator))
                )
                field.clear()
                field.send_keys(email)
                return True
            except TimeoutException:
                continue
        return False

    def find_zip_field(self):
        for by, locator in self.ZIP_LOCATORS:
            try:
                field = WebDriverWait(self.driver, self.wait_timeout).until(
                    EC.presence_of_element_located((by, locator))
                )
                if field.is_displayed():
                    return field
            except TimeoutException:
                continue
        raise NoSuchElementException(
            "Could not locate the zip/postal code field on the checkout page. "
            "Open the checkout page in a browser, inspect the field, and update "
            "ZIP_LOCATORS in pages/checkout_page.py."
        )

    def enter_zip_code(self, zip_code):
        field = self.find_zip_field()
        self.driver.execute_script("arguments[0].scrollIntoView({block:'center'});", field)
        field.clear()
        field.send_keys(zip_code)
        field.send_keys(Keys.TAB)  # trigger blur so any auto-fill / validation runs
        return field

    def get_zip_value(self):
        field = self.find_zip_field()
        return field.get_attribute("value")
