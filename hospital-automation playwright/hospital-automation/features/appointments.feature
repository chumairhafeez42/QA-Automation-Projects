@appointments
Feature: Doctor Appointment Booking
  As a signed-in patient
  I want to book, view, and cancel appointments with doctors
  So that I can manage my healthcare visits

  Background:
    Given the hospital management system database is reset
    And a user already exists with email "patient2@example.com" and password "Passw0rd!"
    And I have signed in as "patient2@example.com" with password "Passw0rd!"
    And I am on the appointments page

  @smoke @positive
  Scenario: Successfully book an appointment with a doctor
    When I book an appointment with doctor "Dr. Sarah Khan" on "2026-08-10" at "10:00"
    Then I should see the appointment message "Appointment booked successfully!"
    And the appointment list should contain a row for doctor "Dr. Sarah Khan" on "2026-08-10" with status "Confirmed"

  @positive
  Scenario: Patient views their list of booked appointments
    Given I have booked an appointment with doctor "Dr. Ali Raza" on "2026-08-11" at "09:30"
    When I view my appointments
    Then the appointment list should contain a row for doctor "Dr. Ali Raza" on "2026-08-11" with status "Confirmed"

  @positive @regression
  Scenario: Patient cancels a previously booked appointment
    Given I have booked an appointment with doctor "Dr. Emily Chen" on "2026-08-12" at "14:00"
    When I cancel the appointment with doctor "Dr. Emily Chen" on "2026-08-12"
    Then the appointment list should contain a row for doctor "Dr. Emily Chen" on "2026-08-12" with status "Cancelled"

  @negative
  Scenario: Booking fails when date or time is missing
    When I attempt to book an appointment with doctor "Dr. Sarah Khan" without selecting a date or time
    Then I should see the appointment message "Please select both date and time."

  @negative
  Scenario: Booking fails for a date in the past
    When I book an appointment with doctor "Dr. Sarah Khan" on "2020-01-01" at "10:00"
    Then I should see the appointment message "Cannot book an appointment in the past."

  @negative @regression
  Scenario: Booking fails when the doctor already has a confirmed appointment at that slot
    Given I have booked an appointment with doctor "Dr. Sarah Khan" on "2026-08-15" at "11:00"
    When I book an appointment with doctor "Dr. Sarah Khan" on "2026-08-15" at "11:00"
    Then I should see the appointment message "This doctor is already booked at that date and time."
