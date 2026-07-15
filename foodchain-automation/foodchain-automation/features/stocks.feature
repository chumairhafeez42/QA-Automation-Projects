@stocks
Feature: Stock Management
  As a staff member or admin
  I want to manage food and ingredient stock levels
  So that branches never run out of essential inventory

  Background:
    Given I sign in with the "staff" account
    And I am on the stocks page

  @smoke
  Scenario: Successfully add a new stock item
    When I add a stock item with the following details:
      | item        | category    | quantity | unit | reorderLevel | branch   |
      | Mozzarella  | Dairy       | 50       | kg   | 10           | Downtown |
    Then I should see the stock success message "Stock item added successfully"

  Scenario: Update the quantity of an existing stock item
    Given the stock item "Tomatoes" currently has a quantity of "20" kg
    When I update the quantity of "Tomatoes" to "35"
    Then the quantity of "Tomatoes" should be "35"

  Scenario: Low-stock items are flagged when below reorder level
    Given the stock item "Olive Oil" has a reorder level of "15" liters
    When I update the quantity of "Olive Oil" to "5"
    Then "Olive Oil" should be flagged as low stock

  Scenario: Prevent negative stock quantities
    When I add a stock item with the following details:
      | item    | category   | quantity | unit | reorderLevel | branch   |
      | Basil   | Vegetables | -5       | kg   | 5            | Downtown |
    Then I should see the stock error "Quantity cannot be negative"

  Scenario: Delete a stock item
    Given the stock item "Expired Cheese" exists
    When I delete the stock item "Expired Cheese"
    Then "Expired Cheese" should no longer appear in the stock list

  Scenario Outline: Stock item requires all mandatory fields
    When I add a stock item leaving the "<field>" field empty
    Then I should see the stock error "<errorMessage>"

    Examples:
      | field    | errorMessage             |
      | item     | Item name is required    |
      | quantity | Quantity is required     |
      | branch   | Branch is required       |
