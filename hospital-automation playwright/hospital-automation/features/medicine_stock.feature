@medicine
Feature: Medicine Stock Management
  As an administrator
  I want to add and update medicine stock levels
  So that the hospital pharmacy inventory stays accurate and up to date

  Background:
    Given the hospital management system database is reset
    And I have signed in as "admin@medicare.com" with password "Admin@123"
    And I navigate to the medicine stock page

  @smoke @positive
  Scenario: Admin adds a new medicine to the stock
    When I add or update medicine "Ibuprofen" with stock "40" and price "8"
    Then I should see the medicine message "Medicine stock updated."
    And the medicine table should contain a row for "Ibuprofen" with stock "40"

  @positive
  Scenario: Admin updates the stock quantity of an existing medicine
    When I add or update medicine "Paracetamol" with stock "100" and price "5"
    Then I should see the medicine message "Medicine stock updated."
    And the medicine table should contain a row for "Paracetamol" with stock "100"

  @positive @regression
  Scenario: Medicine with low stock is flagged with a "Low Stock" status
    When I add or update medicine "Amoxicillin" with stock "5" and price "12"
    Then the stock status for "Amoxicillin" should be "Low Stock"

  @positive @regression
  Scenario: Medicine with sufficient stock is flagged with an "OK" status
    When I add or update medicine "Vitamin C" with stock "60" and price "3"
    Then the stock status for "Vitamin C" should be "OK"

  @negative
  Scenario: Adding a medicine fails when required fields are missing
    When I add or update medicine "" with stock "" and price ""
    Then I should see the medicine message "All fields are required and must be valid."
