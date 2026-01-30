/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import SignupLocator from '../../Page_Locators/SignupPageLocators/signup.js'
const signuplocator = new SignupLocator()
import LoginLocator from '../../Page_Locators/LoginPageLocators/Login.js'
const loginLocator = new LoginLocator();


// // User moves to Task screen

    When('User is navigating to SignUp Page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.visit(this.data.visiting_domain)
        })
    })

// ------------------------------ Check validations appears while fields are empty-------------------------------//

    Given ('User navigate to contactifai app', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.SignIn_Text).click({force : true})
        })
    })

    And ('User clicks on get started button on homepage', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.url().should('include', this.data.SignUp_key_url)
            signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
        })
    })
    And ('Page is redirected to new SignUp page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.url().should('include', this.data.SignUp_page1)
        })
    })
    When ('All SignUp fields are empty', () => {
        cy.log('All fields are empty')

    })
    And ('User clicks on SignUp button', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        })
        cy.wait(1000)
    })
    Then ('each Input fields validation appears', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.validation_email_adress().contains(this.data.validation_email_adress).should('be.exist')
            signuplocator.validation_firstname().contains(this.data.validation_firstname).should('be.exist')
            signuplocator.validation_lastname().contains(this.data.validation_lastname).should('be.exist')
            signuplocator.validation_password().contains(this.data.validation_password).should('be.exist')
            signuplocator.validation_password_confirm().contains(this.data.validation_password_confirm).should('be.exist')
        })
    })

    //------------------------------Check email format validation appears or not-------------------------------//
    
    Given ('User is navigate to SignUp page', () => {

        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.SignIn_Text).click({force : true})
            cy.url().should('include', this.data.SignUp_key_url)
            signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
            cy.url().should('include', this.data.SignUp_page1)
            cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        })
    })
    When ('User enters invalid email format in email field', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.email_input_field().should('be.exist').type(this.data.invalid_email_signup)
        })
    })
    Then ('Email format validation message appears', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.invalid_email_validation().contains(this.data.valid_email_format)
            cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        })
    })


    //------------------------------Check empty fields validation for email appears or not-------------------------------//

    Given ('User is on SignUp page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.SignIn_Text).click({force : true})
            cy.url().should('include', this.data.SignUp_key_url)
            signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
            cy.url().should('include', this.data.SignUp_page1)
            cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        })
    })
    When ('User empty email field', () => {

    })
    And ('User enters firstname', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
        })
    })
    And ('User enters lasstname', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
        })
    })
    And ('User enters password', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
        })
    })
    And ('User enters confirm password', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldpasswordconfirm)
        })
    })
    And ('User clicks on signup button', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.SignUp_Next).should('be.visible').click({force : true})
        })
    })
    Then ('Validation error message appears', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
        signuplocator.validation_email_adress().should('be.visible').contains(this.data.validation_email_adress)
        cy.contains(this.data.SignUp_Next).should('be.visible').click({force : true})
        })
    })


    //------------------------------Check password text length validation message appears or not-------------------------------//


    Given ('User is navigate to SignUp page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.SignIn_Text).click({force : true})
            cy.url().should('include', this.data.SignUp_key_url)
            signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
            cy.url().should('include', this.data.SignUp_page1)
            cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        })
    })
    And ('User enters any email', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.email_input_field().type(this.data.email_input_field)
        })
    })
    And ('User enters firstname', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
        })
    })
    And ('user enters lasstname', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
        })
    })
    When ('User enters password length less < 8', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldfirstname)
        })
    })
    And ('User enters confirm password length less < 8', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldfirstname)
        })
    })
    And ('User clicks on signup button', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.SignUp_Next).should('be.visible').click({force : true})
        })
    })
    Then ('Validation error message appears in password field', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.invalid_paswrd_validation().should('be.visible').contains(this.data.password_length_validation)
            cy.contains(this.data.SignUp_Next).should('be.visible').click({force : true})
        })
    })


    //------------------------------Check match/unmatch password and confirm password validation appears-------------------------------//

    Given ('User is on singup page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.SignIn_Text).click({force : true})
            cy.url().should('include', this.data.SignUp_key_url)
            signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
            cy.url().should('include', this.data.SignUp_page1)
            cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        })
    })
    And ('User enters email', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.email_input_field().should('be.visible').type(this.data.email_input_field)
        })
    })
    And ('User enters firstname', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
        })
    })
    And ('User enters lasstname', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
        })
    })
    And ('User enters password', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
        })
    })
    When ('User enters wrong confirm password', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldfirstname)
        })
    })
    And ('User clicks on signup button', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.SignUp_Next).should('be.visible').click({force : true})
        })
    })
    Then ('Validation error message appears in confirm password', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.invalid_paswrd_cnfrm_validation().contains(this.data.invalid_paswrd_cnfrm_validation)
            cy.contains(this.data.SignUp_Next).should('be.visible').click({force : true})
        })
    })


    // ------------------------------Check empty fields validation for Firstname-------------------------------//

    Given ('User is on singup page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.SignIn_Text).click({force : true})
            cy.url().should('include', this.data.SignUp_key_url)
            signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
            cy.url().should('include', this.data.SignUp_page1)
            cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        })
    })
    And ('User empty firstname field', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname).clear({force :true})
        })
    })
    And ('User enters lasstname', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
        })
    })
    And ('User enters password', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
        })
    })
    When ('User enters confirm password', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldfirstname)
        })
    })
    And ('User clicks on signup button', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.SignUp_Next).should('be.visible').click({force : true})
        })
    })
    And ('User clicks on signup button', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.SignUp_Next).should('be.visible').click({force : true})
        })
    })
    Then ('Validation error message appears in firstname', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.validation_firstname().should('be.exist').contains(this.data.validation_firstname)
            cy.contains(this.data.SignUp_Next).should('be.visible').click({force : true})
        })
    })

// ------------------------------Check empty fields validation for lastname-------------------------------//

Given ('User is on singup page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignIn_Text).click({force : true})
        cy.url().should('include', this.data.SignUp_key_url)
        signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
        cy.url().should('include', this.data.SignUp_page1)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User enters firstname field', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
    })
})
And ('User empty lasstname field', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname).clear({force :true})
    })
})
And ('User enters password', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
    })
})
When ('User enters confirm password', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldfirstname)
    })
})
And ('User clicks on signup button', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignUp_Next).should('be.visible').click({force : true})
    })
})
And ('User clicks on signup button', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignUp_Next).should('be.visible').click({force : true})
    })
})
Then ('Validation error message appears in lastname', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.validation_lastname().contains(this.data.validation_lastname).should('be.visible')
        cy.contains(this.data.SignUp_Next).should('be.visible').click({force : true})
    })
})


// ------------------------------Check empty fields validation for password-------------------------------//

Given ('User is on singup page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignIn_Text).click({force : true})
        cy.url().should('include', this.data.SignUp_key_url)
        signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
        cy.url().should('include', this.data.SignUp_page1)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User enters firstname field', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
    })
})
And ('User empty lasstname field', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
    })
})
And ('User empty password field', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword).clear({force :true})
    })
})
When ('User enters confirm password', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldfirstname)
    })
})
And ('User clicks on signup button', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignUp_Next).should('be.visible').click({force : true})
    })
})
And ('User clicks on signup button', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignUp_Next).should('be.visible').click({force : true})
    })
})
Then ('Validation error message appears in password fields', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.validation_password().contains(this.data.validation_password)
        cy.contains(this.data.SignUp_Next).should('be.visible').click({force : true})
    })
})

// ------------------------------Check empty fields validation for confirm password-------------------------------//

Given ('User is on singup page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignIn_Text).click({force : true})
        cy.url().should('include', this.data.SignUp_key_url)
        signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
        cy.url().should('include', this.data.SignUp_page1)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User enters firstname field', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
    })
})
And ('User enters lasstname field', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
    })
})
And ('User enters password field', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
    })
})
When ('User empty confirm password', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldfirstname).clear({force :true})
    })
})
And ('User clicks on signup button', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignUp_Next).should('be.visible').click({force : true})
    })
})
Then ('Validation error message appears in confirm password field', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.validation_password_confirm().contains(this.data.validation_password_confirm)
        cy.contains(this.data.SignUp_Next).should('be.visible').click({force : true})
    })
})

// ------------------------------How to create a new account in contactifai app-------------------------------//

Given ('User is on singup page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignIn_Text).click({force : true})
        cy.url().should('include', this.data.SignUp_key_url)
        signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
        cy.url().should('include', this.data.SignUp_page1)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User enters firstname', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
    })
})
And ('User enters lasstname', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
    })
})
And ('User enters valid email', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.email_input_field().should('be.visible').type(this.data.valid_email_data)
    })
})
And ('User enters valid password', () => {
  cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
    })
})
When ('User enters valid confirm password', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldpasswordconfirm)
    })
})
And ('User clicks on signup button', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignUp_Next).should('be.visible').click({force : true})
    })
})
Then ('Account is created', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.dashboard_txt).should('be.exist').click({force : true})
    })
})
And ('Success message appears of account created', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.settigs_navigate).should('be.exist').click({force :true})
        cy.contains(this.data.delete_account_txt).should('be.exist')
        signuplocator.deleteaccountbtn().should('be.exist').click({force:true})
        cy.contains(this.data.delete_modal_text).should('be.exist')
        cy.contains(this.data.Yes_button).click({force:true})
        cy.wait(3000)
        cy.contains(this.data.SignIn_Text).should('be.exist').click({force :true})
    })
})

//-----------------Check that And radio button is functional or not in campaign configuration signup form--------//

    Given ('User is navigate to SignUp page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.SignIn_Text).click({force : true})
            cy.url().should('include', this.data.SignUp_key_url)
            signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
            cy.url().should('include', this.data.SignUp_page1)
            cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        })
    })
    And ('User create a new signup', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
            signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
            signuplocator.email_input_field().should('be.visible').type(this.data.valid_email_data)
            signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
            signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldpasswordconfirm)
            cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
            cy.wait(1000)
        })
    })
    And ('page is redirected to campaign cofiguration page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.Signup_campaign_txt).should('be.exist')
            cy.wait(500)
        })
    })
    When ('User clicks on And radio button', () => {
        signuplocator.AndRadioButton().should('be.exist').click()
    })
    Then ('it shoud be enabled', () => {
        signuplocator.AndRadioButtonChecked().should('be.enabled')
        cy.wait(500)
    })
    And ('And radio button should be disable', () => {
        signuplocator.OrradioButton().click()
        signuplocator.OrradioButtonChecked().should('be.enabled')
        cy.wait(500)
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.dashboard_txt).should('be.exist').click({force : true})
            cy.contains(this.data.settigs_navigate).should('be.exist').click({force :true})
            cy.contains(this.data.delete_account_txt).should('be.exist')
            signuplocator.deleteaccountbtn().should('be.exist').click({force:true})
            cy.contains(this.data.delete_modal_text).should('be.exist')
            cy.contains(this.data.Yes_button).click({force:true})
            cy.wait(3000)
            cy.contains(this.data.SignIn_Text).should('be.exist').click({force :true})
        })         
    })

//-----------------Check that OR radio button is functional or not in campaign configuration signup form--------//
    
Given ('User is navigate to SignUp page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignIn_Text).click({force : true})
        cy.url().should('include', this.data.SignUp_key_url)
        signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
        cy.url().should('include', this.data.SignUp_page1)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User create a new signup', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
        signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
        signuplocator.email_input_field().should('be.visible').type(this.data.valid_email_data)
        signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
        signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldpasswordconfirm)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        cy.wait(1000)
    })
})
And ('page is redirected to campaign cofiguration page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.Signup_campaign_txt).should('be.exist')
        cy.wait(1000)
    })
})
When ('User clicks on OR radio button', () => {
    signuplocator.AndRadioButton().should('be.exist').click()
})
Then ('it shoud be enabled', () => {
    signuplocator.AndRadioButtonChecked().should('be.enabled')
    cy.wait(500)
})
And ('Or radio button should be disabled', () => {
    signuplocator.OrradioButton().click()
    signuplocator.OrradioButtonChecked().should('be.enabled')
    cy.wait(500)
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.dashboard_txt).should('be.exist').click({force : true})
        cy.contains(this.data.settigs_navigate).should('be.exist').click({force :true})
        cy.contains(this.data.delete_account_txt).should('be.exist')
        signuplocator.deleteaccountbtn().should('be.exist').click({force:true})
        cy.contains(this.data.delete_modal_text).should('be.exist')
        cy.contains(this.data.Yes_button).click({force:true})
        cy.wait(3000)
        cy.contains(this.data.SignIn_Text).should('be.exist').click({force :true})
    })         
})
//----------------Check Number of Recipients holds by default values or not in campaign configuration signup form-----------------------//
    Given ('User is navigate to SignUp page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.SignIn_Text).click({force : true})
            cy.url().should('include', this.data.SignUp_key_url)
            signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
            cy.url().should('include', this.data.SignUp_page1)
            cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        })
    })
    And ('User create a new signup', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
            signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
            signuplocator.email_input_field().should('be.visible').type(this.data.valid_email_data)
            signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
            signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldpasswordconfirm)
            cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
            cy.wait(500)
        })
    })
    And ('page is redirected to campaign cofiguration page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.Signup_campaign_txt).should('be.exist')
            cy.wait(500)
        })
    })
    And ('User clicks on And radio button', () => {
        signuplocator.AndRadioButton().should('be.exist').click()
        signuplocator.AndRadioButtonChecked().should('be.enabled')
        cy.wait(500)
        signuplocator.OrradioButton().click()
        signuplocator.OrradioButtonChecked().should('be.enabled')
        cy.wait(500)
    })
    When ('User check the num of recipients field', () => {
        signuplocator.recipent_count().should('have.value', '10')
    })
    Then ('no of recipients field should have value equals to 10', () => {
    cy.wait(500)
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.dashboard_txt).should('be.exist').click({force : true})
        cy.contains(this.data.settigs_navigate).should('be.exist').click({force :true})
        cy.contains(this.data.delete_account_txt).should('be.exist')
        signuplocator.deleteaccountbtn().should('be.exist').click({force:true})
        cy.contains(this.data.delete_modal_text).should('be.exist')
        cy.contains(this.data.Yes_button).click({force:true})
        cy.wait(3000)
        cy.contains(this.data.SignIn_Text).should('be.exist').click({force :true})
    })         
})

//-------------------------------------------------------------------------------------------------//

Given ('User is navigate to SignUp page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignIn_Text).click({force : true})
        cy.url().should('include', this.data.SignUp_key_url)
        signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
        cy.url().should('include', this.data.SignUp_page1)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User create a new signup', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
        signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
        signuplocator.email_input_field().should('be.visible').type(this.data.valid_email_data)
        signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
        signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldpasswordconfirm)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        cy.wait(500)
    })
})
And ('page is redirected to campaign cofiguration page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.Signup_campaign_txt).should('be.exist')
        cy.wait(500)
    })
})
And ('User clicks on And radio button', () => {
    signuplocator.AndRadioButton().should('be.exist').click()
    signuplocator.AndRadioButtonChecked().should('be.enabled')
    cy.wait(500)
    signuplocator.OrradioButton().click()
    signuplocator.OrradioButtonChecked().should('be.enabled')
    cy.wait(500)
})
When ('User enters invalid email recipients email', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.invalid_recipent_email().type(this.data.invalid_recipent_email).type('{enter}')
        signuplocator.recipent_count().click().should('have.value', this.data.recipent_count_value)
        signuplocator.subject_copy().click({force: true})
        cy.contains(this.data.valid_email_format).should('be.exist')
    })

})
Then ('Validation message appears Please enter valid email address', () => {
    cy.wait(500)  
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.dashboard_txt).should('be.exist').click({force : true})
        cy.contains(this.data.settigs_navigate).should('be.exist').click({force :true})
        cy.contains(this.data.delete_account_txt).should('be.exist')
        signuplocator.deleteaccountbtn().should('be.exist').click({force:true})
        cy.contains(this.data.delete_modal_text).should('be.exist')
        cy.contains(this.data.Yes_button).click({force:true})
        cy.wait(3000)
        cy.contains(this.data.SignIn_Text).should('be.exist').click({force :true})
    })         
})

//----------Check that on empty domain fields validation mesage appears or not in manage domain page-----------//

    Given ('User is navigate to SignUp page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.SignIn_Text).click({force : true})
            cy.url().should('include', this.data.SignUp_key_url)
            signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
            cy.url().should('include', this.data.SignUp_page1)
            cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        })
    })
    And ('User create a new signup', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
            signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
            signuplocator.email_input_field().should('be.visible').type(this.data.valid_email_data)
            signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
            signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldpasswordconfirm)
            cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
            cy.wait(1000)
        })
    })
    And ('page is redirected to campaign cofiguration page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.Signup_campaign_txt).should('be.exist')
            cy.wait(500)
        })
    })
    And ('User clicks on skip button', () => {
        signuplocator.AndRadioButton().should('be.exist').click()
        signuplocator.AndRadioButtonChecked().should('be.enabled')
        cy.wait(500)
        signuplocator.OrradioButton().click()
        signuplocator.OrradioButtonChecked().should('be.enabled')
        cy.wait(500)
        signuplocator.campaign_confiure_btn().click({force:true})
    })
    And ('page is redirected to manage domain page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.block_domain_txt).should('be.exist')
        })
    })
    When ('User empty all fields', () => {
        cy.log("All fields are empty")
    })
    And ('User clicks on Next button', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        })
    })
    Then ('Validation message appears At least 1 field is required', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            signuplocator.domain_validation().contains(this.data.domain_field_validation)
            cy.wait(1000)
            cy.contains(this.data.dashboard_txt).should('be.exist').click({force : true})
            cy.contains(this.data.settigs_navigate).should('be.exist').click({force :true})
            cy.contains(this.data.delete_account_txt).should('be.exist')
            signuplocator.deleteaccountbtn().should('be.exist').click({force:true})
            cy.contains(this.data.delete_modal_text).should('be.exist')
            cy.contains(this.data.Yes_button).click({force:true})
            cy.wait(3000)
            cy.contains(this.data.SignIn_Text).should('be.exist').click({force :true})
        })         
    })


//-----------Check that on block domain fields url validation mesage appears or not in manage domain page?------------//

Given ('User is navigate to SignUp page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignIn_Text).click({force : true})
        cy.url().should('include', this.data.SignUp_key_url)
        signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
        cy.url().should('include', this.data.SignUp_page1)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User create a new signup', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
        signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
        signuplocator.email_input_field().should('be.visible').type(this.data.valid_email_data)
        signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
        signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldpasswordconfirm)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        cy.wait(1000)
    })
})
And ('page is redirected to campaign cofiguration page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.Signup_campaign_txt).should('be.exist')
        cy.wait(500)
    })
})
And ('User clicks on skip button', () => {
    signuplocator.AndRadioButton().should('be.exist').click()
    signuplocator.AndRadioButtonChecked().should('be.enabled')
    cy.wait(500)
    signuplocator.OrradioButton().click()
    signuplocator.OrradioButtonChecked().should('be.enabled')
    cy.wait(500)
    signuplocator.campaign_confiure_btn().click({force:true})
})
And ('page is redirected to manage domain page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.block_domain_txt).should('be.exist')
    })
})
When ('User enters invalid url in block domain field', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
    signuplocator.new_block_domain().click({force: true})
    signuplocator.new_block_domain_input().type(this.data.new_block_domain_input)
    })
})
And ('User clicks on Next button', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        cy.wait(500)
    })
})
Then ('Block Domain Validation message appears Please enter valid url', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.block_domain_validation().contains(this.data.valid_url_validation)
        cy.contains(this.data.dashboard_txt).should('be.exist').click({force : true})
        cy.contains(this.data.settigs_navigate).should('be.exist').click({force :true})
        cy.contains(this.data.delete_account_txt).should('be.exist')
        signuplocator.deleteaccountbtn().should('be.exist').click({force:true})
        cy.contains(this.data.delete_modal_text).should('be.exist')
        cy.contains(this.data.Yes_button).click({force:true})
        cy.wait(3000)
        cy.contains(this.data.SignIn_Text).should('be.exist').click({force :true})
    })         
})

//--------------Check that on mute domain fields url validation mesage appears or not in manage domain page?--------------//
Given ('User is navigate to SignUp page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignIn_Text).click({force : true})
        cy.url().should('include', this.data.SignUp_key_url)
        signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
        cy.url().should('include', this.data.SignUp_page1)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User create a new signup', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
        signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
        signuplocator.email_input_field().should('be.visible').type(this.data.valid_email_data)
        signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
        signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldpasswordconfirm)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        cy.wait(1000)
    })
})
And ('page is redirected to campaign cofiguration page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.Signup_campaign_txt).should('be.exist')
        cy.wait(1000)
    })
})
And ('User clicks on skip button', () => {
    signuplocator.AndRadioButton().should('be.exist').click()
    signuplocator.AndRadioButtonChecked().should('be.enabled')
    cy.wait(1000)
    signuplocator.OrradioButton().click()
    signuplocator.OrradioButtonChecked().should('be.enabled')
    cy.wait(1000)
    signuplocator.campaign_confiure_btn().click({force:true})
})
And ('page is redirected to manage domain page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.mute_domain_txt).should('be.exist')
    })
})
When ('User enters invalid url in mute domain field', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.new_mute_domain().click({force: true})
        signuplocator.new_mute_domain_input().type(this.data.new_block_domain_input)
    })
})
And ('User clicks on Next button', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
Then ('Mute Domain Validation message appears Please enter valid url', () => {
    signuplocator.mute_domain_validation().contains("Please enter valid url.")
    cy.wait(1000)
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.dashboard_txt).should('be.exist').click({force : true})
        cy.contains(this.data.settigs_navigate).should('be.exist').click({force :true})
        cy.contains(this.data.delete_account_txt).should('be.exist')
        signuplocator.deleteaccountbtn().should('be.exist').click({force:true})
        cy.contains(this.data.delete_modal_text).should('be.exist')
        cy.contains(this.data.Yes_button).click({force:true})
        cy.wait(3000)
        cy.contains(this.data.SignIn_Text).should('be.exist').click({force :true})
    })         
})

//-----------Check that User can add multiple block domains appears or not in manage domain page?------------------//


Given ('User is navigate to SignUp page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignIn_Text).click({force : true})
        cy.url().should('include', this.data.SignUp_key_url)
        signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
        cy.url().should('include', this.data.SignUp_page1)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User create a new signup', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
        signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
        signuplocator.email_input_field().should('be.visible').type(this.data.valid_email_data)
        signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
        signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldpasswordconfirm)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        cy.wait(1000)
    })
})
And ('page is redirected to campaign cofiguration page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.Signup_campaign_txt).should('be.exist')
        cy.wait(500)
    })
})
And ('User clicks on skip button', () => {
    signuplocator.AndRadioButton().should('be.exist').click()
    signuplocator.AndRadioButtonChecked().should('be.enabled')
    cy.wait(500)
    signuplocator.OrradioButton().click()
    signuplocator.OrradioButtonChecked().should('be.enabled')
    cy.wait(500)
    signuplocator.campaign_confiure_btn().click({force:true})
})
And ('page is redirected to manage domain page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.mute_domain_txt).should('be.exist')
    })
})
When ('User enters valid url in block domain field', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.new_block_domain().click({force: true})
        signuplocator.new_block_domain_input().type(this.data.domain_url).type('{enter}')
    })
})
And ('User clicks for Next button', () => {
    // cy.contains('Next').click()
})
Then ('domain is added showing in tag format', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.domain_url).should('be.exist')
    })
})

And ('New domain button is enable again', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.new_domain_txt).click({force: true})
        signuplocator.new_block_domain_input().type(this.data.block_domain_url).type('{enter}')
        cy.log('New Domain button is enabled')
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User should be add multiple block domains', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.dashboard_txt).should('be.exist').click({force : true})
        cy.contains(this.data.settigs_navigate).should('be.exist').click({force :true})
        cy.contains(this.data.delete_account_txt).should('be.exist')
        signuplocator.deleteaccountbtn().should('be.exist').click({force:true})
        cy.contains(this.data.delete_modal_text).should('be.exist')
        cy.contains(this.data.Yes_button).click({force:true})
        cy.wait(3000)
        cy.contains(this.data.SignIn_Text).should('be.exist').click({force :true})
    })         
})

//---------Check that User can add multiple mute domains appears or not in manage domain page?--------//

Given ('User is navigate to SignUp page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignIn_Text).click({force : true})
        cy.url().should('include', this.data.SignUp_key_url)
        signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
        cy.url().should('include', this.data.SignUp_page1)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User create a new signup', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
        signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
        signuplocator.email_input_field().should('be.visible').type(this.data.valid_email_data)
        signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
        signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldpasswordconfirm)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        cy.wait(1000)
    })
})
And ('page is redirected to campaign cofiguration page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.Signup_campaign_txt).should('be.exist')
        cy.wait(500)
    })
})
And ('User clicks on skip button', () => {
    signuplocator.AndRadioButton().should('be.exist').click()
    signuplocator.AndRadioButtonChecked().should('be.enabled')
    cy.wait(500)
    signuplocator.OrradioButton().click()
    signuplocator.OrradioButtonChecked().should('be.enabled')
    cy.wait(500)
    signuplocator.campaign_confiure_btn().click({force:true})
})
And ('page is redirected to manage domain page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.mute_domain_txt).should('be.exist')
    })
})
When ('User enters valid url in mute domain field', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.new_mute_domain().click({force: true})
        signuplocator.new_block_domain_input().type(this.data.mute_domain_url).type('{enter}')
    })
})
And ('User clicks on to Next button', () => {
    // cy.contains('Next').click()
})
Then ('domain is added showing in mute tag format', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.mute_domain_url).should('be.exist')
    })
})

And ('New mute domain button is enable again', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.new_mute_domain_first().click({force: true})
        signuplocator.new_block_domain_input().type(this.data.mute_domain_url_).type('{enter}')
        cy.log('New Domain button is enabled')
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User should be add multiple mute domains', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.dashboard_txt).should('be.exist').click({force : true})
        cy.contains(this.data.settigs_navigate).should('be.exist').click({force :true})
        cy.contains(this.data.delete_account_txt).should('be.exist')
        signuplocator.deleteaccountbtn().should('be.exist').click({force:true})
        cy.contains(this.data.delete_modal_text).should('be.exist')
        cy.contains(this.data.Yes_button).click({force:true})
        cy.wait(3000)
        cy.contains(this.data.SignIn_Text).should('be.exist').click({force :true})
    })         
})

//-----------Check that User can remove single or multiple block domains  appears or not in manage domain page?--------------------------------------//

Given ('User is navigate to SignUp page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignIn_Text).click({force : true})
        cy.url().should('include', this.data.SignUp_key_url)
        signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
        cy.url().should('include', this.data.SignUp_page1)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User create a new signup', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
        signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
        signuplocator.email_input_field().should('be.visible').type(this.data.valid_email_data)
        signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
        signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldpasswordconfirm)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        cy.wait(1000)
    })
})
And ('page is redirected to campaign cofiguration page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.Signup_campaign_txt).should('be.exist')
        cy.wait(500)
    })
})
And ('User clicks on skip button', () => {
    signuplocator.AndRadioButton().should('be.exist').click()
    signuplocator.AndRadioButtonChecked().should('be.enabled')
    cy.wait(500)
    signuplocator.OrradioButton().click()
    signuplocator.OrradioButtonChecked().should('be.enabled')
    cy.wait(500)
    signuplocator.campaign_confiure_btn().click({force:true})
})
And ('page is redirected to manage domain page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.mute_domain_txt).should('be.exist')
    })
})
When ('User clicks on close button in existing block domain', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.new_block_domain().click({force: true})
        signuplocator.new_block_domain_input().type(this.data.mute_domain_url).type('{enter}')
        cy.contains(this.data.mute_domain_url).should('be.exist')
        signuplocator.edit_Tag_close().click({force:true})
    })
})
Then ('block domain is removed', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.dashboard_txt).should('be.exist').click({force : true})
        cy.contains(this.data.settigs_navigate).should('be.exist').click({force :true})
        cy.contains(this.data.delete_account_txt).should('be.exist')
        signuplocator.deleteaccountbtn().should('be.exist').click({force:true})
        cy.contains(this.data.delete_modal_text).should('be.exist')
        cy.contains(this.data.Yes_button).click({force:true})
        cy.wait(3000)
        cy.contains(this.data.SignIn_Text).should('be.exist').click({force :true})
    })         
})

//--------------Check that User can remove single or multiple mute domains  appears or not in manage domain page?-----------------//

Given ('User is navigate to SignUp page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignIn_Text).click({force : true})
        cy.url().should('include', this.data.SignUp_key_url)
        signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
        cy.url().should('include', this.data.SignUp_page1)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User create a new signup', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
        signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
        signuplocator.email_input_field().should('be.visible').type(this.data.valid_email_data)
        signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
        signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldpasswordconfirm)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        cy.wait(1000)
    })
})
And ('page is redirected to campaign cofiguration page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.Signup_campaign_txt).should('be.exist')
        cy.wait(500)
    })
})
And ('User clicks on skip button', () => {
    signuplocator.AndRadioButton().should('be.exist').click()
    signuplocator.AndRadioButtonChecked().should('be.enabled')
    cy.wait(500)
    signuplocator.OrradioButton().click()
    signuplocator.OrradioButtonChecked().should('be.enabled')
    cy.wait(500)
    signuplocator.campaign_confiure_btn().click({force:true})
})
And ('page is redirected to manage domain page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.mute_domain_txt).should('be.exist')
    })
})
When ('User clicks on close button in existing mute domain', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.new_mute_domain().click({force: true})
        signuplocator.new_mute_domain_input().type(this.data.new_mute_domain_input).type('{enter}')
        cy.contains(this.data.new_mute_domain_input).should('be.exist')
        signuplocator.edit_Tag_close().click({force:true})
    })
})
Then ('mute domain is removed', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.dashboard_txt).should('be.exist').click({force : true})
        cy.contains(this.data.settigs_navigate).should('be.exist').click({force :true})
        cy.contains(this.data.delete_account_txt).should('be.exist')
        signuplocator.deleteaccountbtn().should('be.exist').click({force:true})
        cy.contains(this.data.delete_modal_text).should('be.exist')
        cy.contains(this.data.Yes_button).click({force:true})
        cy.wait(3000)
        cy.contains(this.data.SignIn_Text).should('be.exist').click({force :true})
    })         
})

//---------Check that already existing block domains validation message appears or not in manage domain page?---------------------------------//

Given ('User is navigate to SignUp page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignIn_Text).click({force : true})
        cy.url().should('include', this.data.SignUp_key_url)
        signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
        cy.url().should('include', this.data.SignUp_page1)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User create a new signup', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
        signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
        signuplocator.email_input_field().should('be.visible').type(this.data.valid_email_data)
        signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
        signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldpasswordconfirm)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        cy.wait(1000)
    })
})
And ('page is redirected to campaign cofiguration page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.Signup_campaign_txt).should('be.exist')
        cy.wait(500)
    })
})
And ('User clicks on skip button', () => {
    signuplocator.AndRadioButton().should('be.exist').click()
    signuplocator.AndRadioButtonChecked().should('be.enabled')
    cy.wait(500)
    signuplocator.OrradioButton().click()
    signuplocator.OrradioButtonChecked().should('be.enabled')
    cy.wait(500)
    signuplocator.campaign_confiure_btn().click({force:true})
})
And ('page is redirected to manage domain page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.mute_domain_txt).should('be.exist')
    })
})
When ('User enters existing  url in block domain field', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.new_block_domain().click({force: true})
        signuplocator.new_block_domain_input().type(this.data.new_mute_domain_input).type('{enter}')
        cy.log('New Domain button is enabled')
        cy.contains(this.data.new_mute_domain_input).should('be.exist')
        cy.contains(this.data.new_domain_txt).click({force: true})
        signuplocator.new_block_domain_input().type(this.data.new_mute_domain_input).type('{enter}')
        signuplocator.exist_block_domain_validation().contains(this.data.exist_domain_msg)
        cy.contains(this.data.new_mute_domain_input).should('be.exist')
    })
})
And('User press Enter button',() =>{
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
Then ('Validation message appears Domain already exists.', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.dashboard_txt).should('be.exist').click({force : true})
        cy.contains(this.data.settigs_navigate).should('be.exist').click({force :true})
        cy.contains(this.data.delete_account_txt).should('be.exist')
        signuplocator.deleteaccountbtn().should('be.exist').click({force:true})
        cy.contains(this.data.delete_modal_text).should('be.exist')
        cy.contains(this.data.Yes_button).click({force:true})
        cy.wait(3000)
        cy.contains(this.data.SignIn_Text).should('be.exist').click({force :true})
    })         
})
//------------------------------------------------------------------//
//---------Check that already existing mute domains validation message appears or not in manage domain page?---------------------------------//

Given ('User is navigate to SignUp page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignIn_Text).click({force : true})
        cy.url().should('include', this.data.SignUp_key_url)
        signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
        cy.url().should('include', this.data.SignUp_page1)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User create a new signup', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
        signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
        signuplocator.email_input_field().should('be.visible').type(this.data.valid_email_data)
        signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
        signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldpasswordconfirm)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        cy.wait(1000)
    })
})
And ('page is redirected to campaign cofiguration page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.Signup_campaign_txt).should('be.exist')
        cy.wait(1000)
    })
})
And ('User clicks on skip button', () => {
    signuplocator.AndRadioButton().should('be.exist').click()
    signuplocator.AndRadioButtonChecked().should('be.enabled')
    cy.wait(1000)
    signuplocator.OrradioButton().click()
    signuplocator.OrradioButtonChecked().should('be.enabled')
    cy.wait(1000)
    signuplocator.campaign_confiure_btn().click({force:true})
})
And ('page is redirected to manage domain page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.mute_domain_txt).should('be.exist')
    })
})
When ('User enters existing  url in mute domain field', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.new_mute_domain().click({force: true})
        signuplocator.new_mute_domain_input().type(this.data.new_mute_domain_input).type('{enter}')
        cy.log('New Domain button is enabled')
        cy.contains(this.data.new_mute_domain_input).should('be.exist')
        signuplocator.new_mute_domain_first().click({force : true})
        signuplocator.new_mute_domain_input().type(this.data.new_mute_domain_input).type('{enter}')
        signuplocator.exist_mute_domain_validation().contains(this.data.exist_domain_msg)
        cy.contains(this.data.new_mute_domain_input).should('be.exist')
    })
})
And('User press Enter button',() =>{
    cy.fixture('testdata').then(function (data) {
        this.data = data;
    cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
Then ('Validation message appears Domain already exists.', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.dashboard_txt).should('be.exist').click({force : true})
        cy.contains(this.data.settigs_navigate).should('be.exist').click({force :true})
        cy.contains(this.data.delete_account_txt).should('be.exist')
        signuplocator.deleteaccountbtn().should('be.exist').click({force:true})
        cy.contains(this.data.delete_modal_text).should('be.exist')
        cy.contains(this.data.Yes_button).click({force:true})
        cy.wait(3000)
        cy.contains(this.data.SignIn_Text).should('be.exist').click({force :true})
    })         
})

//------------Check that no file uploaded message validation appears or not in import contacts signup form?--------------------------//

Given ('User is navigate to SignUp page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignIn_Text).click({force : true})
        cy.url().should('include', this.data.SignUp_key_url)
        signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
        cy.url().should('include', this.data.SignUp_page1)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User create a new signup', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
        signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
        signuplocator.email_input_field().should('be.visible').type(this.data.valid_email_data)
        signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
        signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldpasswordconfirm)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        cy.wait(1000)
    })
})
And ('page is redirected to campaign cofiguration page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.Signup_campaign_txt).should('be.exist')
        cy.wait(500)
    })
})
And ('User clicks on skip button in campaign', () => {
    signuplocator.AndRadioButton().should('be.exist').click()
    signuplocator.AndRadioButtonChecked().should('be.enabled')
    cy.wait(500)
    signuplocator.OrradioButton().click()
    signuplocator.OrradioButtonChecked().should('be.enabled')
    cy.wait(500)
    signuplocator.campaign_confiure_btn().click({force:true})
})
And ('page is redirected to manage domain page from campaign', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.mute_domain_txt).should('be.exist')
        signuplocator.new_mute_domain().click({force: true})
        signuplocator.new_block_domain_input().type(this.data.mute_domain_url).type('{enter}')
        cy.contains(this.data.mute_domain_url).should('be.exist')
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User redirected to Import ContactsPage', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.Import_contacts).should('be.exist')
    })
})
When ('User selects no file', () => {
    cy.wait(500)
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignUp_Next).should('be.exist').click({force :true})
        signuplocator.domain_validation().should('be.exist')
        cy.contains(this.data.No_file_selected).should('be.exist')
    })
})
And('User clicks on Next button', () =>{
    cy.fixture('contacts.csv').then(fileContent => {
        cy.get('input[type="file"]').attachFile({
            fileContent: fileContent.toString(),
            fileName: 'contacts.csv',
            mimeType: 'csv'
        });
    });
})
Then ('Validation message appears No file Selected', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.dashboard_txt).should('be.exist').click({force : true})
        cy.contains(this.data.settigs_navigate).should('be.exist').click({force :true})
        cy.contains(this.data.delete_account_txt).should('be.exist')
        signuplocator.deleteaccountbtn().should('be.exist').click({force:true})
        cy.contains(this.data.delete_modal_text).should('be.exist')
        cy.contains(this.data.Yes_button).click({force:true})
        cy.wait(3000)
        cy.contains(this.data.SignIn_Text).should('be.exist').click({force :true})
    })         
})

//------------Check that import contact browse button is functional or not in import contacts signup form-----------------------------------------------------//

Given ('User is navigate to SignUp page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.SignIn_Text).click({force : true})
        cy.url().should('include', this.data.SignUp_key_url)
        signuplocator.signup_key_input().type(this.data.SignUp_key).type('{enter}')
        cy.url().should('include', this.data.SignUp_page1)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User create a new signup', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        signuplocator.inputfieldfirstname().should('be.visible').type(this.data.inputfieldfirstname)
        signuplocator.inputfieldlastname().should('be.visible').type(this.data.inputfieldlastname)
        signuplocator.email_input_field().should('be.visible').type(this.data.valid_email_data)
        signuplocator.inputfieldpassword().should('be.visible').type(this.data.inputfieldpassword)
        signuplocator.inputfieldpasswordconfirm().should('be.visible').type(this.data.inputfieldpasswordconfirm)
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
        cy.wait(1000)
    })
})
And ('page is redirected to campaign cofiguration page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.Signup_campaign_txt).should('be.exist')
        cy.wait(1000)
    })
})
And ('User clicks on skip button in campaign', () => {
    signuplocator.AndRadioButton().should('be.exist').click()
    signuplocator.AndRadioButtonChecked().should('be.enabled')
    cy.wait(1000)
    signuplocator.OrradioButton().click()
    signuplocator.OrradioButtonChecked().should('be.enabled')
    cy.wait(1000)
    signuplocator.campaign_confiure_btn().click({force:true})
})
And ('page is redirected to manage domain page from campaign', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.mute_domain_txt).should('be.exist')
        signuplocator.new_mute_domain().click({force: true})
        signuplocator.new_block_domain_input().type(this.data.mute_domain_url).type('{enter}')
        cy.contains(this.data.mute_domain_url).should('be.exist')
        cy.contains(this.data.SignUp_Next).click({force :true}).should('be.exist')
    })
})
And ('User redirected to Import ContactsPage', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.Import_contacts).should('be.visible')
    })
})
When ('User clicks on browse button', () => {
    // cy.contains('Browse').click({force : true})
    cy.fixture('contacts.csv').then(fileContent => {
        cy.get('input[type="file"]').attachFile({
            fileContent: fileContent.toString(),
            fileName: 'contacts.csv',
            mimeType: 'csv'
        });
    });
})
Then ('Success message appears 7 10 contacts imported successfully', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.dashboard_txt).should('be.exist').click({force : true})
        cy.contains(this.data.settigs_navigate).should('be.exist').click({force :true})
        cy.contains(this.data.delete_account_txt).should('be.exist')
        signuplocator.deleteaccountbtn().should('be.exist').click({force:true})
        cy.contains(this.data.delete_modal_text).should('be.exist')
        cy.contains(this.data.Yes_button).click({force:true})
        cy.wait(3000)
        cy.contains(this.data.SignIn_Text).should('be.exist').click({force :true})
    })         
})


