# Gomila Intersole — Checkout Zip Code Automation

Selenium + Python automation using **Behave** (the standard "Cucumber for
Python" BDD framework — same Gherkin `.feature` syntax as Ruby/Java Cucumber).

## What it does

1. Opens a product page on https://www.gomilaintersole.com/
2. Adds the product to the cart (selecting a size automatically if required)
3. Goes to the cart and clicks **Checkout**
4. Fills the email field if the checkout asks for one
5. Enters a zip code (`10001` by default) into the checkout address form
6. Asserts the field actually holds that value

The test **stops after entering the zip code** — it never fills payment info
or places a real order.

## Project layout

```
gomila_zip_automation/
├── behave.ini                 # behave config
├── config.py                  # URLs, timeouts, test data
├── requirements.txt
├── features/
│   ├── environment.py         # starts/stops the Chrome browser
│   ├── checkout_zip.feature   # Gherkin scenario
│   └── steps/
│       └── checkout_steps.py  # step definitions
└── pages/                     # Page Object Model
    ├── base_page.py
    ├── product_page.py
    ├── cart_page.py
    └── checkout_page.py
```

## Prerequisites

- Python 3.9+
- Google Chrome installed on your machine
  (`webdriver-manager` auto-downloads the matching ChromeDriver, so you don't
  need to install ChromeDriver yourself)

## Setup

```bash
cd gomila_zip_automation
python3 -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

## Run it

```bash
behave
```

Chrome will open, walk through the flow, and behave will print the Gherkin
steps with pass/fail status.

Run headless (no visible browser window):

```bash
HEADLESS=true behave          # Windows (PowerShell): $env:HEADLESS="true"; behave
```

## If it fails on your machine

This site's checkout markup can change without notice (Shopify themes get
updated), and popups (cookie banners, country selectors) vary. The code
already tries several common selector patterns for every step, but if a step
still fails:

1. Run without `HEADLESS` so you can see the browser.
2. Note which step failed (behave prints it).
3. Right-click the relevant element in Chrome → **Inspect**.
4. Open the matching file and add/adjust a locator:
   - "Add to cart" button → `pages/product_page.py` → `ADD_TO_CART_LOCATORS`
   - "Checkout" button → `pages/cart_page.py` → `CHECKOUT_BUTTON_LOCATORS`
   - Zip/postal code field → `pages/checkout_page.py` → `ZIP_LOCATORS`
   - Any blocking popup → `pages/base_page.py` → `OVERLAY_CLOSE_LOCATORS`

Each locator list is tried top-to-bottom until one works, so you can safely
add a new tuple `(By.CSS_SELECTOR, "your-selector-here")` at the top of the
relevant list.

## Changing the zip code or product

- Change the product tested: edit `PRODUCT_URL` in `config.py`.
- Change the zip code used: edit the value in
  `features/checkout_zip.feature` (currently `"10001"`), or add another
  `Scenario` line with a different value — Behave will run both.
