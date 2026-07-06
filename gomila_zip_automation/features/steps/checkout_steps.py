from behave import given, when, then

from pages.product_page import ProductPage
from pages.cart_page import CartPage
from pages.checkout_page import CheckoutPage
import config


@given('I open a Gomila Intersole product page')
def step_open_product(context):
    context.product_page = ProductPage(context.driver, context.wait_timeout)
    context.product_page.open()


@when('I add the product to the cart')
def step_add_to_cart(context):
    context.product_page.add_to_cart()


@when('I proceed to checkout')
def step_proceed_checkout(context):
    context.cart_page = CartPage(context.driver, context.wait_timeout)
    context.cart_page.open()
    context.cart_page.go_to_checkout()

    context.checkout_page = CheckoutPage(context.driver, context.wait_timeout)
    context.checkout_page.dismiss_overlays()
    context.checkout_page.fill_email_if_present(config.TEST_EMAIL)


@when('I enter the zip code "{zip_code}"')
def step_enter_zip(context, zip_code):
    context.entered_zip = zip_code
    context.checkout_page.enter_zip_code(zip_code)


@then('the zip code field should contain "{expected}"')
def step_verify_zip(context, expected):
    actual = context.checkout_page.get_zip_value()
    assert actual == expected, f"Expected zip field to contain '{expected}' but got '{actual}'"
