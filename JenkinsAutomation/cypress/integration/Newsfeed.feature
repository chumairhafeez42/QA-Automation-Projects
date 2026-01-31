Feature: Newsfeed
    Background: User moves to Newsfeed screen
        When User click on Newsfeed

    @statusTabFail @environmeentCleanUp @sanity
    Scenario: Check That Reload button in newsfeed is functional or not
	Given User is navigating to NewsFeed Page
    When User clicks on Reload button
    Then News are reloaded on the based of companies source scores


    @statusTabFail @environmeentCleanUp @sanity
    Scenario: Verify That Newsfeed is coming or not based on campaign communication?
    Given User is navigating to Campaign Page
    And User verify that campaign is enabled
    When User navigates to Newsfeed page
    And  User verify the news coming from that company which is communicated in campaign 
    Then Most communicated company news appears on top

     @statusTabFail @environmeentCleanUp @sanity
    Scenario: Check that Like button functionality is working fine or not?
    Given User is navigating to newsfeed page
    And News are reloaded on the based of companies & source scores
    When User clicks on Like button any of news
    And A Success message appears
    And Like button disabled based on source
    Then In backend source & company score is incremented
