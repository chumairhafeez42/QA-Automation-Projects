@signin
Feature: Sign In
  As a registered user of the Foodchain Management System
  I want to sign in with my credentials
  So that I can access features based on my role

  Background:
    Given I am on the sign-in page

  @smoke
  Scenario: Successful sign-in with valid customer credentials
    When I sign in with the "customer" account
    Then I should be redirected to the dashboard
    And I should see my role as "Customer"

  Scenario Outline: Successful sign-in for each role
    When I sign in with the "<role>" account
    Then I should be redirected to the dashboard
    And I should see my role as "<expectedRole>"

    Examples:
      | role     | expectedRole |
      | admin    | Admin        |
      | staff    | Staff        |
      | customer | Customer     |

  Scenario: Sign-in fails with an incorrect password
    When I attempt to sign in with email "customer@foodchain.com" and password "WrongPass123"
    Then I should see the sign-in error "Invalid email or password"
    And I should remain on the sign-in page

  Scenario: Sign-in fails with an unregistered email
    When I attempt to sign in with email "nobody@foodchain.com" and password "Whatever123"
    Then I should see the sign-in error "Invalid email or password"

  Scenario: Sign-in fields are required
    When I click the sign-in submit button without entering any details
    Then I should see the sign-in error "Email and password are required"

  Scenario: Logout after a successful sign-in
    Given I sign in with the "customer" account
    When I log out
    Then I should be redirected to the sign-in page
