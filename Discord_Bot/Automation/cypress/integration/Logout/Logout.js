import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import SignInPage from '../../page_locator/SignIn.js';

const Sign_In = new SignInPage();

// Scenario Check User login with valid Data
let token;
let discord_url;

Given ('User is on Homepage', () => {
    cy.request({
        method : 'POST',
        url : 'http://192.168.3.37/api/v1/auth/',
        body : {
            "email": "umair.hafeez@fiveriverstech.com",
            "password": "@@Umair4242@@"
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
        url : '192.168.3.37/api/v1/dynamicUrl/',
        headers: {
            'content-type' : 'application/json',
            'Authorization': 'jwt '+ token
        },
        body : {
            "redirect_url":"192.168.3.166"
        },
        
    }).then((response) =>{
        expect(response.status).to.be.eq(200);
        discord_url = response.body.data
        Cypress.env(discord_url)   
        cy.log(discord_url)   
    })
})

And('A discord redirected Url open',()=>{
    cy.visit(discord_url)
    cy.wait(4000)
    
})

When ('User enters valid Username',(getusername)=>{
    Sign_In.getusername().type(Cypress.env('email'))

})

And('User enters valid Password',(getpassword)=>{
    Sign_In.getpassword().type(Cypress.env('password'))
}) 

And('User clicks on Login button',(getloginbutton)=>{

    Sign_In.getloginbutton().click()
})

And('A new authorize pop-up is open user clicks on authorize',(getauthbutton , auth_button)=>{
    cy.get('.lookLink-9FtZy-').then($el => {
        cy.log($el.text());
        if ($el.text() == 'Cancel') {
            Sign_In.auth_button().click()
            Sign_In.menu_dropdown().click()
            Sign_In.myserverbutton().click()
        } else {
            cy.log("just clicking on authorize button")
            Sign_In.getauthbutton().click()
        }
    })
})

Then ('Account is logged In',(menu_dropdown , myserverbutton , checkmanagebutton , checkbackbutton , logoutbutton)=>{
    Sign_In.checkmanagebutton().click().then($el => {
        if ($el.text() == 'Manage') {
            cy.log("User is Logged In")
            Sign_In.checkbackbutton().click()
            Sign_In.dropdownbutton().click()
            Sign_In.logoutbutton().click()
            cy.log("User is Logged Out")
        } else {
            cy.log(" // Here You can click on another element.")
        }
    })
})
