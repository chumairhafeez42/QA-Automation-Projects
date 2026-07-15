@signup
Feature: Sign Up
  As a new user
  I want to create an account
  So that I can use the Foodchain Management System

  Background:
    Given I am on the sign-up page

  @smoke
  Scenario: Successful sign-up as a new customer
    When I sign up with the following details:
      | name         | email                  | phone       | password    | role     |
      | Jordan Blake | jordan.blake@mail.com  | 9876543210  | Passw0rd!1  | customer |
    Then I should see the sign-up success message "Account created successfully"

  Scenario: Sign-up fails when the email is already registered
    When I sign up with the following details:
      | name        | email                    | phone       | password    | role     |
      | Sam Rivera  | customer@foodchain.com   | 9876500000  | Passw0rd!1  | customer |
    Then I should see the sign-up error "Email is already registered"

  Scenario: Sign-up fails when passwords do not match
    When I sign up with mismatched passwords "Passw0rd!1" and "Passw0rd!2"
    Then I should see the sign-up error "Passwords do not match"

  Scenario Outline: Sign-up validates required fields
    When I sign up leaving the "<field>" field empty
    Then I should see the sign-up error "<errorMessage>"

    Examples:
      | field    | errorMessage           |
      | name     | Name is required       |
      | email    | Email is required      |
      | phone    | Phone number is required |
      | password | Password is required   |

  Scenario: Sign-up requires accepting the terms and conditions
    When I sign up without accepting the terms and conditions
    Then I should see the sign-up error "You must accept the terms and conditions"
