/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ContactsLocator from "../../Page_Locators/ContactsPageLocator/contacts.js";
const contactsLocator = new ContactsLocator()
let contact_company_nam = "";

// User is on contacts screen
When('User is on contacts screen', () => {
    contactsLocator.Contacts_Sidebar_Navigation().should('be.exist').click({ force: true })
    contactsLocator.contacts_Page_Header().should('be.visible')
})

// ------------------------------Check that pagination of Contacts list table is working-----------------------------------------//
Given('User is navigating to contacts page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().should('be.exist').click({ force: true })
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
})
When('User click on pagination button', () => {
    contactsLocator.pagination_Ul().should('be.exist').then($el => {
        contactsLocator.second_pagination_button().should('be.exist').click({ force: true })
    })
})
Then('Contact data in specific page is showing', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.intercept(this.data.contact_intercept_url)
    })
})


// -------------------------------------Scenario: Check that page count in pagination is working--------------------------------------//
Given('User is navigating to contacts page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().should('be.exist').click({ force: true })
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
})
let pagination_count = '';
let Selected_dropdown_count = '';
When('User select value from page count dropdown', () => {
    contactsLocator.next_Pagination().should('be.exist').scrollIntoView()
    contactsLocator.pagination_Ul().should('be.exist').then(($el) => {
        console.log('Right Pagination Li', contactsLocator.pagination_Ul_right_li())
        contactsLocator.pagination_Ul_right_li().last().then($et => {

            pagination_count = $et.text()
            console.log('Pagination Count = ', pagination_count)
        })
        console.log('Pagination Count = ', pagination_count)
    })
    console.log('Pagination Counts = ', pagination_count)
    cy.wait(2000)
    contactsLocator.Table_Length_contacts_span_arrow().should('be.exist').click({ force: true })
    cy.wait(2000)
    contactsLocator.Table_Length_Number_contacts().should('be.exist').then($multipage_click => {
        Selected_dropdown_count = $multipage_click.eq(1).text()
        cy.log('Selected_dropdown_count = ', Selected_dropdown_count)
        console.log('Selected_dropdown_count = ', Selected_dropdown_count)
        $multipage_click[1].click({})
    })
})
let row_Count = '';
Then('Contacts are showing according to page count in a table', () => {
    cy.wait(3000)
    contactsLocator.table_body().should('be.exist').then(($row) => {
        contactsLocator.table_rows().should('be.exist').then($index => {
            row_Count = $index.length;
            console.log('Table Row Count = ', row_Count)
            expect(parseInt(Selected_dropdown_count.trim())).to.eq(row_Count)
        })
    })
})
And('Pagination buttons are changed according to selected page count', () => {
    contactsLocator.pagination_Ul().should('be.exist').then(($el) => {
        contactsLocator.pagination_Ul_right_li().last().then($et => {
            console.log('Pagination Couint -=', pagination_count)
            expect(pagination_count).not.to.eq($et.text())
        })
    })

})


//------------------------------------------ Check that search is working in contacts page---------------------------------------------//
Given(' User is navigating to contacts page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().should('be.exist').click({ force: true })
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
})
let InputVal = '';
When('User enters value in search textbox', () => {
    contactsLocator.contact_username_first().invoke('text').should('be.exist').then(val => {
        cy.log(InputVal)
        InputVal = val
        contactsLocator.search_Input().type(InputVal)
    })
})
And('User press enter button', () => {
    contactsLocator.search_Input().should('be.exist').type('{enter}')
    cy.wait(2000)
})
Then('Data according to value are showing in the table', () => {

    contactsLocator.contact_username().should('be.visible').then($uli => {
        expect(InputVal).to.eq($uli.text())
    })

})

// ----------------------------------How to check contact details from contacts list---------------------------------------//
Given('User is navigating to contacts page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().should('be.exist').click({ force: true })
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
})
When('User click on > symbol', () => {
    contactsLocator.table_body().should('be.exist').then($eo => {
        contactsLocator.table_rows().should('be.exist').last().then($ro => {
            contactsLocator.table_cell().should('be.exist').last().click()
            cy.wait(2500)
        })
    })
})
Then('Contact details page is showing', () => {
    contactsLocator.contact_detail_side().should('be.visible')

})


// ---------------------------Check that Task tab is working in contact details page------------------------------//
Given('User is navigating to Contact Detail page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().should('be.exist').click({ force: true })
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    cy.wait(4000)

    contactsLocator.table_body().should('be.exist').then($eo => {
        contactsLocator.table_rows().should('be.exist').last().then($ro => {
            contactsLocator.table_cell().should('be.exist').last().click()
            cy.wait(2500)

        })
    })
})
When('User click on Task tab', () => {
    cy.log('Tabs = ', contactsLocator.contact_Detail_Tabs())
    console.log('Tabs = ', contactsLocator.contact_Detail_Tabs())
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        contactsLocator.contact_Detail_Tabs().contains(this.data.Task_breadcrum).click()
    })
})
Then('Task tab is showing Tasks 0 text with table', () => {
    cy.wait(3000)
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        contactsLocator.contact_Task_heading_Div().then($spanText => {
            cy.log('Tasks (0) = ', $spanText.text())
            console.log('Tasks (0) = ', $spanText.text())
            expect(this.data.contacts_task_txt).to.eq($spanText.text())
        })
    })

})
And('It would appears if associated with contacts', () => {
    contactsLocator.contact_detail_email().invoke('text').should('be.exist').then(val => {
        cy.log(InputVal)
        InputVal = val
    })
})



//------------------------------------- Check that Communication tab is working in contact details page------------------------------//
Given('User is navigating to Contact Detail page', () => {

    contactsLocator.Contacts_Sidebar_Navigation().should('be.exist').click({ force: true })
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    cy.wait(4000)

    contactsLocator.table_body().should('be.exist').then($eo => {
        contactsLocator.table_rows().should('be.exist').last().then($ro => {
            contactsLocator.table_cell().should('be.exist').last().click()
            cy.wait(2500)
        })
    })
})
When('User click on Communication tab', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        contactsLocator.contact_Detail_Tabs().should('be.exist').contains(this.data.contact_communication_txt).click()
    })
})

Then('Communication tab is showing communication 0 text', () => {
    cy.wait(8000)
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        contactsLocator.contact_communication_Span_Text().then($getChildDiv => {
            contactsLocator.communication_tab().then($spanText => {
                cy.log('Communication (0) = ', $spanText.text())
                console.log('Communication (0) = ', $spanText.text())
                expect(this.data.comunication_txt).not.to.eq($spanText.text())
            })

        })
    })
})
And('It would appears if associated with contacts', () => {
    contactsLocator.contact_detail_email().invoke('text').should('be.exist').then(val => {
        cy.log(InputVal)
        InputVal = val
    })
})

// ------------------------------ Check that action logs tab is working in contact details page-----------------------------------//
Given('User is navigating to Contact Detail page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().should('be.exist').click({ force: true })
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    cy.wait(4000)

    contactsLocator.table_body().then($eo => {
        contactsLocator.table_rows().last().then($ro => {
            contactsLocator.table_cell().last().click()
            cy.wait(2500)
        })
    })
})
When('User click on Action Log tab', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        contactsLocator.contact_Detail_Tabs().contains(this.data.contact_history_txt).click()
    })
})
Then('Action tab is showing Action Log (1) text', () => {
    cy.wait(8000)
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        contactsLocator.contact_Profile_History_Text().then($getChildDiv => {
            contactsLocator.contact_profile_history().then($spanText => {
                cy.log('Communication (0) = ', $spanText.text())
                    console.log('Communication (0) = ', $spanText.text())
                    expect(this.data.comunication_txt).not.to.eq($spanText.text())
            })

        })
    })
})
And('It would appears if User make any changes in the contact profile', () => {
    contactsLocator.contact_detail_email().invoke('text').should('be.exist').then(val => {
        cy.log(InputVal)
        InputVal = val
    })
})




//----------------------------------Check that campaigns tab is working in contact details page-------------------------------------//

Given('User is navigating to Contact Detail page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().should('be.exist').click({ force: true })
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    cy.wait(4000)

    contactsLocator.table_body().should('be.exist').then($eo => {
        contactsLocator.table_rows().should('be.exist').last().then($ro => {
            contactsLocator.table_cell().should('be.exist').last().click()
            cy.wait(2500)
        })
    })
})
When('User click on Campaign Log tab', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        contactsLocator.contact_Detail_Tabs().should('be.exist').contains(this.data.campaignheadertext).click()
    })
})
Then('Campaign tab is showing Campaigns 0 text', () => {
    contactsLocator.contact_campaign_heading_Div().invoke('text').then($spanText => {
        cy.log('$spanText = ', $spanText)
        expect($spanText).to.equal($spanText)

    })
})
And ('It would appears if associated with  gmail communication contacts campaign exists', () => {
    contactsLocator.contact_detail_email().invoke('text').should('be.exist').then(val => {
        cy.log(InputVal)
        InputVal = val
    })
})

// -----------------------------------------------Check that reset filter is working--------------------------------------------//
Given('User is navigating to contacts page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().should('be.exist').click({ force: true })
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    cy.wait(4000)

    contactsLocator.table_body().should('be.exist').then($eo => {
        contactsLocator.table_rows().should('be.exist').last().then($ro => {
            contactsLocator.table_cell().should('be.exist').last().click()
            cy.wait(2500)
        })
    })
})
When('User select Mute contacts from All Contact dropdownlist', () => {
    cy.wait(6500)
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        contactsLocator.All_Contacts_Dropdownlist().should('be.exist').eq(1).click()
        contactsLocator.All_Contacts_Dropdownlist_Options().should('be.exist').contains(this.data.mute_contacts_txt).click()
        cy.wait(3000)
    })
})
And('User click on Reset', () => {
    contactsLocator.reset_Button().should('be.exist').click()
    cy.wait(2500)
})
Then('All filters remove from contact list page', () => {
    contactsLocator.reset_Button().should('not.exist')
})


//----------------------------- Check that behaviour of page when selecting any contact--------------------------------//
Given('User is navigating to Contact page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().should('be.exist').click({ force: true })
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    cy.wait(4000)
})

When('User selects any contact', () => {
    cy.wait(4000)
    contactsLocator.contact_selector().then($check => {
        $check[1].click()
    })
    cy.wait(2500)

})
Then('Different options appear', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        contactsLocator.contact_options().children().should('be.visible')
        cy.contains(this.data.reset_option_txt).should('be.exist')
        cy.contains(this.data.mute_option_txt).should('be.exist')
    })
})
// }) Add to mute List

//--------------------------------------- Check that user is able to add contact in add to mute list------------------------------------//
Given('User is navigating to Contact page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().should('be.exist').click({ force: true })
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    cy.wait(4000)
})
When('User selects any contact from list page', () => {
    cy.wait(4000)
    contactsLocator.contact_selector().then($check => {
        $check[1].click()
    })
    cy.wait(2500)
})
And('Add to mute list option appears', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        contactsLocator.afet_contact_selection_Option().children('.ant-btn').contains(this.data.mute_option_txt).should('be.visible')
    })
})
And('User click add to mute list button', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        contactsLocator.afet_contact_selection_Option().children('.ant-btn').contains(this.data.mute_option_txt).click()
    })
})
And('A modal form appears', () => {
    contactsLocator.ignore_modal().should('be.visible')
})
And('Are You Sure YES OR NO', () => {
    contactsLocator.add_to_ignore_modal().should('be.exist').and('be.visible')
    contactsLocator.ignore_modal_button_div().should('be.exist').and('be.visible')
})
And('User click on Yes button', () => {
    contactsLocator.add_to_ignore_modal().should('be.exist').click()

})
Then('A success toast message appear at the top of page', () => {
    contactsLocator.successMessage().should('be.exist').and('be.visible')
})


// -------------------------------- Check that behaviour of app when user add ignore to list repeatedly-----------------------------------//
Given('User is navigating to Contact page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().should('be.exist').click({ force: true })
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    contactsLocator.contacts_Page_Header().should('be.exist').and('be.visible')
    cy.wait(4000)
})
When('User select already add to mute list contact from list page', () => {
    contactsLocator.table_rows().first().within(() => {
        contactsLocator.table_cell().within(() => {
            // contactsLocator.mute_contact().should('be.exist')
            contactsLocator.contact_selector().then($el => {
                cy.log('Hidden = ', $el.text())
                console.log('Hidden = ', $el.text())
                expect('Muted').to.eq($el.text())
            })
        })
        contactsLocator.table_cell().first().click()
    })
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        contactsLocator.afet_contact_selection_Option().children('.ant-btn').contains(this.data.mute_option_txt).scrollIntoView()
        contactsLocator.afet_contact_selection_Option().children('.ant-btn').contains(this.data.mute_option_txt).should('be.visible')
    })
})
And('User click on add to mute list option', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
    contactsLocator.afet_contact_selection_Option().children('.ant-btn').contains(this.data.mute_option_txt).should('be.visible')
    })
})
And('User click add to mute list button', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
    contactsLocator.afet_contact_selection_Option().children('.ant-btn').contains(this.data.mute_option_txt).click()
    })
})
And('A modal form appears', () => {
    contactsLocator.ignore_modal().should('be.visible')
})
And('Are You Sure YES OR NO', () => {
    contactsLocator.add_to_ignore_modal().should('be.visible')
    contactsLocator.ignore_modal_button_div().should('be.visible')
})
And('User click on Yes button ', () => {
    contactsLocator.add_to_ignore_modal().should('be.exist').click()
})
Then('A success toast message appear at the top of page', () => {
    contactsLocator.successMessage().should('be.visible')
})

//-------------------------------------- Check that user is able to add contact in add to White list-----------------------------------------//
Given('User is navigating to Contact page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().click()
    contactsLocator.contacts_Page_Header().should('be.visible')
    contactsLocator.contacts_Page_Header().should('be.visible')
    cy.wait(4000)
})
When('User select any contact from list page', () => {
    contactsLocator.table_rows().first().within(() => {
        contactsLocator.table_cell().within(() => {
            cy.get('.status-blocked').then($el => {
                // cy.log('Hidden = ', $el.text())
                // console.log('Hidden = ', $el.text())
                expect('Hidden').to.eq($el.text())
            })
        })
        contactsLocator.table_cell().first().click()
    })
    contactsLocator.afet_contact_selection_Option().children('.ant-btn').contains('Add to whitelist').scrollIntoView()
    contactsLocator.afet_contact_selection_Option().children('.ant-btn').contains('Add to whitelist').should('be.visible')
})
And('User click on add to white list option', () => {
    contactsLocator.afet_contact_selection_Option().children('.ant-btn').contains('Add to whitelist').click()
})
And('User click add to White list button', () => {

})
And('A modal form appears', () => {
    contactsLocator.ignore_modal().should('be.visible')

})
And('Are You Sure Add To White List OR Cancel', () => {
    contactsLocator.add_to_Whitelist_Options_button().should('be.visible')
})
And('User click on Add To White List button', () => {
    contactsLocator.add_to_white_list().click()
})
Then('A success toast message appear at the top of page', () => {
    contactsLocator.successMessage().should('be.visible')
    cy.wait(1000)
})
And('Hidden text removes at the end of row of that contact', () => {
    contactsLocator.table_rows().first().within(() => {
        contactsLocator.table_cell().within(() => {
            cy.get('.status-blocked').should('not.exist')
            // then($el=>{
            //     $el.text().should('not.exist')
            //     cy.log('Hidden = ', $el.text().should('not.exist'))
            //     console.log('Hidden = ', $el.text())
            //     // expect('Hidden').not.to.eq($el.text())
            // })
        })
    })
})


//Check that behaviour of app when user add to WhiteList list repeatedly
Given('User is navigating to Contact page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().click()
    contactsLocator.contacts_Page_Header().should('be.visible')
    contactsLocator.contacts_Page_Header().should('be.visible')
    cy.wait(4000)
})
And('User select already add to WhiteList list contact from list page', () => {
    contactsLocator.table_rows().first().within(() => {

        contactsLocator.table_cell().first().click()
    })

})
Then('Whitelist option is not showing', () => {
    // contactsLocator.afet_contact_selection_Option().children('.ant-btn').contains('Add to whitelist').scrollIntoView()
    contactsLocator.afet_contact_selection_Option().children('.ant-btn').contains('Add to whitelist').should('not.exist')
})

// Check that Add New Contact button is functional or not
Given('User is navigating to Contact page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().click()
    contactsLocator.contacts_Page_Header().should('be.visible')
    contactsLocator.contacts_Page_Header().should('be.visible')
    cy.wait(4000)
})
When('User clicks on New Contact button', () => {
    contactsLocator.All_Contacts_Filter_Parent().within(() => {
        contactsLocator.New_Contact_Button().then($button => {
            $button[1].click()
        })
    })
})
Then('Add contact modal form appears', () => {
    contactsLocator.contact_modal_form().should('be.visible')
    cy.get('[style="display: flex; justify-content: space-between; padding: 20px 34px; width: 100%; border-bottom: 1px solid lightgray; position: sticky; top: 0px; background: white; z-index: 1;"] > img').click()
})

// How to create a new contact
Given('User is navigating to Contact page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().click()
    contactsLocator.contacts_Page_Header().should('be.visible')
    contactsLocator.contacts_Page_Header().should('be.visible')
    cy.wait(6000)
})
When('User clicks on New Contact button', () => {
    contactsLocator.All_Contacts_Filter_Parent().within(() => {
        contactsLocator.New_Contact_Button().then($button => {
            $button[1].click()
        })
    })
})
And('Add contact modal form appear', () => {
    contactsLocator.contact_modal_form().should('be.visible')
    // cy.wait(2000)
})

And('User type Company Name  in companyname field', () => {
    contactsLocator.contact_Company_Name().type('The Arck')
})

And('User type Job Title  in job title field', () => {
    contactsLocator.contact_job_Title().type('CEO')
})
And('User type Email Address in email field', () => {
    contactsLocator.contact_Email_Address().type('optimus_primal154@yahoo.com')
})
And('User type Phone Number in phonenumber field', () => {
    contactsLocator.contact_PhoneNumber().type('0124596387')
})
And('User type Mailing Address in adress field', () => {
    contactsLocator.contact_Mailing_Address().type('Model Town Lahore Punjab Pakistan')

})
And('User type Secondary Mailing Address  in adress field', () => {
    contactsLocator.contact_Secondary_Mailing_Address().type('gaddafi stadium Lahore Punjab Pakistan')
})
// And('User type Tags in tagname field', () => { 
//     contactsLocator.add_contact_Tags().click()
//     contactsLocator.add_contact_tag_Selection().then($kill=>{
//         $kill[1].click()
//     })
// })
And('User type Comment  in comment field', () => {
    contactsLocator.contact_Comments().type('Gaddafi Stadium, previously known as Lahore Stadium is a cricket stadium in Lahore, Pakistan and the home ground of Lahore Qalandars. It is owned by the Pakistan Cricket Board. With a capacity of 27,000, it is the fourth largest cricket stadium of Pakistan.')
})

let first_Name = 'Optimus'
And('User type First Name in firstname field', () => {
    // contactsLocator.contact_Last_Name().scrollIntoView()
    //contactsLocator.contact_First_Name().scrollIntoView()
    //cy.wait(6000)
    //contactsLocator.contact_First_Name().click()
    contactsLocator.contact_First_Name().type(first_Name)
    //.scrollTo('top')
    // cy.get('.ant-input').then($input=>{
    //     $input[0].click().type(first_Name)
    // })

})
let last_Name = 'Primal'
And('User type Last Name  in lastname field', () => {
    contactsLocator.contact_Last_Name().type(last_Name)
    // .scrollIntoView()
})


And('User clicks on Save button', () => {
    contactsLocator.contact_save_button().click()
})
And('User close the modal', () => {
    contactsLocator.close_modal().click()
})


Then('Success message appear at the top of page', () => {
    contactsLocator.successMessage().should('be.visible')
})
And('Contact is created', () => {
    cy.wait(6000)
    contactsLocator.table_rows().eq(1).then($contactName => {
        contactsLocator.table_cell().each(($element, index, $list) => {
            if (index == 1) {
                console.log($element.text())
                cy.log($element.text())
                // expect(first_Name+' '+last_Name).to.eq($element.text)
                return false;
            }
        })
    })
})


// Check that how user is able to delete contact

Given('User is navigating to Contact page', () => {

    contactsLocator.Contacts_Sidebar_Navigation().click()
    contactsLocator.contacts_Page_Header().should('be.visible')
    contactsLocator.contacts_Page_Header().should('be.visible')
    cy.wait(6000)
})
let usersName = "";
When('User selects any contact from list page', () => {
    contactsLocator.table_rows().eq(1).within(() => {
        contactsLocator.table_cell().eq(1).within(() => {
            cy.get('.user-email').invoke('text').then($el => {
                usersName = $el.text();
                cy.log("Name = ", usersName)
                console.log("Name = ", usersName)
            })

        })
    })
    contactsLocator.table_rows().eq(1).within(() => {
        contactsLocator.table_cell().first().then($el => {
            contactsLocator.check_box().click()
        })
    })
})
And('User click on delete option', () => {
    contactsLocator.delete_contact().eq(2).click()

})
And('A delete modal form appears', () => {

    cy.get('h1').should('be.visible')
})

And('User click on temprary delete button', () => {
    contactsLocator.temprary_delete().click()

})


Then('A success message appear at the top of page', () => {
    contactsLocator.successMessage().should('be.visible')

})

And('Contact has been removed from contact list', () => {
    contactsLocator.search_Input().type(usersName)
    contactsLocator.search_Input().type('{enter}')
    cy.wait(4000)
    contactsLocator.table_rows().eq(1).should('not.exist')
})




// Scenario: Check that User is able to export the selected contact
Given('User is navigating to Contact page', () => {

    contactsLocator.Contacts_Sidebar_Navigation().click()
    contactsLocator.contacts_Page_Header().should('be.visible')
    contactsLocator.contacts_Page_Header().should('be.visible')
    cy.wait(6000)
})
When('User select contact from contact list', () => {
    contactsLocator.table_rows().eq(1).within(() => {
        contactsLocator.table_cell().first().then($el => {
            contactsLocator.check_box().click()
        })
    })
})
And('User clicks on export option', () => {
    contactsLocator.delete_contact().eq(3).click()
})
Then('Contact is downloaded in csv file', () => {

})


// Scenario: Check that behavior of page on clicking reset option when contact is already selected
Given('User is navigating to Contact page', () => {

    contactsLocator.Contacts_Sidebar_Navigation().click()
    contactsLocator.contacts_Page_Header().should('be.visible')
    contactsLocator.contacts_Page_Header().should('be.visible')
    cy.wait(6000)
})
When('User select contact from contact list', () => {
    contactsLocator.table_rows().eq(1).within(() => {
        contactsLocator.table_cell().first().then($el => {
            contactsLocator.check_box().click()
        })
    })

})
And('User Scroll up the page', () => {
    cy.wait(2000)
    contactsLocator.delete_contact().eq(0).scrollIntoView()
})
And('User clicks on reset option', () => {
    contactsLocator.delete_contact().eq(0).should('be.visible')
    contactsLocator.delete_contact().eq(0).click()
})
Then('Reset option disappear', () => {
    // cy.get('body').then($el=>{
    //     if($el.hasClass('.ant-btn-button'))
    //     {
    //         return false
    //     }
    // })
    contactsLocator.delete_contact().should('not.exist')
})
And('Contacts will be unselected', () => {
    contactsLocator.table_rows().eq(1).within(() => {
        contactsLocator.table_cell().first().then($el => {
            contactsLocator.check_box().should('not.be.checked')
        })
    })
})


// Check that behavior of page on clicking reset option when some contacts are already selected
Given('User is navigating to Contact page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().click()
    contactsLocator.contacts_Page_Header().should('be.visible')
    contactsLocator.contacts_Page_Header().should('be.visible')
    cy.wait(6000)
})
And('User select some contacts from contact list', () => {
    cy.get('.ant-table-selection-column').click()
    // .within(()=>{
    //     contactsLocator.table_cell().first().then($el=>{
    //         contactsLocator.check_box().click()
    //     })
    // })
})
And('User Scroll up the page', () => {
    cy.wait(2000)
    contactsLocator.delete_contact().eq(0).scrollIntoView()
})
When('User click on reset option', () => {
    contactsLocator.delete_contact().eq(0).should('be.visible')
    contactsLocator.delete_contact().eq(0).click()
})
Then('Reset option disappear', () => {
    contactsLocator.delete_contact().should('not.exist')
})
And('Contacts will be unselected', () => {
    cy.get('.ant-table-selection-column').should('not.be.checked')
    // contactsLocator.table_rows().within(()=>{
    //     contactsLocator.table_cell().first().then($el=>{
    //         contactsLocator.check_box().should('not.be.checked')
    //     })
    // })            
})


// Check that behavior of page on selecting Recently added filter
Given('User is navigating to Contact page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().click()
    contactsLocator.contacts_Page_Header().should('be.visible')
    contactsLocator.contacts_Page_Header().should('be.visible')
    cy.wait(6000)
})
And('User clicks on All Contact dropdown', () => {
    contactsLocator.All_Contacts_Dropdownlist().eq(1).click()
})
When('User clicks on Recently added from dropdownlist', () => {

    contactsLocator.All_Contacts_Dropdownlist_Options(

    ).eq(1).click()
})
Then('Contacts Recently added 1 day before are displaying', () => {
    if (contactsLocator.table_rows().length > 0) {
        cy.log('Data is showing.')
        console.log('Data is showing.')

    }
    else {
        cy.log('Data is not showing.')
        console.log('Data is not showing.')
    }

})


// Check that behavior of page on selecting Active Contacts filter
Given('User is navigating to Contact page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().click()
    contactsLocator.contacts_Page_Header().should('be.visible')
    contactsLocator.contacts_Page_Header().should('be.visible')
    cy.wait(6000)
})
And('User click on All Contact dropdown', () => {
    contactsLocator.All_Contacts_Dropdownlist().eq(1).click()
})
When('User click on Active Contacts from dropdownlist', () => {
    contactsLocator.All_Contacts_Dropdownlist_Options(

    ).eq(3).click()
})
Then('Only non muted contacts are showing', () => {
    contactsLocator.table_rows().each(($el, index, $list) => {
        contactsLocator.table_cell().eq(6).should('not.have.value', 'Muted')
    })
})

// Check that behavior of page on selecting Ignored Contacts list filter
Given('User is navigating to Contact page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().click()
    contactsLocator.contacts_Page_Header().should('be.visible')
    contactsLocator.contacts_Page_Header().should('be.visible')
    cy.wait(6000)
})
And('User click on All Contact dropdowns', () => {
    cy.wait(3000)
    contactsLocator.All_Contacts_Dropdownlist().eq(1).click()
})
When('User click on Mute Contacts from dropdownlist', () => {
    contactsLocator.All_Contacts_Dropdownlist_Options(

    ).eq(4).click()
    // cy.scrollTo('right')
    contactsLocator.table_rows().within(() => {
        contactsLocator.table_cell().last().eq(6).scrollTo('right')

    })
})

Then('Muted Contacts added in add to mute are displaying', () => {
    contactsLocator.table_rows().each(($el, index, $list) => {
        contactsLocator.table_cell().eq(6).should('have.value', 'Muted')
    })


})
//  Not completed due to horizontal table scroll bar issue


// Check that User can filter contacts by CompanyName
Given('User is navigating to Contact page', () => {
    contactsLocator.Contacts_Sidebar_Navigation().click()
    contactsLocator.contacts_Page_Header().should('be.visible')
    contactsLocator.contacts_Page_Header().should('be.visible')
    cy.wait(6000)
})
And('User clicks on Filter Button', () => {
    cy.wait(3000)
    contactsLocator.New_Contact_Button().eq(1).click()

})
And('A modal form appear', () => {
    // contactsLocator.contact_modal_form().should('be.visible')
    cy.get('.ant-form-item-label').eq(0).should('be.visible')
})
When('User clicks on CompanyName field', () => {
    contactsLocator.company_editbox().click({ force: true })
})

And('User selects companies', () => {

    contactsLocator.Table_Length_Number_contacts().eq(1).click()
    contactsLocator.company_editbox().click({ force: true })
    cy.request({
        method: 'GET',
        url: 'https://api.contactif.ai/user/companies/?page_size=100',
        headers: {
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyODYwNDU2LCJqdGkiOiJlZThlYTZkNTdhNTA0MjcyOTI3NTY5NzFiZDY2YzE2MSIsInVzZXJfaWQiOjV9.QHNfxC80zOIuPzl-pjSgAKxn1A-bANVKzFY9GwAcSXE'

        }
    }).then((response) => {
        cy.writeFile('D:/COntactDbAutomation/frt-qa-ato/ContactIFAI/JenkinsAutomation/cypress/fixtures/company.json', { company_name: response.body.results[1] })

    })

    contactsLocator.contact_save_button().click()
})
Then('contacts are filtered based on company name', () => {
    cy.readFile('D:/COntactDbAutomation/frt-qa-ato/ContactIFAI/JenkinsAutomation/cypress/fixtures/company.json').then((comp_name) => {

        contactsLocator.table_rows().within(() => {
            contactsLocator.table_cell().eq(2).then($abc => {
                expect(comp_name.company_name).to.equal($abc.text())
            })
        })
    })
})

