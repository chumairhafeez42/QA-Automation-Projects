Feature: Notification
    Background: User is navigating to notification view all
        When User click on view all

    Scenario: Check total count of notification on notification page is showing or not
        Given User is navigating to notification page
        When  User scroll down the page top to bottom
        Then total no. of notification count appears at top and bottom of page

    Scenario: Check that pagination in notification screen is functional or not
        Given User is navigating to notification page
        When  User clicks on any pagination number below the table
        Then Notifications present on that pagination number are showing in the table

    Scenario: Check that All notification are showing
        Given User is navigating to notification page
        When User select All from the dropdown
        Then Only All notifications are showing

    Scenario: Check that Manager notifications are showing
        Given User is navigating to notification page
        When User select Manager from the dropdown
        Then Only Manager notifications are showing

    Scenario: Check that Campaign notifications are showing
        Given User is navigating to notification page
        When User select Campaign from the dropdown
        Then Only Campaign notifications are showing

    Scenario: Check that Task notification are showing
        Given User is navigating to notification page
        When User select Tasks from the dropdown
        Then Only Task notifications are showing

    Scenario: Check that Contacts notification are showing
        Given User is navigating to notification page
        When User select Contacts from the dropdown
        Then Only Contacts notifications are showing

    Scenario: Check that Tags notification are showing
        Given User is navigating to notification page
        When User select Tags from the dropdown
        Then Only Tags notifications are showing


    # Scenario: Check that Configurations notification are showing
    #     Given User is navigating to notification page
    #     When User select Configurations from the dropdown
    #     Then Only Configurations notifications are showing