from selenium.webdriver.common.by import By
from selenium.common.exceptions import ElementClickInterceptedException


class BasePage:
    """Shared helpers for every page object."""

    def __init__(self, driver, wait_timeout=20):
        self.driver = driver
        self.wait_timeout = wait_timeout

    def safe_click(self, element):
        """Click normally, falling back to a JS click if something overlaps it."""
        try:
            element.click()
        except ElementClickInterceptedException:
            self.driver.execute_script("arguments[0].click();", element)

    # Common cookie / newsletter / country-selector popup close buttons.
    # Shopify stores almost always show one of these on first visit.
    OVERLAY_CLOSE_LOCATORS = [
        (By.CSS_SELECTOR, "button[aria-label='Close (esc)']"),
        (By.CSS_SELECTOR, "button[aria-label='Close']"),
        (By.CSS_SELECTOR, ".shopify-pc__banner__btn-accept"),
        (By.XPATH, "//button[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', "
                   "'abcdefghijklmnopqrstuvwxyz'), 'accept')]"),
        (By.XPATH, "//button[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', "
                   "'abcdefghijklmnopqrstuvwxyz'), 'continue shopping')]"),
        (By.CSS_SELECTOR, "[class*='modal'] button[class*='close']"),
        (By.CSS_SELECTOR, "[class*='popup'] button[class*='close']"),
        (By.CSS_SELECTOR, "button[class*='close']"),
    ]

    def dismiss_overlays(self):
        """Best-effort close of any cookie/market/newsletter popup. Never fails the test."""
        for by, locator in self.OVERLAY_CLOSE_LOCATORS:
            try:
                for el in self.driver.find_elements(by, locator):
                    if el.is_displayed():
                        self.safe_click(el)
            except Exception:
                continue
