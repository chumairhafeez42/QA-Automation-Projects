Feature: CreateRoles

Scenario: How to Create Roles using Manual Flow

    Given User navigates to Server Configuration Screen
    When User clicks on Continue button in Manual Flow Tab
    And A new Window appears it is redirected to new page Create Roles
    And User enters Role Name in input field
    And User can select color from Role Colors
    And User can set Role Setting by enabling button
    And User can set up Permisions by enabling button
    And User can check uncheck box Create Permission Preset
    And User can scroll for more permissions
    And User clicks on Create button
    Then A role is created
    And created roles are shown in Roles box
    And permison presets shown in Permission Presets box


Scenario: Check Validation of Input field RoleName is functional or not

    Given User is on to Create Role Screen
    When User not enters RoleName in input field click to create button
    Then A validation should be appear Characters only


Scenario: Check Clear Permisions is clearing all permision's or not?

    Given User navigates to Create Role Screen
    And User enters Role Name in input field
    And User selects Role Setting by enabling button
    When User selects set up Permisions by enabling button
    And User clicks on Clear Permissions Button
    Then All permisions switch buttons are disabled 
    And All permissions are clear


Scenario: Check Create Permission Preset appears in Preset Box or not
    Given User is navigate to Create Role Screen
    And User enters Role Name in input field
    And User  selects color from Role Colors
    And User selects  Role Setting by enabling button
    And User selects set up Permisions by enabling button
    When User clicks on Create Permissions presets checkbox
    And User clicks on Create Button
    Then A role is created
    And created roles are shown in Roles box
    And created permision presets are shown in Permission Presets box



Scenario: Check A Created Role is deleted or not
    Given User is navigates to Create Role Screen
    When User clicks on delete icon in roles box
    And A Alert Alert appears  Are you sure you want to remove this role this active cant be undone YES OR NO
    And user clicks on Yes
    Then Created roles is deleted
    And user clicks on No
    And Created roles isnt deleted


Scenario: Check Back Button is functional or not
    Given User is on to Create Role Screen
    When User clicks on Back Button at top left corner
    Then it is redirected to previous page Server Configuration Screen


Scenario: Check Skip this step is functional or not

    Given User is on to Create Role Screen page
    When User clicks on skip this step Button at top right corner
    Then it is redirected to next page Create Category Screen



Scenario: Check Jump to Dashboard button is functional or not
    Given User navigating to Create Role Screen
    When User clicks on Jump to Dashboard Button at top left corner
    Then it is redirected to Homepage