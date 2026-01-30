Feature: Campaign
    Background: User moves to Campaign screen
        When User is on campaign screen

    @statusTabFail @environmeentCleanUp @sanity
    Scenario: Verify that campaign detail is opening
	Given User is navigate to Campaign list page
    When User clicks on campaign
    Then Campaign detail page opens
    
    @statusTabFail @environmeentCleanUp @sanity
    Scenario: Check that recipients is showing all in reciepients in campaign details
    Given User is navigating to Campaign list page
    And User clicks on campaign
    When User clicks on Recipients
    Then All recipients are showing in recipient section

    @statusTabFail @environmeentCleanUp @sanity
    Scenario: Check that purge body is purging campaign body
    Given User navigates on to Campaign list page
    When User clicks on campaign
    And User clicks on purge body button
    And A Warning Form appears
    And User clicks on Yes or No button
    Then Campaign body purged successfully
    
    @statusTabFail @environmeentCleanUp @sanity
    Scenario: Verify that card view form is working properly in campaign module
    Given User is navigating to Campaign page
    And campaigns are in listview form
    When User clicks on card view icon button
    Then campaign card converted in card view form
 
    @statusTabFail @environmeentCleanUp @sanity
    Scenario: Verify that listview form is working properly in campaign module
    Given User is navigating on to Campaign page
    When User clicks on listview icon button
    Then campaign card converted in list form
 
    @statusTabFail @environmeentCleanUp @sanity
    Scenario: Check that search functionality is working or not
    Given User is navigating to Campaign page
    When User enter value in searchbox
    And User can search by selects Start End date
    Then Searched campaign appears

    @statusTabFail @environmeentCleanUp @sanity
    Scenario: Check that draft campaign is synced
    Given User is navigating to Campaign page
    When User clicks on draft tab 
    And User clicks on icon
    And User clicks on Campaign configurations 
    And User enter value in Email Subject
    And User open gmail
    And User Click on compose button
    And User enter 10 emails
    And User add value to subject
    And User add value in email body
    And User clicks configure button in campaign tab
    Then Success message appear on the top of page

 


