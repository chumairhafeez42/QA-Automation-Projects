Feature: Sign In

  Scenario: Verify user "Sign In" with invalid inputs
    When User enters invalid credentials
    And User clicks on sign in button
    Then User is not logged in and unsuccessful toast message is displayed