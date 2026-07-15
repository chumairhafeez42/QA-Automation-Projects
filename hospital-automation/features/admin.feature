@admin
Feature: Admin Rights & Access Control
  As an administrator
  I want exclusive access to manage users, doctors, and appointments
  So that only authorized staff can control system-wide data

  Background:
    Given the hospital management system database is reset

  @negative @security
  Scenario: Non-admin user cannot access the admin panel
    Given a user already exists with email "regularuser@example.com" and password "Passw0rd!"
    And I have signed in as "regularuser@example.com" with password "Passw0rd!"
    When I navigate to the admin panel
    Then I should see the admin access denied message "Access denied. Admins only."

  @negative @security
  Scenario: Non-admin user cannot access the medicine stock management page
    Given a user already exists with email "regularuser2@example.com" and password "Passw0rd!"
    And I have signed in as "regularuser2@example.com" with password "Passw0rd!"
    When I navigate to the medicine stock page
    Then I should see the medicine message "Access denied. Admins only."

  @smoke @positive
  Scenario: Admin can view the full list of registered users
    Given I have signed in as "admin@medicare.com" with password "Admin@123"
    When I navigate to the admin panel
    Then the user table should contain a row for email "admin@medicare.com" with role "admin"

  @positive
  Scenario: Admin can view all appointments booked across all patients
    Given a user already exists with email "patientA@example.com" and password "Passw0rd!"
    And I have signed in as "patientA@example.com" with password "Passw0rd!"
    And I have booked an appointment with doctor "Dr. Sarah Khan" on "2026-09-01" at "10:00"
    And I log out
    And I have signed in as "admin@medicare.com" with password "Admin@123"
    When I navigate to the admin panel
    Then the all-appointments table should contain a row for patient "patientA@example.com" and doctor "Dr. Sarah Khan"

  @positive @regression
  Scenario: Admin can add a new doctor to the system
    Given I have signed in as "admin@medicare.com" with password "Admin@123"
    And I navigate to the admin panel
    When I add a new doctor named "Dr. Bilal Ahmed" with specialization "Neurologist"
    Then I should see the admin message "Doctor added successfully."
    And the doctors page should list a doctor named "Dr. Bilal Ahmed"

  @negative @regression
  Scenario: Admin cannot add a doctor with missing details
    Given I have signed in as "admin@medicare.com" with password "Admin@123"
    And I navigate to the admin panel
    When I add a new doctor named "" with specialization ""
    Then I should see the admin message "Doctor name and specialization are required."
