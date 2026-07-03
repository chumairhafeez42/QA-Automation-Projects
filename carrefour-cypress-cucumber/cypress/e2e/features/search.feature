Feature: Product Search
  As a shopper on Carrefour UAE
  I want to search for products
  So that I can quickly find items I want to buy

  Background:
    Given I am on the Carrefour UAE homepage

  @smoke
  Scenario: Searching for a common product returns results
    When I search for "milk"
    Then I should be navigated to the search results page
    And the search results should contain at least 1 product

  @regression
  Scenario Outline: Searching for various product keywords returns relevant results
    When I search for "<keyword>"
    Then the search results should contain at least 1 product

    Examples:
      | keyword    |
      | chocolate  |
      | laptop     |
      | shampoo    |
      | rice       |

  @regression
  Scenario: Searching for a nonsense term shows no results gracefully
    When I search for "zzzznotarealproductzzzz123"
    Then the page should not show a broken error screen
