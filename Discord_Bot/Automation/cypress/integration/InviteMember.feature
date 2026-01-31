Feature: InviteMember

Scenario: How to Invite Members using Manual Flow

    Given User navigates to Server Configuration Screen
    And User clicks on Continue button in Manual Flow Tab
    And A new Window appears Create Roles
    And User clicks on Next button
    And it is redirected to new page Create Categories
    And User clicks on Next button
    And it is redirected to new page Create Channels
    When User clicks on Next button
    And it is redirected to new page Invite Members
    And User add invite link in input field Discord Server Invite Link
    And User add tag Emails in input field Add a Tag
    And User clicks on Add button
    And Email are added in below box
    And Email can be edit by clicks on ediit button
    And Email can be delete by clicks on delete button
    And User clicks on Send Invites button
    Then Invite links sent to added Emails
    And it is redirected to Invite Member Success Screen
    And A message box appears Invites Sent


# Scenario: Check fields are empty and click Send Invite button is validation occurs
#     Given User navigates to Invite Members Screen 
#     When User left iput fields empty
#     And  User clicks on Send Invites  Button
#     Then A vallidation should be appears Please Fill Out this Field 


# Scenario: Check Invite link Input fields has validation or not Invite Member Screen
#     Given User navigates to Invite Members Screen 
#     When User enter URL in input fields Discord server Invite Link
#     Then A vallidation should be appears Please enter a Valid URL


# Scenario: Check Add a Tag Input fields has validation or not Invite Member Screen
#     Given User navigates to Invite Members Screen 
#     When User enter Email in input fields Add a tag
#     Then A vallidation should be appears Please enter a valid EMAIL

# Scenario: Check User Can edit emails on Invite Member Screen
    # Given User is on Invite Member  
    # And User add invite link in input field Discord Server Invite Link
    # And User add tag Emails in input field Add a Tag
    # And User clicks on Add button
    # And Email are added in below box
    # When User clicks on edit button
    # And User edit email in input field
    # And User press enter button
    # Then email is updated


# Scenario: Check User Can delete emails on Invite Member Screen
    # Given User is on Invite Member  
    # And User add invite link in input field Discord Server Invite Link
    # And User add tag Emails in input field Add a Tag
    # And User clicks on Add button
    # And Email are added in below box
    # When User clicks on delete button
    # And A Alert appears Are you sure you want to remove this email this active cant be undone YES OR NO
    # And User clicks on Yes
    # Then email is deleted

# Scenario: Check Back Button is functional or not

#     Given User navigates to Invite Members Screen 
#     When User clicks on Back Button at top left corner
#     Then it is redirected to previous page Create Channel Screen


# Scenario: Check Jump to Dashboard button is functional or not
#     Given User navigates to Invite Members Screen 
#     When User clicks on Jump to Dashboard Button at top left corner
#     Then it is redirected to Dashboard page
