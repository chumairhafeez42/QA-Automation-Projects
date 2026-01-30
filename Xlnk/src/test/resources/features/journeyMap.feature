Feature: Journey Map

#  @Sanity
#  Scenario: Verify "Search input" with valid inputs
#    When User visits any short url
#    And User visits journey map tab
#    And User enters location in the search bar
#    And User clicks on submit button
#    Then Search results are shown according to the location entered

#  @Sanity
#  Scenario: Verify "Search input" with valid inputs
#    When User visits any short url
#    And User visits journey map tab
#    And User enters invalid url in the search bar
#    And User clicks on submit button
#    Then No data message with icon is displayed

  @Sanity
  Scenario: Verify "Search input" with valid inputs
    When User visits any short url
    And User visits journey map tab
    And User enters location in the search bar
    And User clicks on submit button
    And User observes journey map table
    Then Journey map table details are displayed to the user

