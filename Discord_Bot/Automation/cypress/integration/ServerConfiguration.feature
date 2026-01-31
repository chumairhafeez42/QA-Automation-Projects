Feature: ServerConfiguration

Scenario: Check CSV Flow Continue Button is functional or not

    Given User is on Server Configuration Screen
    And User hover over Continue button 
    When User clicks on Continue button in Csv Flow Tab
    And A new Window appears
    Then it is redirected to new page Import CSV File 



# Scenario: Check AD Flow Continue Button is functional or not
#     Given User is on Server Configuration Screen
#     And User hover over Continue button 
#     When User clicks on Continue button in AD Flow Tab
#     And A new Window appears

# Scenario: Check Manual Flow Continue Button is functional or not
#     Given User is on Server Configuration Screen
#     And User hover over Continue button 
#     When User clicks on Continue button in Manual Flow Tab
#     And A new Window appears
#     Then it is redirected to new page Create Roles Manual
