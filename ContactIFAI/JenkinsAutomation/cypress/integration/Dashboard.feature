Feature: Dashboard
    Background: User moves to Dashboard screen
        When User is on dashboard screen




    Scenario: Dashboard Total Contacts Today filter count functionaly working or not
    Given User is navigating to Dashboard Screen 
    When User selects today filter in total contacts dropdown list
    Then total counts of contacts created by today appears on card

    Scenario: Dashboard Total Contacts 7 days filter count functionaly working or not
    Given User is navigate to Dashboard Screen 
    When User selects 7 days filter in total contacts dropdown list
    Then total counts of contacts created by 7 days appears on card

    Scenario: Dashboard Total Contacts 30 days filter count functionaly working or not
    Given User is navigating on Dashboard Screen 
    When User selects 30 days filter in total contacts dropdown list
    Then total counts of contacts created by 30 days appears on card

    Scenario: Dashboard Total Contacts 3 months filter count functionaly working or not
    Given User is navigated to Dashboard Screen 
    When User selects 3 months filter in total contacts dropdown list
    Then total counts of contacts created by 3 months appears on card

    Scenario: Dashboard Total Contacts All filter count functionaly working or not
    Given User is navigates to Dashboard Screen
    When User selects all filter in total contacts dropdown list
    Then total counts of contacts created by all appears on card

    Scenario: Dashboard Total Campaigns today filter count functionaly working or not
    Given User navigating to Dashboard Screen 
    When User selects today filter in total campaign dropdown list
    Then total counts of campaigns created by today appears on card

    Scenario: Dashboard Total Campaigns 7 days filter count functionaly working or not?
    Given User navigate to Dashboard Screen 
    When User selects 7 days filter in total campaign dropdown list
    Then total counts of campaign created by 7 days appears on card

    Scenario: Dashboard Total Campaigns 30 days filter count functionaly working or not?
    Given User navigates to Dashboard Screen 
    When User selects 30 days filter in total campaign dropdown list
    Then total counts of campaign created by 30 days appears on card

    Scenario: Dashboard Total Campaigns 3 months filter count functionaly working or not?
    Given User navigating on Dashboard Screen 
    When User selects 3 months filter in total campaign dropdown list
    Then total counts of campaigns created by 3 months appears on card

    Scenario: Dashboard Total Campaigns All filter count functionaly working or not?
    Given User navigated to Dashboard Screen 
    When User selects All filter in total campaigns dropdown list
    Then total counts of campaigns created by All appears on card

    Scenario: Dashboard Total bounced Today filter count functionaly working or not
    Given User navigating to bounced backs Dashboard Screen
    When User selects today filter in total bounced dropdown list
    Then total counts of bounced created by today appears on card

    Scenario: Dashboard Total bounced 7 days filter count functionaly working or not
    Given User navigates to bounced backs Dashboard Screen
    When User selects 7 days filter in total bounced dropdown list
    Then total counts of bounced created by 7 days appears on card

    Scenario: Dashboard Total bounced 30 days filter count functionaly working or not
    Given User is navigating on bounced backs Dashboard Screen
    When User selects 30 days filter in total bounced dropdown list
    Then total counts of bounced created by 30 days appears on card

    Scenario: Dashboard Total bounced 3 months filter count functionaly working or not
    Given User navigating on bounced backs Dashboard Screen
    When User selects 3 months filter in total bounced dropdown list
    Then total counts of bounced created by today appears on card

    Scenario: Dashboard Total bounced All filter count functionaly working or not
    Given User is navigated to bounced backs Dashboard Screen
    When User selects All filter in total bounced dropdown list
    Then total counts of bounced created by All appears on card

    Scenario: Dashboard Total Tasks Today filter count functionaly working or not
    Given User navigating to Tasks Dashboard Screen
    When User selects today filter in total tasks dropdown list
    Then total counts of tasks created by today appears on card

    Scenario: Dashboard Total Tasks 7 days filter count functionaly working or not
    Given User navigates to Tasks Dashboard Screen
    When User selects 7 days filter in total tasks dropdown list
    Then total counts of tasks created by 7 days appears on card

    Scenario: Dashboard Total Tasks 30 days filter count functionaly working or not
    Given User is navigating on Tasks Dashboard Screen
    When User selects 30 days filter in total tasks dropdown list
    Then total counts of tasks created by 30 days appears on card

    Scenario: Dashboard Total Tasks 3 months filter count functionaly working or not
    Given User navigating on Tasks Dashboard Screen
    When User selects 3 months filter in total tasks dropdown list
    Then total counts of tasks created by 3 months appears on card

    Scenario: Dashboard Total Tasks All filter count functionaly working or not
    Given User is navigated to Tasks Dashboard Screen
    When User selects All filter in total tasks dropdown list
    Then total counts of tasks created by All appears on card

    Scenario: Check Top Campaign search by months are functionaly working or not
    Given User is navigating to treding companies Dashboard Screen
    When User Hover over Trending companies card
    Then Trending companies associated contacts based communication appears on card

