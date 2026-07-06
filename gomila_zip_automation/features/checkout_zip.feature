Feature: Zip code entry at checkout
  As a customer of Gomila Intersole
  I want to enter my zip code on the checkout page
  So that I can provide my shipping address

  Scenario: Enter a valid zip code during checkout
    Given I open a Gomila Intersole product page
    When I add the product to the cart
    And I proceed to checkout
    And I enter the zip code "10001"
    Then the zip code field should contain "10001"
