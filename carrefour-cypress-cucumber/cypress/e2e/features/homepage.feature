Feature: Carrefour UAE Homepage
  As a shopper visiting carrefouruae.com
  I want the homepage to load correctly with key navigation elements
  So that I can browse and find products easily

  Background:
    Given I am on the Carrefour UAE homepage

  @smoke
  Scenario: Homepage loads successfully
    Then the page title should contain "Carrefour"
    And the Carrefour logo should be visible
    And the search box should be visible

  @smoke
  Scenario: Main navigation icons are visible
    Then the "Categories" link should be visible
    And the "Cart" icon should be visible
    And the "Profile" icon should be visible

  @regression
  Scenario: Promotional banners are displayed on the homepage
    Then at least 1 promotional banner should be visible

  @regression
  Scenario Outline: Top category tiles navigate to the correct listing page
    When I click on the "<category>" category tile
    Then the URL should contain "<urlFragment>"

    Examples:
      | category      | urlFragment |
      | Fruit         | /c/         |
      | Vegetables    | /c/         |
      | Beverages     | clp_        |
