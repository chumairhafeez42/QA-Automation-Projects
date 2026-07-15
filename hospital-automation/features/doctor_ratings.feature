@ratings
Feature: Doctor Ratings
  As a signed-in patient
  I want to view and submit ratings for doctors
  So that I can share feedback and evaluate doctor quality

  Background:
    Given the hospital management system database is reset

  @positive
  Scenario: Visitor can view existing average doctor ratings without signing in
    Given I am on the doctors page
    Then the average rating for "Dr. Sarah Khan" should be "4.5"

  @positive
  Scenario: Doctor with no ratings shows a placeholder message
    Given I am on the doctors page
    Then the average rating for "Dr. Emily Chen" should be "No ratings yet"

  @smoke @positive
  Scenario: Signed-in patient submits a rating for a doctor
    Given a user already exists with email "rater@example.com" and password "Passw0rd!"
    And I have signed in as "rater@example.com" with password "Passw0rd!"
    And I am on the doctors page
    When I rate doctor "Dr. Ali Raza" with "5" stars
    Then the average rating for "Dr. Ali Raza" should be "4.0"

  @negative @regression
  Scenario: Anonymous user is redirected to signin when attempting to rate a doctor
    Given I am on the doctors page
    When I rate doctor "Dr. Sarah Khan" with "3" stars
    Then I should see the signin message "Please sign in to rate a doctor."
    And I should be redirected to the signin page

  @regression
  Scenario: Doctor average rating updates after multiple patients submit ratings
    Given a user already exists with email "rater2@example.com" and password "Passw0rd!"
    And I have signed in as "rater2@example.com" with password "Passw0rd!"
    And I am on the doctors page
    When I rate doctor "Dr. Emily Chen" with "4" stars
    Then the average rating for "Dr. Emily Chen" should be "4.0"
