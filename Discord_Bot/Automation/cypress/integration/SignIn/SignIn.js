import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import SignInPage from '../../page_locator/SignIn.js';

const Sign_In = new SignInPage();
let token, discord_url ,name , server_id;


// Scenario Check User login with valid Data
//-------------------------------1st-Scenario--------------------------------//

Given ('User is on Homepage', () => {
    cy.request({
        method : 'POST',
        url : Cypress.env('Login_by_email'),
        body : {
            "email": Cypress.env('email'),
            "password": Cypress.env('password')
        },
        headers: {
            'content-type' : 'application/json'
        }
    }).then((response) =>{
        expect(response.status).to.be.eq(200);
        token = response.body.token
        var name = response.body.user.name
        var server_id = response.body.user.id

        cy.log(token)
        cy.log("Name: ",name)
        cy.log("Sever_ID: ",server_id)
    })
})

And ('User clicks on login button in main menu',()=>{
    cy.request({
        method : 'POST',
        url : Cypress.env('discord_url_api'),
        headers: {
            'content-type' : 'application/json',
            'Authorization': 'jwt '+ token
        },
        body : {
            "redirect_url":Cypress.env('bot_domain')
        },
        
    }).then((response) =>{
        expect(response.status).to.be.eq(200);
        discord_url = response.body.data
        Cypress.env(discord_url)   
        cy.log(discord_url)   
    })
})

And('A discord redirected Url open',()=>{
    cy.visit(discord_url,{timeout:90000})
})

When ('User enters valid Username',(getusername)=>{
    Sign_In.getemailtext().should('have.text', 'Email or Phone Number')
    Sign_In.getpasstext().should('have.text', 'Password')
    Sign_In.getusername().type(Cypress.env('email'))
})

And('User enters valid Password',(getpassword)=>{
    Sign_In.getpassword().type(Cypress.env('password'))
}) 

And('User clicks on Login button',(getloginbutton)=>{
    Sign_In.getloginbutton().click().should('have.text', 'Login')
})

And('A new authorize pop-up is open user clicks on authorize',(getauthbutton , auth_button)=>{
    Sign_In.getauthbutton().click()
    cy.wait(2000)
    
    // cy.get('.lookFilled-1Gx00P > .contents-18-Yxp').then($el => {
    //     cy.log($el.text());
    //     if ($el.text() == 'Authorize') {
    //         Sign_In.getauthbutton().click()
    //     } else {
    //         cy.log("just clicking on authorize button")
    //         Sign_In.auth_button().click().should('have.text' , 'Authorize')
    //     }
    // })
})

Then ('Account is logged In',(checkmanagebutton , checkbackbutton , logoutbutton)=>{

    Sign_In.menu_dropdown().click()
    Sign_In.logoutbutton().click()
 
    // Sign_In.checkmanagebutton().click().then($el => {
    //     if ($el.text() == 'Manage') {
    //         cy.log("User is Logged In")
    //         Sign_In.checkbackbutton().click()
    //         Sign_In.dropdownbutton().click()
    //         Sign_In.logoutbutton().click()
    //         cy.log("User is Logged Out")
    //     } else {
    //         cy.log(" // Here You can click on another element.")
    //     }
    // })
})

//------------------------------2nd-Scenario--------------------------------//

Given ('User is navigate on Homepage', () => {
    cy.log(token)
    cy.log("Name: ",name)
    cy.log("Sever_ID: ",server_id)
})

And ('User clicks on login button in main menu',()=>{
    cy.log(discord_url) 
})

And('A discord redirected Url open User is on discord Login screen',()=>{
    cy.visit(discord_url,{timeout:90000})
})

When ('User leave empty fields',()=>{
    cy.log("User left of fields empty")
    Sign_In.login_block()
})

And('User clicks on Login button',(getloginbutton)=>{
    Sign_In.getloginbutton().click().should('have.text', 'Login')
})

Then('A error message is displayed This Field is required',() =>{
    cy.fixture('common.json').then(data => {
       Sign_In.password_validation().invoke('text').should('eq',data.Password)
    })
})

//-----------------------------------3rd Scenario------------------------------------//

Given ('User is navigate to Homepage', () => {
    cy.log(token)
    cy.log("Name: ",name)
    cy.log("Sever_ID: ",server_id)    
})

And ('User clicks on login button in main menu',()=>{
      cy.log(discord_url)
})

And('A discord redirected Url open',()=>{
    cy.visit(discord_url,{timeout:90000})
    
})

When ('User enters valid Username',(getusername)=>{
    Sign_In.getemailtext().should('have.text', 'Email or Phone Number')
    Sign_In.getpasstext().should('have.text', 'Password')
    Sign_In.getusername().type(Cypress.env('email'))
})

And('User enters valid Password',(getpassword)=>{
    Sign_In.getpassword().type(Cypress.env('password'))
}) 

And('User clicks on Login button',(getloginbutton)=>{
    Sign_In.getloginbutton().click().should('have.text', 'Login')
})

And('A new authorize pop-up is open user clicks on Cancel button',(cancel_auth_button , cancel_button)=>{
    cy.get('.lookLink-9FtZy-').then($el => {
        cy.log($el.text());
        if ($el.text() == 'Cancel') {
            Sign_In.cancel_auth_button().click()
        } else {
            cy.log("just clicking on Cancel button")
            Sign_In.cancel_button().click()
        }
    })
})

Then ('User is redirected to homepage Account is not logged In',()=>{
    Sign_In.after_cancel_btn().then($el => {
        if ($el.text() == 'Login') {
            cy.log("User isn't Logged In")
        } else {
            cy.log(" Test is Failed")

        }
    })
})

//------------------------------------4th Scenario-----------------------------------//

Given ('User navigates to Homepage', () => {
    cy.log(token)
    cy.log("Name: ",name)
    cy.log("Sever_ID: ",server_id)    
})

And ('User clicks on login button in main menu',()=>{
      cy.log(discord_url)
})

And('A discord redirected Url open',()=>{
    cy.visit(discord_url,{timeout:90000})
    
})

When ('User enters valid Username',(getusername)=>{
    Sign_In.getemailtext().should('have.text', 'Email or Phone Number')
    Sign_In.getpasstext().should('have.text', 'Password')
    Sign_In.getusername().type(Cypress.env('email'))

})

And('User enters valid Password',(getpassword)=>{
    Sign_In.getpassword().type(Cypress.env('password'))
}) 

And('User clicks on Login button',(getloginbutton)=>{
    Sign_In.getloginbutton().click().should('have.text', 'Login')

})

And('A new authorize pop-up is open user clicks on Authorize button',(getauthbutton , auth_button, menu_dropdown)=>{
    Sign_In.getauthbutton().click()
    cy.wait(2000)

    // Sign_In.menu_dropdown().click()
    // Sign_In.myserverbutton().click()
})

Then ('User is redirected to server screen User is logged In',(checkmanagebutton ,checkbackbutton , logoutbutton)=>{
    Sign_In.menu_dropdown().click()
    Sign_In.myserverbutton().click()
    // cy.log('User is Logged IN using Authorize Button')
    // Sign_In.checkmanagebutton().click().then($el => {
    //     if ($el.text() == 'Manage') {
    //         cy.log("User is Logged In")
    //         Sign_In.checkbackbutton().click()
    //         Sign_In.dropdownbutton().click()
    //         Sign_In.logoutbutton().click()
    //         cy.log("User is Logged Out")
    //     } else {
    //         cy.log(" // Here You can click on another element.")
    //     }
    // })
})

// -----------------------------5th-Scenario------------------------------------------//

Given ('User is on Homepage', () => {
    cy.log(token)
    cy.log("Name: ",name)
    cy.log("Sever_ID: ",server_id)
})

And ('User clicks on login button in main menu',()=>{
    cy.log(discord_url) 
})

And('A discord redirected Url open User is on discord Login screen',()=>{
    cy.visit(discord_url,{timeout:90000})
})

When ('User leave empty fields',()=>{
    cy.log("User left of fields empty")
    Sign_In.login_block()
})

And('User clicks on Login button',(getloginbutton)=>{
    Sign_In.getloginbutton().click()
})

Then('A error message is displayed This Field is required',() =>{
    cy.recaptcha()
    cy.log("User isn't Logged")
})
