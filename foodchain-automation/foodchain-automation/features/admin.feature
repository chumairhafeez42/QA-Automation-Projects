@admin
Feature: Admin Rights and User Management
  As an admin
  I want to manage user roles, access, and audit activity
  So that the Foodchain Management System stays secure and well governed

  Background:
    Given I sign in with the "admin" account
    And I am on the admin users page

  @smoke
  Scenario: Successfully promote a customer to staff
    When I change the role of "customer@foodchain.com" to "staff"
    Then I should see the admin success message "User role updated successfully"

  Scenario: Deactivate a user account
    When I deactivate the user "staff@foodchain.com"
    Then the status of "staff@foodchain.com" should be "Inactive"

  Scenario: Reactivate a previously deactivated user
    Given the user "staff@foodchain.com" is deactivated
    When I activate the user "staff@foodchain.com"
    Then the status of "staff@foodchain.com" should be "Active"

  Scenario: Non-admin users are denied access to the admin panel
    Given I sign in with the "customer" account
    When I try to open the admin users page
    Then I should see the access denied message

  Scenario: Admin actions are recorded in the audit log
    Given I change the role of "customer@foodchain.com" to "staff"
    When I open the audit log
    Then the audit log should contain an entry for the role change

  Scenario Outline: Role-based permissions are enforced across modules
    Given I sign in with the "<role>" account
    When I try to open the "<module>" page
    Then access should be "<result>"

    Examples:
      | role     | module        | result  |
      | admin    | admin/users   | allowed |
      | admin    | stocks        | allowed |
      | staff    | admin/users   | denied  |
      | staff    | appointments  | allowed |
      | customer | admin/users   | denied  |
      | customer | stocks        | denied  |
