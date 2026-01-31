Feature: Tags
    Background: user moves to tag screen
        When User click on Tags

    Scenario: Check create button is enable when Tag form is empty
        Given User is navigate to Tags page
        When User clicks on New Tag button
        And A new Modal will be appears
        Then Create button is enabled for empty form

    Scenario: Check create button is enable when update tagname field
        Given User is navigate to Tags page
        When User clicks on New Tag button
        And A new Modal will be appears
        And User enters value in Tagname input field
        Then Tag create button should be enable
        And User close the modal

    Scenario: Check success validation message appears or not while creating tag
        Given User is navigate to Tags page
        And User clicks on New Tag button
        And A new Modal will be appears
        And User enters value in Tagname input field
        And Tag create button should be enable
        When User clicks on Create button
        Then Success message should appears

    Scenario: Check tagname and description is showing in Tags_list page
        Given User is navigate to Tags page
        When User clicks on New Tag button
        And A new Modal will be appears
        And User enters value in TagName
        And Add value in description
        And User clicks on Create button
        And Success message appears
        Then Newly added tag name is showing in list
        And Newly added tag description is showing in list

    Scenario: Check create button is disabled while removing value from tagname field
        Given User is navigate to Tags page
        When User clicks on New Tag button
        And A new Modal will be appears
        And User enters value in Tagname input field
        And Tag create button is enable
        And User removes values from input field
        Then Create button disabled
        And User close the modal

    Scenario: Check Tags_Page behaviour on selecting Dropdown "Recently Added" filter
        Given User is navigate to Tags page
        When User clicks on Filter dropdown menu
        And User clicks on Recently Added filter
        Then Tags added 1 day before are displaying


    Scenario: Check that search is working PROPERLY
        Given User is navigate to Tags page
        When User type tag name in the searchbox
        And User press Enter button
        Then Tag will be appeared according to searh condition

    Scenario: Check that search fields accepting special characters and integers
        Given User is navigate to Tags page
        When User type tag name in the searchbox
        And User types special characters
        And User press enter key
        Then On entering special character and integer tag is showing or not


    Scenario: Check that pagination is working properly in the tags_page
        Given User is navigate to Tags page
        When User clicks on pagination button
        Then Remaining tags are showing on that pagination number

    Scenario: Check that counts of tags are showing accurate or not
        Given User is navigate to Tags page
        When User changes the values from item containing dropdown list
        Then Number of  tags are showing in the table according to the value in the item containing dropdownlist


    Scenario: Check the behaviour of the page on selecting Tagname from the tagslist
        Given User is navigate to Tags page
        When User select tag by clicking on checkbox
        Then All fiter dropdown disappears
        And New Tag button disappears
        And Edit option will display
        And Delete option will display


    Scenario: Check the behaviour of the page on Select all Tagname from the tagslist
        Given User is navigate to Tags page
        When User select all tags by clicksing on checkbox
        Then All tags selected
        And New Tag button disappears
        And Delete button will be display

    Scenario: Check the behaviour on clicking edit option
        Given User is navigate to Tags page
        When User select first tag by clicking on checkbox
        And All filter dropdown disappears
        And New Tag button disappears
        And Edit will display
        And Delete will display
        And User Click on Edit
        Then A modal form will appears containing values of selected tag
        And User closes the modal

    Scenario: Check that edit modal form containing tag values after updating
        Given User is navigate to Tags page
        When User selects tag by clicking on checkbox
        And All filter dropdown disappears
        And New Tag button disappears
        And Edit will display
        And Delete will display
        And User Click on Edit
        And A modal form will appears containing values of selected tag
        And User update the value of Tag name field
        And User update the value of Tag Description field
        And User clicks on Cancel button
        And Click on Edit
        Then Edit form containing the same value as selected tag


    Scenario: Verify that success message after updating tag appears or not
        Given User is on Tag list page
        When User selects tag by clicking on checkbox
        And All filter dropdown disappears
        And New Tag button disappears
        And Edit will display
        And Delete will display
        And User Click on Edit
        And A modal form will appears containing values of selected tag
        And User change the value of Tag name
        And User change the value of Tag Description
        And User clicks on Update button
        Then A success message appears on the top of page

    Scenario: Check that tagname field is updated in tag list
        Given User is on Tag list page
        When User selects tag by clicking on checkbox
        And All filter dropdown disappears
        And New Tag button disappears
        And Edit will display
        And Delete will display
        And User Click on Edit
        And A modal form will appear containing values of selected tag
        And User update the value of Tagname
        And User update the value of TagDescription
        And Click on Update button
        And A success message appears on the top of page
        Then Updated tag name is showing in the tag list

    Scenario: Check that Description field is updated in tag list
        Given User is navigate to Tags page
        When User selects tag by clicking on checkbox
        And All filter dropdown disappears
        And New Tag button disappears
        And Edit will display
        And Delete will display
        And User Click on Edit
        And A modal form will appears containing values of selected tag
        And User update the value of Tag name
        And User update the value of Tag Description
        And CLick on Update button
        And A success message appears on the top of page
        Then Updated description is showing in the tag list


    Scenario: Check the behaviour on clicking delete option
        Given User is navigate to Tags page
        When User selects tag by clicking on checkbox
        And All filter dropdown disappears
        And New Tag button disappears
        And Edit will display
        And Delete will display
        And User Click on Delete
        Then A modal form will appears
        And Are You Sure You want to Delete
        And Select Delete Or Cancel


    Scenario: Check succes message on clicking delete button
        Given User is navigate to Tags page
        When User selects tag by clicking on checkbox
        And All filter dropdown disappears
        And New Tag button disappears
        And Edit will display
        And Delete will display
        And User clicks on delete option
        And A modal form will appears containing two buttons
        And User clicks on delete button
        Then A success message is appears after clicking delete button

    Scenario: Check the behaviour of cancel button in delete modal form
        Given User is navigate to Tags page
        When User selects tag by clicking on checkbox
        And All filter dropdown disappears
        And New Tag button disappears
        And Edit will display
        And Delete will display
        And User clicks on Delete
        And A modal form will appears
        And User clicks on cancel button
        Then Modal disappears

    Scenario: Check Tags_Page behaviour on selecting dropdown All filter
        Given User is navigate to Tags page
        When User Click on Filter dropdown
        And User clicks on All filter
        Then All tags are showing

    Scenario: Check the behaviour on clicking edit option
        Given User is navigate to Tags page
        When User select first tag by clicking on checkbox
        And All filter dropdown disappears
        And New Tag button disappears
        And Edit will display
        And Delete will display
        And User Click on Edit
        Then A modal form will appears containing values of selected tag
        And User closes the modal


    Scenario: check tags created date is accurate or not
        Given User is navigate to Tags page
        When User clicks on New Tag button
        And A tag modal form will appears
        And User enters value in TagName
        And Add value in description
        And User clicks on Create button
        And Success message appears
        Then Newly added tag name is showing in tag list
        And Tag created date is showing in list


    Scenario: Check newly created tagname appears in tags_list or not
        Given User is navigate to Tags page
        And User Click on New Tag button
        And A tag modal form will appears
        And User enters value in TagName
        When User clicks on Create button
        And Success message appears
        Then Newly added tag name is showing in tags list

# Testcases End


# Scenario: Check that tag list page is opening
#     When User is on Tags screen
#     Then  Tags list page opens
#     And Create button is disabled for empty form

# Scenario: check no.of contacts associated tags updated or not
#     Given User is navigate to Tags page
#     When User clicks on New Tag button
#     And A modal form will appears
#     And User enters value in TagName
#     And Add value in description
#     And Create button enable
#     When User clicks on Create button
#     And Success message appears
#     Then Newly added tag name is showing in list
#     And Newly added description is showing in list
#     And Tag created date is showing in list
#     And No of contacts is showing in list

