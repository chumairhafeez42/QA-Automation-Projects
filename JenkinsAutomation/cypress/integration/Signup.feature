Feature: Signup
    Background: User moves to SignUp screen
        When User is navigating to SignUp Page

    @sanity
    Scenario: Check validations appears while fields are empty
    Given User navigate to contactifai app
    And User clicks on get started button on homepage
    And Page is redirected to new SignUp page
    When All SignUp fields are empty
    And User clicks on SignUp button
    Then each Input fields validation appears
    
    @sanity
    Scenario: Check email format validation appears or not
    Given User is navigate to SignUp page
    When User enters invalid email format in email field
    Then Email format validation message appears

    @sanity
    Scenario: Check empty fields validation for email appears or not
    Given User is on SignUp page
    When User empty email field
    And User enters firstname
    And User enters lasstname
    And User enters password
    And User enters confirm password
    And User clicks on signup button
    Then Validation error message appears

    @sanity
   Scenario: Check password text length validation message appears or not
    Given User is navigate to SignUp page
    And User enters any email
    And User enters firstname
    And user enters lasstname
    When User enters password length less < 8
    And User enters confirm password length less < 8
    And User clicks on signup button
    Then Validation error message appears in password field

    @sanity
    Scenario: Check match/unmatch password and confirm password validation appears
    Given User is on singup page
    And User enters email 
    And User enters firstname
    And user enters lasstname
    And User enters password
    When User enters wrong confirm password
    And User clicks on signup button
    Then Validation error message appears in confirm password

    @sanity
    Scenario: Check empty fields validation for Firstname
    Given User is on singup page
    When User empty firstname field
    And User enters lasstname
    And User enters email 
    And User enters password
    And User enters confirm password
    And User clicks on signup button
    Then Validation error message appears in firstname

    @sanity
    Scenario: Check empty fields validation for lastname
    Given User is on singup page
    When User enters firstname
    And User empty lasstname field
    And User enters email 
    And User enters password
    And User enters confirm password
    And User clicks on signup button
    Then Validation error message appears in lastname

    @sanity
    Scenario: Check empty fields validation for password
    Given User is on singup page
    When User enters firstname
    And User enters lasstname
    And User enters email 
    And User empty password field
    And User enters confirm password
    And User clicks on signup button
    Then Validation error message appears in password fields

    @sanity
    Scenario: Check empty fields validation for confirm password
    Given User is on singup page
    And User enters firstname
    And User enters lasstname
    And User enters email 
    And User enters password field
    When User empty confirm password
    And User clicks on signup button
    Then Validation error message appears in confirm password field

    @sanity
    Scenario: How to create a new account in contactifai app
    Given User is navigate to SignUp page 
    When User enters firstname
    And User enters lasstname
    And User enters valid email 
    And User enters valid password
    And User enters valid confirm password
    And User clicks on signup button
    Then Account is created
    And Success message appears of account created

    @sanity
    Scenario: Check that And radio button is functional or not in campaign configuration signup form
    Given User is navigate to SignUp page
    And User create a new signup
    And page is redirected to campaign cofiguration page
    When User clicks on And radio button
    Then it shoud be enabled
    And And radio button should be disable

    @sanity
    Scenario: Check that OR radio button is functional or not in campaign configuration signup form
    Given User is navigate to SignUp page
    And User create a new signup
    And page is redirected to campaign cofiguration page
    When User clicks on OR radio button
    Then it shoud be enabled
    And Or radio button should be disabled

    @sanity
    Scenario: Check Number of Recipients holds by default values or not in campaign configuration signup form
    Given User is navigate to SignUp page
    And User create a new signup
    And page is redirected to campaign cofiguration page
    And User clicks on And radio button
    When User check the num of recipients field
    Then no of recipients field should have value equals to 10

    @sanity
    Scenario: Check that email validation appears or not in Recipients Email field campaign configuration signup form?
    Given User is navigate to SignUp page
    And User create a new signup
    And page is redirected to campaign cofiguration page
    And User clicks on And radio button
    When User enters invalid email recipients email
    Then Validation message appears Please enter valid email address

    @sanity
    Scenario: Check that on empty domain fields validation mesage appears or not in manage domain page?
    Given User is navigate to SignUp page
    And User create a new signup
    And page is redirected to campaign cofiguration page
    And User clicks on skip button
    And page is redirected to manage domain page
    When User empty all fields
    And User clicks on Next button
    Then Validation message appears At least 1 field is required

    @sanity
    Scenario: Check that on block domain fields url validation mesage appears or not in manage domain page?
    Given User is navigate to SignUp page
    And User create a new signup
    And page is redirected to campaign cofiguration page
    And User clicks on skip button
    And page is redirected to manage domain page
    When User enters invalid url in block domain field
    And User clicks on Next button
    Then Block Domain Validation message appears Please enter valid url

    @sanity
    Scenario: Check that on mute domain fields url validation mesage appears or not in manage domain page?
    Given User is navigate to SignUp page
    And User create a new signup
    And page is redirected to campaign cofiguration page
    And User clicks on skip button
    And page is redirected to manage domain page
    When User enters invalid url in mute domain field
    And User clicks on Next button
    Then Mute Domain Validation message appears Please enter valid url

    @sanity
    Scenario: Check that User can add multiple block domains appears or not in manage domain page?
    Given User is navigate to SignUp page
    And User create a new signup
    And page is redirected to campaign cofiguration page
    And User clicks on skip button
    And page is redirected to manage domain page
    When User enters valid url in block domain field
    And User clicks for Next button
    Then domain is added showing in tag format
    And New domain button is enable again 
    And User should be add multiple block domains

    @sanity
    Scenario: Check that User can add multiple mute domains appears or not in manage domain page?
    Given User is navigate to SignUp page
    And User create a new signup
    And page is redirected to campaign cofiguration page
    And User clicks on skip button
    And page is redirected to manage domain page
    When User enters valid url in mute domain field
    And User clicks on to Next button
    Then domain is added showing in mute tag format
    And New mute domain button is enable again 
    And User should be add multiple mute domains

    @sanity
    Scenario: Check that User can remove single or multiple block domains  appears or not in manage domain page?
    Given User is navigate to SignUp page
    And User create a new signup
    And page is redirected to campaign cofiguration page
    And User clicks on skip button
    And page is redirected to manage domain page
    When User clicks on close button in existing block domain
    Then block domain is removed
    
    @sanity
    Scenario: Check that User can remove single or multiple mute domains  appears or not in manage domain page?
    Given User is navigate to SignUp page
    And User create a new signup
    And page is redirected to campaign cofiguration page
    And User clicks on skip button
    And page is redirected to manage domain page
    When User clicks on close button in existing mute domain
    Then mute domain is removed

    @sanity
    Scenario: Check that already existing block domains validation message appears or not in manage domain page?
    Given User is navigate to SignUp page
    And User create a new signup
    And page is redirected to campaign cofiguration page
    And User clicks on skip button
    And page is redirected to manage domain page
    When User enters existing  url in block domain field
    And User press Enter button
    Then Validation message appears Domain already exists.

    @sanity
    Scenario: Check that already existing mute domains validation message appears or not in manage domain page?
    Given User is navigate to SignUp page
    And User create a new signup
    And page is redirected to campaign cofiguration page
    And User clicks on skip button
    And page is redirected to manage domain page
    When User enters existing  url in mute domain field
    And User press Enter button
    Then Validation message appears Domain already exists.

    @sanity
    Scenario: Check that no file uploaded message validation appears or not in import contacts signup form?
    Given User is navigate to SignUp page
    And User create a new signup
    And page is redirected to campaign cofiguration page
    And User clicks on skip button in campaign
    And page is redirected to manage domain page from campaign
    And User redirected to Import ContactsPage
    When User selects no file
    And User clicks on Next button
    Then Validation message appears No file Selected

    @sanity
    Scenario: Check that import contact browse button is functional or not in import contacts signup form
    Given User is navigate to SignUp page
    And User create a new signup
    And page is redirected to campaign cofiguration page
    And User clicks on skip button in campaign
    And page is redirected to manage domain page from campaign
    And User redirected to Import ContactsPage
    When User clicks on browse button
    And User clicks on Next button
    Then Success message appears 7 10 contacts imported successfully

    