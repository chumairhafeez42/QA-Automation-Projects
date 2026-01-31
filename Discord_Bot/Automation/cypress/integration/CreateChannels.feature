Feature: CreateChannels


Scenario: How to Create Channels using Manual Flow

    Given User navigates to Server Configuration Screen
    And User clicks on Continue button in Manual Flow Tab
    And A new Window appears Create Roles
    And User clicks on Next button
    And it is redirected to new page Create Categories
    When User clicks on next button
    And it is redirected to new page Create Channels
    And User enters Channels Name in input field
    And User can Select Category from dropdown menu
    And User can Select Private Channel by enabling button
    And User can Select the Roles who can access this category by enabling button
    And User clicks on Create button
    Then A Channel is created
    And created channels are shown in Channels box
    And User can delete the channels by clicks on delete icon


Scenario: Check Validation of Input field ChannelsName is functional or not

    Given User navigates to Create Channel Screen
    When User not enters ChannelName in input field clicks on create button
    Then A validation should be appear Characters only


Scenario: Check Private Channel switch button is functional or not

    Given User navigates to Create Channel Screen 
    And User enters Channels Name in input field
    When User can Select Private Category by enabling button
    And User can Select the Roles who can access this category by enabling button
    And User clicks on Create button
    Then A Channel is created
    And private Channel are shown in Channels box


Scenario: Check A Created Channel is deleted or not

    Given User navigates to Create Channel Screen
    And User enters Channel Name in input field
    And User selects Private Channel Setting Role Access by enabling switch button
    And User clicks on Create Button
    And A Channel is created
    And Created Channels are shown in Channels box
    When User clicks on delete icon in roles box
    And A Alert appears Are you sure you want to remove this role this active cant be undone YES OR NO
    And user clicks on Yes 
    Then Created Channels is deleted
    And user clicks on No 
    And Created Channels is not deleted


Scenario: Check Channels Screen check boxes is functional

    Given User navigates to  Create Channel Screen 
    When User clicks on check box
    Then checkbox should be checked


Scenario: Check Back Button is functional or not
    Given User navigates to Create Channels Screen 
    When User clicks on Back Button at top left corner
    Then it is redirected to previous page Create Categories Screen


Scenario: Check Skip this step is functional or not

    Given User navigates to Create Channels Screen 
    When User clicks on skip this step Button at top right corner
    Then it is redirected to next page Invite Member Screen


Scenario: Check Jump to Dashboard button is functional or not

    Given User navigates to Create Channels Screen 
    When User clicks on Jump to Dashboard Button at top right corner
    Then it is redirected to Dashboard page

