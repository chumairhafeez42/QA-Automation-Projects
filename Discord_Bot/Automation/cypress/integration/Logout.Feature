Feature: Logout

Scenario: Check user logout by click Logout button
Given User is on Homepage
And User clicks on User name button in right main menu
And  A drop-down menu open
When User click on Logout Button
Then user is logged out
And User is redirected to Homepage


