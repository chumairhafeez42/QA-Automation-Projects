@signup
Feature: User Signup
  As a new user of the MediCare Hospital Management System
  I want to create an account
  So that I can book appointments and use the system

  Background:
    Given the hospital management system database is reset
    And I am on the signup page

  @smoke @positive
  Scenario: Successful signup with valid patient details
    When I sign up with name "John Doe", email "john.doe@example.com", password "Passw0rd!", confirm password "Passw0rd!" and role "patient"
    Then I should see the signup message "Account created successfully! Please sign in."

  @positive
  Scenario: Successful signup with valid admin details
    When I sign up with name "Jane Admin", email "jane.admin@example.com", password "Adm1nPass!", confirm password "Adm1nPass!" and role "admin"
    Then I should see the signup message "Account created successfully! Please sign in."

  @negative
  Scenario: Signup fails when passwords do not match
    When I sign up with name "Mismatch User", email "mismatch@example.com", password "Passw0rd!", confirm password "Different1!" and role "patient"
    Then I should see the signup message "Passwords do not match."

  @negative
  Scenario: Signup fails with an invalid email format
    When I sign up with name "Bad Email", email "not-an-email", password "Passw0rd!", confirm password "Passw0rd!" and role "patient"
    Then I should see the signup message "Please enter a valid email address."

  @negative
  Scenario: Signup fails when required fields are missing
    When I sign up with name "", email "", password "", confirm password "" and role "patient"
    Then I should see the signup message "All fields are required."

  @negative
  Scenario: Signup fails when the password is too short
    When I sign up with name "Short Pass", email "shortpass@example.com", password "abc", confirm password "abc" and role "patient"
    Then I should see the signup message "Password must be at least 6 characters."

  @negative @regression
  Scenario: Signup fails when the email is already registered
    Given a user already exists with email "duplicate@example.com" and password "Passw0rd!"
    When I sign up with name "Duplicate User", email "duplicate@example.com", password "Passw0rd!", confirm password "Passw0rd!" and role "patient"
    Then I should see the signup message "An account with this email already exists."
