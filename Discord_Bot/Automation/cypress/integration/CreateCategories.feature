Feature: CreateCategories


Scenario: How to Create Categories using Manual Flow
    Given User navigates to Server Configuration Screen
    And User clicks on Continue button in Manual Flow Tab
    And A new Window appears  Create Roles
    When User clicks on Next button
    And it is redirected to new page Create Categories
    And User enters Category Name in input field
    And User can Select Private Category by enabling button
    And User can Select the Roles who can access this category by enabling button
    And User clicks on Create button
    Then A Category is created
    And created categories are shown in Categories box
    And User can delete the categories by clicks on delete icon


Scenario: Check Validation of Input field CategoryName is functional or not 

    Given User navigates to Create Categories Screen
    When User not enters CategoriesName in input field clicks on create button
    Then A validation should be appear Characters only


Scenario: Check Private Category switch button is functional or not

    Given User navigates to Create Categories Screen 
    And User enters Category Name in input field
    When User can Select Private Category by enabling button
    And User can Select the Roles who can access this category by enabling button
    And User clicks on Create button
    Then A Category is created
    And private categories are shown in Categories box


Scenario: Check A Created Categories is deleted or not

    Given User navigates to Create Categories Screen 
    And User enters Categories Name in input field
    And User selects Private Category Setting Role Access by enabling switch button
    And User clicks on Create  Button
    And A Category is created
    And created categories are shown in Roles box
    When User clicks on delete icon in roles box
    And A Alert Alert appears Are you sure you want to remove this role this active cant be undone YES OR NO 
    And user clicks on Yes 
    Then Created categories is deleted
    And user clicks on No 
    And Created categories isnt deleted

Scenario: Check Back Button is functional or not
    Given User navigates to Create Categories Screen 
    When User clicks on Back Button at top left corner
    Then it is redirected to previous page Create Role Screen

Scenario: Check Skip this step is functional or not
    Given User navigates to Create Categories Screen 
    When User clicks on skip this step Button at top right corner
    Then it is redirected to next page Create Channel Screen

Scenario: Check Jump to Dashboard button is functional or not
    Given User navigates to Create Categories Screen 
    When User clicks on jump to dashboard Button at top right corner
    Then it is redirected to dashboard page


