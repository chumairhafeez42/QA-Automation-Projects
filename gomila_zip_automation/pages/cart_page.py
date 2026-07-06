from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException

from pages.base_page import BasePage
import config


class CartPage(BasePage):

    CHECKOUT_BUTTON_LOCATORS = [
        (By.NAME, "checkout"),
        (By.CSS_SELECTOR, "button[name='checkout']"),
        (By.ID, "checkout"),
        (By.XPATH, "//button[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', "
                   "'abcdefghijklmnopqrstuvwxyz'), 'checkout')]"),
        (By.XPATH, "//a[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', "
                   "'abcdefghijklmnopqrstuvwxyz'), 'checkout')]"),
    ]

    def open(self):
        self.driver.get(f"{config.BASE_URL}/cart")
        self.dismiss_overlays()
        return self

    def go_to_checkout(self):
        for by, locator in self.CHECKOUT_BUTTON_LOCATORS:
            try:
                btn = WebDriverWait(self.driver, self.wait_timeout).until(
                    EC.element_to_be_clickable((by, locator))
                )
                self.safe_click(btn)
                WebDriverWait(self.driver, self.wait_timeout).until(
                    EC.url_contains("checkout")
                )
                return True
            except TimeoutException:
                continue
        raise NoSuchElementException(
            "Could not find a 'Checkout' button on the cart page. "
            "Open /cart in a browser, inspect the button, and update "
            "CHECKOUT_BUTTON_LOCATORS in pages/cart_page.py."
        )
