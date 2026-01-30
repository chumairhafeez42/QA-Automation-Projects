Feature: Contacts
    Background: User moves to Contacts screen
        When User is on contacts screen
    
    @statusTabFail @environmeentCleanUp @sanity 
    Scenario: Check that pagination of Contacts list table is working	
        Given User is navigating to contacts page
        When User click on pagination button
        Then Contact data in specific page is showing

    @statusTabFail @environmeentCleanUp @sanity 
    Scenario: Check that page count in pagination is working
        Given User is navigating to contacts page
        When User select value from page count dropdown
        Then Contacts are showing according to page count in a table
        And Pagination buttons are changed according to selected page count

    @statusTabFail @environmeentCleanUp @sanity 
    Scenario: Check that search is working in contacts page
        Given User is navigating to contacts page
        When User enters value in search textbox
        And User press enter button
        Then Data according to value are showing in the table

    @statusTabFail @environmeentCleanUp @sanity 
    Scenario: How to check contact details from contacts list
        Given User is navigating to contacts page
        When User click on > symbol
        Then Contact details page is showing    

    @statusTabFail @environmeentCleanUp @sanity 
    Scenario: Check that Task tab is working in contact details page
        Given  User is navigating to Contact Detail page
        When User click on Task tab
        Then Task tab is showing Tasks 0 text with table
        And It would appears if associated with contacts

    @statusTabFail @environmeentCleanUp @sanity 
    Scenario: Check that Communication tab is working in contact details page
        Given  User is navigating to Contact Detail page
        When User click on Communication tab
        Then Communication tab is showing communication 0 text
        And It would appears if associated with contacts

    @statusTabFail @environmeentCleanUp @sanity 
    Scenario: Check that action logs tab is working in contact details page
        Given User is navigating to Contact Detail page
        When User click on Action Log tab
        Then Action tab is showing Action Log 1 text
        And It would appears if User make any changes in the contact profile

    @statusTabFail @environmeentCleanUp @sanity 
    Scenario: Check that campaigns tab is working in contact details page
        Given User is navigating to Contact Detail page
        When User click on Campaign Log tab
        Then Campaign tab is showing Campaigns 0 text  
        And It would appears if associated with  gmail communication contacts campaign exists

    @statusTabFail @environmeentCleanUp @sanity 
    Scenario: Check that reset filter is working
        Given User is navigating to contacts page
        When User select Mute contacts from All Contact dropdownlist
        And User click on Reset
        Then All filters remove from contact list page    

    @statusTabFail @environmeentCleanUp @sanity 
    Scenario: Check that behaviour of page when selecting any contact
        Given User is navigating to Contact page
        When User selects any contact
        Then Different options appear


    @statusTabFail @environmeentCleanUp @sanity 
    Scenario: Check that user is able to add contact in add to mute list
        Given User is navigating to Contact page
        When User selects any contact from list page
        And Add to mute list option appears
        And User click add to mute list button 
        And User click on Yes button
        Then A success toast message appear at the top of page

# -----------------------------------------------------------------------//
# @statusTabFail @environmeentCleanUp @sanity 
#     Scenario: Check that behaviour of app when user add ignore to list repeatedly
#         Given User is navigating to Contact page
#         When User select already add to mute list contact from list page
#         And User click on add to mute list option
#         And User click add to mute list button
#         And A modal form appears
#         And Are You Sure YES OR NO
#         And User click on Yes button 
#         Then A success toast message appear at the top of page


    # Scenario: Check that user is able to add contact in add to White list
    #     Given User is navigating to Contact page
    #     When User select any contact from list page
    #     And User click on add to white list option
    #     And A modal form appears
    #     And Are You Sure Add To White List OR Cancel 
    #     And User click on Add To White List button 
    #     Then A success toast message appear at the top of page
    #     And Hidden text removes at the end of row of that contact

    # Scenario: Check that behaviour of app when user add to WhiteList list repeatedly
    #     Given User is navigating to Contact page
    #     When User select already add to WhiteList list contact from list page
    #     Then Whitelist option is not showing
        

    # Scenario: Check that Add New Contact button is functional or not
    #     Given User is navigating to Contact page
    #     When User clicks on New Contact button
    #     Then Add contact modal form appears

    # Scenario: How to create a new contact
    #     Given User is navigating to Contact page
    #     When User clicks on New Contact button
    #     And Add contact modal form appear
    #     And User type Company Name  in companyname field
    #     And User type Job Title  in job title field
    #     And User type Email Address in email field
    #     And User type Phone Number in phonenumber field
    #     And User type Mailing Address in adress field
    #     And User type Secondary Mailing Address  in adress field
    #     # And User type Tags in tagname field
    #     And User type Comment  in comment field
    #     And User type First Name in firstname field
    #     And User type Last Name  in lastname field
    #     And User clicks on Save button
    #     And User close the modal
    #     Then Success message appear at the top of page
    #     And Contact is created

    # Scenario: Check that how user is able to delete contact
    #     Given User is navigating to Contact page
    #     When User selects any contact from list page
    #     And User click on delete option
    #     And A delete modal form appears
    #     And User click on temprary delete button
    #     Then A success message appear at the top of page
    #     And Contact has been removed from contact list

    # Scenario: Check that User is able to export the selected contact   Not Done
    #     Given User is navigating to Contact page
    #     And User select contact from contact list
    #     When User clicks on export option
    #     Then Contact is downloaded in csv file

    # Scenario: Check that behavior of page on clicking reset option when contact is already selected
    #     Given User is navigating to Contact page
    #     When User select contact from contact list
    #     And User Scroll up the page
    #     And User clicks on reset option
    #     Then Reset option disappear
    #     And Contacts will be unselected

    # Scenario: Check that behavior of page on clicking reset option when some contacts are already selected
    #     Given User is navigating to Contact page
    #     And User select some contacts from contact list
    #     And User Scroll up the page
    #     When User click on reset option
    #     Then Reset option disappear
    #     And Contacts will be unselected

    # Scenario: Check that behavior of page on selecting Recently added filter
    #     Given User is navigating to Contact page
    #     And User clicks on All Contact dropdown
    #     When User clicks on Recently added from dropdownlist
    #     Then Contacts Recently added 1 day before are displaying

    # Scenario: Check that behavior of page on selecting Active Contacts filter
    #     Given User is navigating to Contact page
    #     And User click on All Contact dropdown
    #     When User click on Active Contacts from dropdownlist
    #     Then Only non muted contacts are showing

    # Scenario: Check that behavior of page on selecting Ignored Contacts list filter
    #     Given User is navigating to Contact page
    #     And User click on All Contact dropdowns
    #     When User click on Mute Contacts from dropdownlist
    #     Then Muted Contacts added in add to mute are displaying

    # Scenario: Check that behavior of page on selecting Saved List filter
    #     Given User is navigating to Contact page
    #     And User click on All Contact dropdown
    #     When User click on Saved List from dropdownlist
    #     Then Only Saved list name are displaying

    # Scenario: Check that User can filter contacts by CompanyName
    #     Given User is navigating to Contact page
    #     And User clicks on Filter Button
    #     And A modal form appear
    #     When User clicks on CompanyName field
    #     And User selects companies 
    #     Then contacts are filtered based on company name

    # Scenario: Check that User can filter contacts by Tags
    #     Given User is navigating to Contact page
    #     And User clicks on Filter Button
    #     And A modal form appears
    #     When User clicks on Tags field
    #     And User selects tags 
    #     Then contacts are filtered based on Tags

    # Scenario: Check that User can filter contacts by Location
    #     Given User is navigating to Contact page
    #     And User clicks on Filter Button
    #     And A modal form appears
    #     And Some fields are disabled
    #     When User clicks on Location field
    #     And User selects locations 
    #     Then contacts are filtered based on location based

    # Scenario: Check that User can filter contacts by Months
    #     Given User is navigating to Contact page
    #     And User clicks on Filter Button
    #     And A modal form appears
    #     And Some fields are disabled
    #     When User clicks on months field
    #     And User selects start and end date 
    #     Then contacts are filtered based on monthly basis

    # Scenario: Check that notification count on creating new contact
    #     Given User is navigating to Contact page
    #     When User click on New contact
    #     And User fill all form
    #     And User click on Save button
    #     Then A toast message appear at the top of page
    #     And Bell icon contain 1 count on adding new contact

    # Scenario: Check that filter modal form in contacts button disabled while fields are empty
    #     Given User is navigating to Contact page
    #     And User clicks on Filter Button
    #     When A modal form appears
    #     And Fileds are empty
    #     Then Apply and Clear buttons are disabled

    # Scenario: Check that filter modal form in cotacts button enable while fields are filled with data
    #     Given User is navigating to Contact page
    #     And User clicks on Filter Button
    #     When A modal form appears
    #     And User types in fields
    #     Then Apply and Clear buttons are enabled

    # Scenario: Check that User is able to import the contacts from csv
    #     Given User is navigating to Contact page
    #     And User select contact from contact list
    #     When User clicks on import option
    #     And User selects csv from directories
    #     And User clicks on  Yes button
    #     Then Contact is imported from csv file    

    # Scenario: Check that search is accepting special characters in contacts page
    #     Given User is navigating to contacts page
    #     When User enters special charcters in search textbox
    #     And User press enter button
    #     Then No Data according to value are showing in the table

    # Scenario: Check that clear search button is functional in contacts page
    #     Given User is navigating to contacts page
    #     When User enters charcters in search textbox
    #     And User press clear search button
    #     Then Search field clears
    #     And All contact list appears

    # Scenario: How to check saved-list contacts
    #     Given User navigate to website
    #     When User clicks on contacts in navigation menu
    #     And A contacts list will be appears
    #     And User clicks on All Contacts menu top left nav
    #     And A drop-down's menu appears
    #     And User clicks on saved list
    #     Then All saved list will be appears
    #     And User clicks on any list
    #     And All contacts in the list appears

    # Scenario: How to save contacts in saved-list using company filter
    #     Given User navigate to website
    #     And User clicks on contacts in navigation menu
    #     And A contacts list will be appears
    #     And User clicks on Filter menu
    #     And A dialogue box appears
    #     When User selects by Company
    #     And User selects by Tags
    #     And User selects by Month
    #     And User clicks on Apply
    #     And Filtered contacts list will be appears
    #     And User clicks on Three Dots 
    #     And Click on Save list
    #     And Click on A modal will appear
    #     And Give suitable name
    #     And Click on Save button
    #     Then Success Message appear at the top of page

    # Scenario: Check that Save list is creating with out applying filter
    #     Given User in on Contact list page
    #     When User select some contacts
    #     And User click on Savelist icon
    #     And A modal will appear
    #     And Enter Suitable name
    #     And User click on Save button
    #     Then Success message appear at the top of page

    # Scenario: Check that save list  created by filter already exists
    #     Given User navigate to website
    #     And User clicks on contacts in navigation menu
    #     And A contacts list will be appears
    #     And User clicks on Filter menu
    #     And A dialogue box appears
    #     When User selects by Company
    #     And User selects by Tags
    #     And User selects by Month
    #     And User clicks on Apply
    #     And Filtered contacts list will be appears
    #     And User clicks on Three Dots 
    #     And Click on Save list
    #     And Click on A modal will appear
    #     And Enter the save list name which is already existed
    #     And Click on Save button
    #     Then Error message showing save list already exist at the top of page

    # Scenario: Check that save list  created by without applying filter already exists
    #     Given User in on Contact list page
    #     When User select some contacts
    #     And User click on Savelist icon
    #     And A modal will appear
    #     And Enter the save list name which is already existed
    #     And User click on Save button
    #     Then Error message showing save list already exist at the top of page

    # Scenario: Check that savelist created by applying filter is overriding
    #     Given User navigate to website
    #     And User clicks on contacts in navigation menu
    #     And A contacts list will be appears
    #     And User clicks on Filter menu
    #     And A dialogue box appears
    #     When User selects by Company
    #     And User selects by Tags
    #     And User selects by Month
    #     And User clicks on Apply
    #     And Filtered contacts list will be appears
    #     And User clicks on Three Dots 
    #     And Click on Save list
    #     And Click on A modal will appear
    #     And Enter the save list name which is already existed
    #     And Click on checkbox containing the text Override if list with same name already exist
    #     And Click on Save button
    #     Then Success message appear at the top of page

    # Scenario: Check that savelist created by without applying filter is overriding
    #     Given User in on Contact list page
    #     When User select some contacts
    #     And User click on Savelist icon
    #     And A modal will appear
    #     And Enter the save list name which is already existed
    #     And Click on checkbox containing the text Override if list with same name already exist
    #     And Click on Save button  
    #     Then Success message appear at the top of page

    # Scenario: Check copy to clipboard is functional or not
    #     Given User navigate to website
    #     And User clicks on contacts in navigation menu
    #     And A contacts list will be appears
    #     And User clicks on SavedLists from dropdown menu
    #     And Saved List will be appears
    #     And User clicks on any of list contacts appears
    #     When User clicks on three dots menu bar
    #     And User clicks on Copy to ClipBoard option
    #     Then listed contacts will be copied
    #     And validation message appears

    # Scenario: Check Validation message appears with creation of saved list
    #     Given User navigates to Website contacts menu
    #     When User filters contacts
    #     And User clicks on saved list button
    #     Then A validation should be appear Bookmark Filter saved successfully

    # Scenario: Check Validation message appears with copy to clipboard
    #     Given User navigate to website
    #     And User clicks on contacts in navigation menu
    #     And User clicks on SavedLists from dropdown menu
    #     And User clicks on any of list contacts appears
    #     When User clicks on three dots menu bar
    #     And User clicks on Copy to ClipBoard option
    #     Then listed contacts will be copied
    #     And validation message appears

    # Scenario: Check that company names in contacts are showing or not
    #     Given User is navigating to Contacts page
    #     And User click on new contact button
    #     And A new modal form appears
    #     When User enters company name in contact form
    #     And User create a new contact
    #     Then In contact table company name is shown in company coulmn

    # Scenario: Check that company images in contacts are showing or not
    #     Given User is navigating to Contacts page
    #     And User click on new contact button
    #     And A new modal form appears
    #     When User enters company name in contact form
    #     And User create a new contact
    #     Then In contact table company image is shown in company coulmn

    # Scenario: How to create a contact group in contact module
    #     Given User is navigating to Contacts page
    #     And User click on new group button
    #     And A new modal form appears
    #     When User enters group name in name field
    #     And User enters primary email in email field
    #     And User clicks on a create group button
    #     Then A group is created
    #     And Success message appears Group created successfully

    # Scenario: How to relate a group with contacts in contact module
    #     Given User is navigating to Contacts page
    #     And User click on group dropdown menu in contact table
    #     And A new dropdown list of groups appears
    #     When User select group from dropdow menu
    #     Then A group is added in contacts
    #     And Success message appears Contact is added in a group successfully

    # Scenario: Check a group is added with contact in contact module
    #     Given User is navigating to Contacts page
    #     And User click on group dropdown menu in contact table
    #     And A new dropdown list of groups appears
    #     When User select group from dropdow menu
    #     Then A group is added in contacts
    #     And Success message appears Contact is added in a group successfully
    #     And User clicks on contacts
    #     And In details page of contact multiple email are grouped in contact

    # Scenario: check ignore contact dashboard counts are correct or not
    #     Given User is navigating to Contacts page
    #     When User add contacts to ignore list
    #     Then dashboard contacts counts are showing without ignored contacts

    # Scenario: check validation appears or not while linkdIn url isn't correct
    #     Given User is navigating to Contacts page
    #     And User click on new contact button
    #     And A new modal form appears
    #     And User filled the form
    #     And User creates a contact
    #     And Social profiles fields appears in that form
    #     When User enters social profiles name links in linkdin field
    #     Then A validation appears Please enter valid url

    # Scenario: check validation appears or not while facebook url isn't correct    
    #     Given User is navigating to Contacts page
    #     And User click on new contact button
    #     And A new modal form appears
    #     And User filled the form
    #     And User creates a contact
    #     And Social profiles fields appears in that form
    #     When User enters invalid social profiles name links in facebook field
    #     Then A validation appears Please enter valid url

    # Scenario: check validation appears or not while twitter url isn't correct
    #     Given User is navigating to Contacts page
    #     And User click on new contact button
    #     And A new modal form appears
    #     And User filled the form
    #     And User creates a contact
    #     And Social profiles fields appears in that form
    #     When User enters invalid social profiles name links in twitter field
    #     Then A validation appears Please enter valid url

    # Scenario: Check that editbox is appearing on clicking contact cell
    #     Given User is on Contact list page
    #     When User click on the name of contact
    #     Then 2 edit box appear
    #     And Tick and cross icons are showing

    # Scenario: Check that editbox is appearing on clicking company cell
    #     Given User is on Contact list page
    #     When User click on the name of company
    #     Then Edit box appear
    #     And Tick and cross icons are showing

    # Scenario: Check that editbox is appearing on clicking tag cell
    #     Given User is on Contact page
    #     When User click on Tag cell
    #     Then Editbox appear
    #     And Tick and cross icons are showing

    # Scenario: Check that tag editbox is showing no data
    #     Given User is on Contact page
    #     When User click on Tag cell
    #     And Editbox appear
    #     And Tick and cross icons are showing
    #     And User click on editbox
    #     Then No Data is showing in the dropdown

    # Scenario: Check that editbox is showing tags in it
    #     Given User is on Contact page
    #     When User click on Tag cell
    #     And Editbox appear
    #     And Tick and cross icons are showing
    #     And User click on editbox
    #     Then Tags are showing in the dropdown

    # Scenario: Check that Tag validation is showing beneath the editbox
    #     Given User is on Contact page
    #     When User click on Tag cell
    #     And Editbox appear
    #     And Tick and cross icons are showing
    #     And User click on editbox
    #     And User type text with special character
    #     And User press Enter key
    #     Then Validation message is showing beneath the editbox

    # Scenario: Check that Tag is creating from editbox
    #     Given User is on Contact page
    #     When User click on Tag cell
    #     And Editbox appear
    #     And Tick and cross icons are showing
    #     And User click on editbox
    #     And User type text
    #     And User press Enter key
    #     And User click on Tick icon
    #     Then Success message appear at the top of page

    # Scenario: Check that tag is creating with numbers from editbox
    #     Given User is on Contact page
    #     When User click on Tag cell
    #     And Editbox appear
    #     And Tick and cross icons are showing
    #     And User click on editbox
    #     And User enter numbers
    #     And User press Enter key
    #     And User click on Tick icon
    #     Then Success message appear at the top of page

    # Scenario: Check that tag is creating with alphanumeric from editbox
    #     Given User is on Contact page
    #     When User click on Tag cell
    #     And Editbox appear
    #     And Tick and cross icons are showing
    #     And User click on editbox
    #     And User enter alphanumeric characters
    #     And User press Enter key
    #     And User click on Tick icon
    #     Then Success message appear at the top of page

    # Scenario: Check that tag validation is vanishing
    #     Given User is on Contact page
    #     When User click on Tag cell
    #     And Editbox appear
    #     And Tick and cross icons are showing
    #     And User click on editbox
    #     And User type text with special character
    #     And User press Enter key
    #     And Validation message is showing beneath the editbox
    #     And User click on tag cross icon inside the editbox
    #     Then Validation message vanished

    # Scenario: Check that editbox is closing on clicking cross icon
    #     Given User is on Contact page
    #     When Click on tag cell
    #     And Editbox appear
    #     And Tick and cross icons are showing
    #     And User click on cross icon
    #     Then Editbox vanished

    # Scenario: Check that tick icon is disable
    #     Given User is on Contact page
    #     When Click on tag cell
    #     And Editbox appear
    #     And Tick and cross icons are showing
    #     Then Tick icon is disable

    # Scenario: Check that company name is updating
    #     Given User is on Contact page
    #     When User click on Company cell
    #     And Tick and cross icons are showing
    #     And User enter company name
    #     And User click on tick icon
    #     Then Success message appear at the top of page

    # Scenario: Check that conpany name is accepting special characters
    #     Given User is on Contact page
    #     When User click on Company cell
    #     And Tick and cross icons are showing
    #     And User enter company name with special characters
    #     And User click on tick icon
    #     Then Success message appear at the top of page

    # Scenario: Check that editbox is accepting company name containing alphanumeric characters
    #     Given User is on Contact page
    #     When User click on Company cell
    #     And Tick and cross icons are showing
    #     And User enter company name with numbers
    #     And User click on tick icon
    #     Then Success message appear at the top of page

    # Scenario: Check the behaviour of editbox when user enter space at the end of company name
    #     Given User is on Contact page
    #     When User click on Company cell
    #     And Tick and cross icons are showing
    #     And User enter company name
    #     And User enters space at the end of company name
    #     Then Validation message appear beneath the company editbox
    #     And Tick icon disable

    # Scenario: Check the behaviour when user click on contact name
    #     Given : User is on contact list page
    #     When User click on Contact name
    #     Then 2 editbox appear
    #     And Tick and cross icons are showing

    # Scenario: Check that editbox is containing name if name exists
    #     Given User is on contact page
    #     When User click on contact containing name
    #     Then Contact name is showing in the editbox
    #     And Tick and cross icons are showing

    # Scenario: Check that editbox is containing first name of contact if first name exists
    #     Given User is on contact page
    #     When User click on contact containing first name
    #     Then Contact first name is showing in the editbox
    #     And Tick and cross icons are showing

    # Scenario: Check the behavior that user can add special characters in the first name
    #     Given User is on contact page
    #     When User click on contact containing first name
    #     And Contact first name is showing in the editbox
    #     And Tick and cross icons are showing
    #     And User enters special character with firstname
    #     Then First name editbox loose focus
    #     And Validation message is showing beneath the firstname editbox

    # Scenario: Check the behavior that user can add special characters in the last name
    #     Given User is on contact page
    #     When User click on contact containing first name
    #     And Contact first name is showing in the editbox
    #     And Tick and cross icons are showing
    #     And User enters special character with lastname
    #     Then Last name editbox loose focus
    #     And Validation message is showing beneath the lastname editbox

    # Scenario: Check the behavior that user can add number in the first name
    #     Given User is on contact page
    #     When User click on contact containing first name
    #     And Contact first name is showing in the editbox
    #     And Tick and cross icons are showing
    #     And User enters number in the firstname editbox
    #     Then First name editbox loose focus
    #     And Validation message is showing beneath the firstname editbox

    # Scenario: Check the behavior that user can add number in the last name
    #     Given User is on contact page
    #     When User click on contact containing last name
    #     And Contact first name and lastname is showing in the editbox
    #     And Tick and cross icons are showing
    #     And User enters number in the lastname editbox
    #     Then Last name editbox loose focus
    #     And Validation message is showing beneath the lastname editbox

    # Scenario: Check the behaviour of editbox on entering special character and number in the firstname
    #     Given User is on contact page
    #     When User click on contact containing firstname and lastname
    #     And Contact first name and lastname is showing in the editbox
    #     And Tick and cross icons are showing
    #     And User enters special characters in the firstname editbox
    #     And First name editbox loose focus
    #     And Validation message is showing beneath the firstname editbox
    #     And User enters number in it
    #     Then Firstname is not loosing focus in it

    # Scenario: Check the behaviour of editbox on entering special character and number in the lastname
    #     Given User is on contact page
    #     When User click on contact containing firstname and lastname
    #     And Contact first name and lastname is showing in the editbox
    #     And Tick and cross icons are showing
    #     And User enters special characters in the lastname editbox
    #     And Last name editbox loose focus
    #     And Validation message is showing beneath the lastname editbox
    #     And User enters number in it
    #     Then Lastname is not loosing focus in it

    # Scenario: Check that select reminder dropdownlist appear on clicking pencil icon    
    #     Given User is on Contact detail page
    #     When User click on Pencil icon
    #     Then Select Reminder dropdownlist appear

    # Scenario: Check that behaviour on clicking Select Reminder dropdownlist
    #     Given User is on Contact detail page
    #     When User click on Pencil icon
    #     And Select Reminder dropdownlist appear
    #     And User click on Select Reminder dropdown list
    #     Then Two options are showing in the dropdownlist

    # Scenario: Check that behavior of textbox on clicking time textbox
    #     Given User is on Contact detail page
    #     When User click on Pencil icon.
    #     And Select Reminder dropdownlist appear
    #     And User click on Select Reminder dropdown list
    #     And Two options are showing in the dropdownlist
    #     And User click on Daily option
    #     And Select time textbox appear
    #     And Tick icon appear in a box
    #     And User click on time textbox
    #     Then Dropdown appear containing hours, minutes and seconds

    # Scenario: Check that behaviour of page on clicking tick icon without selecting time from the select time textbox
    #     Given User is on Contact detail page
    #     When User click on Pencil icon
    #     And Select Reminder dropdownlist appear
    #     And User click on Select Reminder dropdown list
    #     And Two options are showing in the dropdownlist
    #     And User click on Daily option
    #     And Select time textbox appear
    #     And Tick icon appear in a box
    #     And User click on time textbox
    #     And Dropdown appear containing hours, minutes and seconds
    #     And User click on tick icon
    #     Then Validation message appear at the top of page

    # Scenario: Check that behaviour of page on clicking tick icon on selecting time from the select time textbox
    #     Given User is on Contact detail page
    #     When User click on Pencil icon
    #     And Select Reminder dropdownlist appear
    #     And User click on Select Reminder dropdown list
    #     And Two options are showing in the dropdownlist
    #     And User click on Daily option
    #     And Select time textbox appear
    #     And Tick icon appear in a box
    #     And User click on time textbox
    #     And Dropdown appear containing hours, minutes and seconds
    #     And User select time from the dropdown list
    #     And Time is showing in the textbox
    #     And User click on tick icon
    #     Then Validation message appear at the top of page

    # Scenario: Check that behaviour of ok button from select time textbox dropdown
    #     Given User is on Contact detail page
    #     When User click on Pencil icon
    #     And Select Reminder dropdownlist appear
    #     And User click on Select Reminder dropdown list
    #     And Two options are showing in the dropdownlist
    #     And User click on Daily option
    #     And Select time textbox appear
    #     And Tick icon appear in a box
    #     And User click on time textbox
    #     And Dropdown appear containing hours, minutes and seconds
    #     And User select time from the dropdown list
    #     And User click on Ok button of dropdownlist
    #     Then Time is showing in the textbox

    # Scenario: Check that behaviour of page on clicking tick icon after click on Ok button from the dropdownlist
    #     Given User is on Contact detail page
    #     When User click on Pencil icon
    #     And Select Reminder dropdownlist appear
    #     And User click on Select Reminder dropdown list
    #     And Two options are showing in the dropdownlist
    #     And User click on Daily option
    #     And Select time textbox appear
    #     And Tick icon appear in a box
    #     And User click on time textbox
    #     And Dropdown appear containing hours, minutes and seconds
    #     And User select time from the dropdown list
    #     And User click on Ok button of dropdownlist
    #     And Time is showing in the textbox
    #     And User click on tick icon
    #     Then Success message appear at the top of page
    #     And Notification appear at the bell icon

    # Scenario: Check that behaviour of dropdown on selecting Weekly option
    #     Given User is on contact detail page
    #     When User click on pencil icon
    #     And User click on Select Reminder dropdownlist
    #     And User click on weekly option
    #     Then Select date textbox appear
    #     And Tick icon appear

    # Scenario: Check the behaviour on clicking select date dropdownlist
    #     Given User is on contact detail page
    #     When User click on pencil icon
    #     And User click on Select Reminder dropdownlist
    #     And User click on weekly option
    #     And Select date textbox appear
    #     And Tick icon appear
    #     And User click on Select date textbox
    #     Then Calander and time appear

    # Scenario: Check the behaviour of page on clicking tick icon after clicking date time  
    #     Given User is on contact detail page
    #     When User click on pencil icon
    #     And User click on Select Reminder dropdownlist
    #     And User click on weekly option
    #     And Select date textbox appear
    #     And Tick icon appear
    #     And User click on Select date textbox
    #     And Calander and time appear
    #     And User click on date
    #     And User click on tick icon
    #     Then Validation message appear at the top of page  

    # Scenario: Check the behaviour of page on clicking tick icon after clicking date time dropdown ok button 
    #     Given User is on contact detail page
    #     When User click on pencil icon
    #     And User click on Select Reminder dropdownlist
    #     And User click on weekly option
    #     And Select date textbox appear
    #     And Tick icon appear
    #     And User click on Select date textbox
    #     And Calander and time appear
    #     And User click on date
    #     And User click on Ok button
    #     And User click on tick icon
    #     Then Success message appear at the top of page
    #     And Notification appear at the bell icon   