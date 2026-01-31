import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import Server_Configuration_Page from '../../page_locator/ServerConfiguration.js';

const manual_invite_member = new Server_Configuration_Page();

Given ('User is on Server Configuration Screen',() => {
    cy.Login()
    
})
And ('User hover over Continue button',() => {

})
When ('User clicks on Continue button in Csv Flow Tab',() => {

})
And ('A new Window appears',() => {

})
Then ('it is redirected to new page Import CSV File',() => {

})

//-----------------------------------------------------------------//


// Given ('User is on Server Configuration Screen',() => {

// })
// And ('User hover over Continue button',() => {

// })
// When ('User clicks on Continue button in AD Flow Tab',() => {

// })
// And ('A new Window appears',() => {

// })
// Then ('it is redirected to new page Ad flow connection',() => {

// })

// //---------------------------------------------------------------------//


// Given ('User is on Server Configuration Screen',() => {

// })
// And ('User hover over Continue button',() => {

// })
// When ('User clicks on Continue button in Manual Flow Tab',() => {

// })
// And ('A new Window appears',() => {

// })
// Then ('it is redirected to new page Create Roles Manual',() => {

// })

// //-----------------------------------------------------------------//