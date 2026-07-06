import os
import sys

# Make sure the project root (parent of "features") is importable so that
# "pages" and "config" can be imported from step files.
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

import config


def before_all(context):
    options = Options()

    # Run with HEADLESS=true behave   to run without opening a visible window.
    headless = os.environ.get("HEADLESS", "false").lower() == "true"
    if headless:
        options.add_argument("--headless=new")

    options.add_argument("--start-maximized")
    options.add_argument("--window-size=1400,1000")
    options.add_argument("--disable-notifications")
    options.add_argument("--disable-blink-features=AutomationControlled")
    options.add_experimental_option("excludeSwitches", ["enable-automation"])
    options.add_experimental_option("useAutomationExtension", False)

    service = Service(ChromeDriverManager().install())
    context.driver = webdriver.Chrome(service=service, options=options)
    context.wait_timeout = config.WAIT_TIMEOUT


def after_all(context):
    if hasattr(context, "driver"):
        context.driver.quit()
