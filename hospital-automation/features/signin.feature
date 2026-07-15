@signin
Feature: User Signin
  As a registered user
  I want to sign in to the MediCare Hospital Management System
  So that I can access appointments, ratings, and admin features

  Background:
    Given the hospital management system database is reset
    And a user already exists with email "patient1@example.com" and password "Passw0rd!"
    And I am on the signin page

  @smoke @positive
  Scenario: Successful signin with valid patient credentials
    When I sign in with email "patient1@example.com" and password "Passw0rd!"
    Then I should see the signin message "Login successful."
    And I should be redirected to the appointments page

  @positive
  Scenario: Successful signin with valid admin credentials
    When I sign in with email "admin@medicare.com" and password "Admin@123"
    Then I should see the signin message "Login successful."
    And the navbar should show the admin panel link

  @negative
  Scenario: Signin fails with an incorrect password
    When I sign in with email "patient1@example.com" and password "WrongPassword"
    Then I should see the signin message "Invalid email or password."

  @negative
  Scenario: Signin fails with an unregistered email
    When I sign in with email "nobody@example.com" and password "Whatever1!"
    Then I should see the signin message "Invalid email or password."

  @negative
  Scenario: Signin fails when fields are left empty
    When I sign in with email "" and password ""
    Then I should see the signin message "Email and password are required."

  @regression
  Scenario: Signed-in patient does not see admin-only navigation links
    When I sign in with email "patient1@example.com" and password "Passw0rd!"
    Then the navbar should not show the admin panel link
    And the navbar should not show the medicine stock link

  @regression
  Scenario: User can log out after signing in
    Given I have signed in as "patient1@example.com" with password "Passw0rd!"
    When I log out
    Then I should be redirected to the signin page
