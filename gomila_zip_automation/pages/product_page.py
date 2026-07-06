from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException

from pages.base_page import BasePage
import config


class ProductPage(BasePage):

    ADD_TO_CART_LOCATORS = [
        (By.CSS_SELECTOR, "button[name='add']"),
        (By.CSS_SELECTOR, "button[id*='AddToCart']"),
        (By.XPATH, "//button[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', "
                   "'abcdefghijklmnopqrstuvwxyz'), 'add to cart')]"),
        (By.XPATH, "//button[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', "
                   "'abcdefghijklmnopqrstuvwxyz'), 'add to bag')]"),
    ]

    # If the product has size/variant options, one must be selected before
    # "Add to cart" becomes enabled. We just pick the first available option.
    SIZE_OPTION_LOCATORS = [
        (By.CSS_SELECTOR, "input[type='radio'][name*='Size' i]"),
        (By.CSS_SELECTOR, "fieldset[data-option-name='Size' i] input"),
        (By.CSS_SELECTOR, ".product-form__input input[type='radio']"),
        (By.CSS_SELECTOR, "select[name*='Size' i] option:not([disabled]):not([value=''])"),
    ]

    def open(self):
        self.driver.get(config.PRODUCT_URL)
        self.dismiss_overlays()
        return self

    def select_size_if_needed(self):
        """Selects the first available variant option, if the product requires one."""
        for by, locator in self.SIZE_OPTION_LOCATORS:
            try:
                options = [e for e in self.driver.find_elements(by, locator) if e.is_displayed()]
                if options:
                    self.safe_click(options[0])
                    return True
            except Exception:
                continue
        return False

    def add_to_cart(self):
        self.select_size_if_needed()
        for by, locator in self.ADD_TO_CART_LOCATORS:
            try:
                btn = WebDriverWait(self.driver, self.wait_timeout).until(
                    EC.element_to_be_clickable((by, locator))
                )
                self.safe_click(btn)
                return True
            except TimeoutException:
                continue
        raise NoSuchElementException(
            "Could not find an 'Add to cart' button on the product page. "
            "Open the page in a browser, inspect the button, and update "
            "ADD_TO_CART_LOCATORS in pages/product_page.py."
        )
