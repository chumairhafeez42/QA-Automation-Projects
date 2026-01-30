import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginLocator from '../../LoginPageLocators/Login.js'
const loginLocator = new LoginLocator();

// Check login form validation
Given('User is on login page', () => {
    cy.visit('http://192.168.3.71:9797/signin')
    cy.wait(4000);
})

When('User did not enter email', () => {
    loginLocator.getEmailInput().clear()
    cy.wait(2000);
})

And('User did not enter password', () => {
    loginLocator.getPasswordInput().clear()
    cy.wait(2000)
})

And('User press signin button', () => {
    loginLocator.getLoginButton().click()
    cy.wait(2000)
})

Then('Validation messages appear under the email and password textboxes', () => {
    loginLocator.getEmailValidation().should('have.text', "Please input your E-mail!")
    loginLocator.getPasswordValidation().should('have.text', "Please input your Password!")
    // .then(article=>{passwordVal = article.text();
    // cy.get(".ant-message-custom-content > :nth-child(2)").should('have.text',"Invalid email or password")
});




// Check login with invalid email

When('User enter invalid email', () => {
    cy.wait(2000);
    loginLocator.getEmailInput().clear().type("contactdatabase99a@gmail.com")
    cy.wait(2000);
})

And('User enter valid password', () => {
    loginLocator.getPasswordInput().clear().type("!frtadmin_");
    cy.wait(2000);
})

And('User press sign in button', () => {
    loginLocator.getLoginButton().click()
})

let passwordVal = "";
Then('An error message is displayed : invalid email or password', () => {

    loginLocator.getInvalidMessage().then(article => {
        passwordVal = article.text();
        if (passwordVal != null) {
            cy.log(passwordVal)
        }
    })
})

// Check login with invalid password


When('User enter valid email', () => {
    loginLocator.getEmailInput().clear().type("contactdatabase99@gmail.com")
    cy.wait(2000)

    // loginLocator.getLoginButtont().click()
    // cy.wait(2000)
});

And('User enter invalid password', () => {
    loginLocator.getPasswordInput().clear().type("!frtadmin");

});

And('User press sign in button', () => {
    loginLocator.getLoginButton().click();
});
Then('An error message is displayed : invalid email or password', () => {
    loginLocator.getInvalidMessage().should('have.text', "Invalid email or password")

});


// Check login with valid data    
When('User enter valid email', () => {
    loginLocator.getEmailInput().type("contactdatabase99a@gmail.com")
    // cy.wait(2000)


});

And('User enter valid password', () => {
    loginLocator.getPasswordInput().clear().type("!frtadmin_");
    // cy.wait(2000);
});

And('User press sign in button', () => {
    loginLocator.getLoginButton().click();

});

Then('User logged in successfully', () => {
    // cy.get(".ant-message-custom-content > :nth-child(2)").should('have.text',"Invalid email or password")
    cy.log("User logged in successfully");
});



            // Then('An error message is displayed : invalid email or passwprd',()=>{
            //     cy.get(".ant-message-custom-content > :nth-child(2)").should('have.text',"Invalid email or password")

            // })








