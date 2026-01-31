Feature: Setting
    Background: User is navigating to Settings Page
        When  User is navigating to Setting page
    
    Scenario: Check the behavior of page on clicking Edit in settings page
    Given User is navigating to Setting page
    When User clicks on Edit
    Then Some fields of form are enabled
    And Update button is showing at the end of the form

    Scenario: How to User Update profile data from settings
    Given User is navigating to Setting page
    When User clicks on Edit
    And Change the value of first name field
    And Change the value of last name field
    And Click on update button
    Then A success message appears at the top of page
    And Values of firstname and lastname are changed
    And Whole form become disabled

    Scenario: Check that Change Password button is functional or not
    Given User is navigating to Setting page
    When User clicks on Change password button
    Then A modal form of password change appears

    Scenario: Check that In change password empty modal form Validation appears or not
    Given User is navigating to Setting page
    And User clicks on Change password button
    And A modal form of password change appears in settings
    When User clicks on Change Password with empty fields
    Then A validation appears

    Scenario: Check that in change password modal invalid password validation message appears or not
    Given User is navigating to Setting page
    And User clicks on Change password button
    And A modal form of password change appear
    And User enters old password
    And User enters new password
    When User enters invalid confirm password
    Then A validation message appears 

    Scenario: Check that password update success message appears or not
    Given User is navigating to Setting page
    And User clicks on Change password button
    And A popup form of password change appears
    And User enters old password in old password field
    And User enter new password in new password field
    When User enter valid confirm password in confirm password field
    And User clicks on change password button in popup
    Then A Success appears on top password change

    Scenario: How to configure an Gmail account from settings
    Given User is navigating to Setting page
    When User click on Configure button
    And A modal will appears
    And User enters gmail email you want to link
    And User enters gmail password
    And Google ask for first permission
    And User clicks on Allow button
    And Google ask for second permission
    And User clicks on Allow button
    Then Gmail account is configured
    And Remove Configuration button will appears 

    Scenario: Check that remove configuration functionality is working fine or not
    Given User is navigating to Setting page
    When User click on remove configuration button
    And A modal will appears
    And User clicks on Yes in permission modal form
    Then Account would be unlinked

    Scenario: Check validation appears on empty field XLnk API Key in settings
    Given User is navigating to Setting page
    When User type empty data in Xlnk key field
    And User clicks on Update button
    Then Validation message appears
        
    Scenario: check success message appears while XLnk API Key update
    Given User is navigating to Setting page
    When User type data in Xlnk key field
    And User clicks on Update button
    Then Xlink key is updated
    And Success message appears
  
    Scenario: Check that Add New Manager button is functional or not
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    When User click on Add New Manager button
    Then A modal form appears

    Scenario: Check that Add New Manager form validation appears or not
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    And User click on Add New Manager button
    And A manager modal form appears
    And All fields are empty in modal form
    When User clicks on Save button
    Then manager validations appears

    Scenario: Check Validation appears for empty firstname field While creating a manager
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    And User click on Add New Manager button
    And A new modal form appears in manager
    And User empty first name field
    And User filled last name field
    And User filled email field
    And User click on Save button in modal
    Then Validation messages appears below firstname field

    Scenario: Check Validation for empty lastname field While creating a manager
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    And User click on Add New Manager button
    And A popup modal form appears
    And User enters first name
    And User leave last name field empty in lastname
    And User filled the email field in email
    And User click on Save button
    Then Validation messages appears below lastname field

    Scenario: Check Validation for email format in While creating a manager
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    And User click on Add New Manager button
    And A popup modal form appears
    And User enters first name
    And User enters last name
    And User enters email field with wrong email address format
    And User click on Save button
    Then Validation messages appears email format


    Scenario: Check Validation for empty email field While creating a manager
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    And User click on Add New Manager button
    And A popup modal form appears
    And User enters first name
    And User enters last name
    And User enters empty data in email field
    And User click on Save button
    Then Validation messages appears email provide

    Scenario: How to create a manager user
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    When User click on Add Manager
    And User firstname in firstname field
    And User lastname in lastname field
    And User email in email field
    And User clicks on create manager button
    Then Manager detail is showing

    Scenario: How to check User manager details
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    When User click on Permission & Roles
    And User click on Profile button
    Then Manager detail is showing

    Scenario: How to assign manager permissions and roles
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    And User Cliks on Permissions & Roles tab
    And User click on Contact Tab
    And User clicks on campaign Tab
    And  User clicks on Task Tab
    Then Different checkbox of permission are showing

    Scenario: Check that behaviour of Can Ignore unchecking in contacts roles and permissions
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    And User is on Roles & Permission in Managers page
    When Click on Contacts accordian
    And User unchecking Can Ignore by clicking on the checkbox
    And User click on Update Permissions button
    Then A success message appears on the top of page

    Scenario: Check that behaviour of Can White List unchecking in contacts roles and permissions
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    And User is on Roles Permission in Managers page
    When User clicks on Contacts accordian
    And User unchecking Can White List by clicking on the checkbox
    And User click on Update Permissions button
    Then A success message appears on the top of page

    Scenario: Check that behaviour of Can Edit unchecking in contacts roles and permissions
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    And User is on Roles & Permission in Managers page
    When Click on Contacts accordian
    And User unchecking Can Edit by clicking on the checkbox
    And User click on Update Permissions button
    Then A success message appears on the top of page

    Scenario: Check that behaviour of Can Delete unchecking in contacts roles and permissions
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    And User is on Roles & Permission in Managers page
    When Click on Contacts accordian
    And User unchecking Can Delete by clicking on the checkbox
    And User click on Update Permissions button
    Then A success message appears on the top of page




    Scenario: Check that behaviour of Can Disable unchecking in campaigns roles and permissions
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    And User is on Roles & Permission in Managers page
    When Click on Campaigns accordian
    And User unchecking Can Disable by clicking on the checkbox
    And User click on Update Permissions button
    Then A success message appears on the top of page

    Scenario: Check that behaviour of Can Configure unchecking in campaigns roles and permissions
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    And User is on Roles & Permission in Managers page
    When Click on Campaigns accordian
    And User unchecking Can Configure by clicking on the checkbox
    And User click on Update Permissions button
    Then A success message appears on the top of page

    Scenario: Check that behaviour of Can Purge unchecking in campaigns roles and permissions
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    And User is on Roles & Permission in Managers page
    When Click on Campaigns accordian
    And User unchecking Can Purge by clicking on the checkbox
    And User click on Update Permissions button
    Then A success message appears on the top of page

    Scenario: Check that behaviour of Can Edit unchecking in Tasks roles and permissions
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    And User is on Roles & Permission in Managers page
    When Click on Tasks accordian
    And User unchecking Can Edit by clicking onthe checkbox
    And User click on Update Permissions button
    Then A success message appears on the top of page

    Scenario: Check that behaviour of Can Delete unchecking in Tasks roles and permissions
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    And User is on Roles & Permission in Managers page
    When Click on Tasks accordian
    And User unchecking Can Delete in task by clicking on the checkbox
    And User click on Update Permissions button
    Then A success message appears on the top of page

    Scenario: Check that behaviour of Can Add unchecking in Tasks roles and permissions
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    And User is on Roles & Permission in Managers page
    When Click on Tasks accordian
    And User unchecking Can Add in task by clicking on the checkbox
    And User click on Update Permissions button
    Then A success message appears on the top of page

    Scenario: Check that validation appears on entering firstname with numbers or special characters
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    When User clicks on Add Manager button
    And A modal form appears of Add new Manager
    And User filled the first name field with numbers and special characters
    Then Validation messages appears enter firstname

    Scenario: Check that validation appears on entering last name with numbers or special characters
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    When User click on Manager button
    And A modal form appears of Add new Manager
    And User filled the last name field with numbers and special characters
    Then Validation messages appears enter lastname

    Scenario: How to Update managers details
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    And User click on Permission & Roles
    And User click on Profile button
    And Manager detail is showing
    When User clicks on edit button
    And User updates required fields firstname and lastname
    And User clicks on Update button in update
    Then Manager is updated

    Scenario: How to delete existing manager
    Given User is navigating to Setting page
    And User clicks on Manager Tab
    And User click on Permission & Roles
    And User click on Profile button
    And Manager detail is showing
    When User clicks on delete button
    And A warning modal appears
    And User select Yes in Are You Sure You Want To Delete YES OR NO
    Then Manager is Deleted
# # ###################################################################
    


    