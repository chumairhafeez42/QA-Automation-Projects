Feature: SignIn


	Scenario: Check User login with Valid Data
	Given User is on Homepage
	And User clicks on login button in main menu
	And A discord redirected Url open
	When User enters valid Username
	And User enters valid Password
	And User clicks on Login button
	And A new authorize pop-up is open user clicks on authorize
	Then Account is logged In

	Scenario: Check User login with Empty Fields
	Given User is navigate on Homepage
	And User clicks on login button in main menu
	And A discord redirected Url open User is on discord Login screen
	When User leave empty fields
	And User clicks on Login button
	Then A error message is displayed This Field is required

	Scenario: Check User login by click Cancel button in authorization pop-up menu
	Given User is navigate to Homepage
	And User clicks on login button in main menu
	And A discord redirected Url open
	When User enters valid Username
	And User enters valid Password
	And User clicks on Login button
	And A new authorize pop-up is open user clicks on Cancel button
	Then User is redirected to homepage Account is not logged In

	Scenario: Check User login by click authorize button in authorization pop-up menu
	Given User navigates to Homepage
	And User clicks on login button in main menu
	And A discord redirected Url open
	When User enters valid Username
	And User enters valid Password
	And User clicks on Login button
	And A new authorize pop-up is open user clicks on Authorize button
	Then User is redirected to server screen User is logged In



	





