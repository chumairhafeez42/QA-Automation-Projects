@appointments
Feature: Appointment Management
  As a staff member or customer
  I want to create, view, and cancel appointments
  So that food-chain visits and consultations are properly scheduled

  Background:
    Given I sign in with the "staff" account
    And I am on the appointments page

  @smoke
  Scenario: Successfully schedule a new customer appointment
    When I create an appointment with the following details:
      | customer      | branch        | date       | time  | purpose            |
      | John Carter   | Downtown      | 2026-08-01 | 10:30 | Catering consultation |
    Then I should see the appointment success message "Appointment scheduled successfully"
    And the new appointment should appear in the appointments list

  Scenario: Prevent scheduling an appointment in the past
    When I create an appointment with the following details:
      | customer    | branch   | date       | time  | purpose        |
      | John Carter | Downtown | 2020-01-01 | 09:00 | Catering visit |
    Then I should see the appointment error "Appointment date must be in the future"

  Scenario: Cancel an existing appointment
    Given an appointment "APT-1001" exists with status "Scheduled"
    When I cancel appointment "APT-1001"
    Then the appointment "APT-1001" status should be "Cancelled"

  Scenario Outline: Appointment status transitions are enforced
    Given an appointment "<appointmentId>" exists with status "<initialStatus>"
    When I attempt to move appointment "<appointmentId>" to status "<targetStatus>"
    Then the operation result should be "<result>"

    Examples:
      | appointmentId | initialStatus | targetStatus | result  |
      | APT-2001      | Scheduled     | Completed    | allowed |
      | APT-2002      | Cancelled     | Completed    | blocked |
      | APT-2003      | Completed     | Scheduled    | blocked |

  Scenario: Double-booking the same branch, date, and time is rejected
    Given an appointment already exists for branch "Downtown" on "2026-08-05" at "14:00"
    When I create an appointment with the following details:
      | customer     | branch   | date       | time  | purpose      |
      | Priya Nair   | Downtown | 2026-08-05 | 14:00 | Order pickup |
    Then I should see the appointment error "This time slot is already booked"
