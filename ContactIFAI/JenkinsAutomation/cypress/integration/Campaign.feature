Feature: Dashboard
    Background: User moves to Campaign screen
        When User is on campaign screen


    Scenario: Verify that campaign detail is opening
	Given User is navigate to Campaign list page
    When User clicks on campaign
    Then Campaign detail page opens


    Scenario: Check that recipients is showing all in reciepients in campaign details
    Given User is navigating to Campaign list page
    And User clicks on campaign
    When User clicks on Recipients
    Then All recipients are showing in recipient section

    Scenario: Check that purge body is purging campaign body
    Given User navigates on Campaign list page
    When User clicks on campaign
    And User clicks on purge body button
    And A Warning Form appears
    And User clicks on Yes button
    Then Campaign body purged successfully
