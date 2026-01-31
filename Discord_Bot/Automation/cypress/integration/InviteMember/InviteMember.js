import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import Invite_Member_Page from '../../page_locator/InviteMember.js';

const manual_invite_member = new Invite_Member_Page();
var invite_member = 'http://192.168.3.166/'

Given ('User navigates to Server Configuration Screen',() => {
    cy.Login()
}) 
And ('User clicks on Continue button in Manual Flow Tab',() => {
    manual_invite_member.continue_btn().click()
})
And ('A new Window appears Create Roles',() => {
    manual_invite_member.role_next_button().click()
    
})
And ('User clicks on Next button',() => {
    manual_invite_member.category_next_button().click()
})
And ('it is redirected to new page Create Categories',() => {

})
And ('User clicks on Next button',() => {
})
And ('it is redirected to new page Create Channels',() => {
})
When ('User clicks on Next button',() => {
   
})
And ('it is redirected to new page Invite Members',() => {
})
And ('User add invite link in input field Discord Server Invite Link',() => {
    // manual_invite_member.create_btn().click()


    // manual_invite_member.channel_next_button().click()
    // manual_invite_member.invite_link_input().type('http://192.168.3.166/')
    // manual_invite_member.email_tag_input().type('abc@gmail.com')
})
And ('User add tag Emails in input field Add a Tag',() => {
})
And ('User clicks on Add button',() => {
})
And ('Email are added in below box',() => {
})
And ('Email can be edit by clicks on ediit button',() => {
})
And ('Email can be delete by clicks on delete button',() => {
})
And ('User clicks on Send Invites button',() => {
})
Then ('Invite links sent to added Emails',() => {
})
And ('it is redirected to Invite Member Success Screen',() => {
})
And ('A message box appears Invites Sent',() => {
})


//------------------------------------------------------------//


Given ('User navigates to Invite Members Screen',() => {

})
When ('User left iput fields empty',() => {

})
And  ('User clicks on Send Invites Button',() => {

})
Then ('A vallidation should be appears Please Fill Out this Field',() => {
    
})


//------------------------------------------------------------//

Given ('User navigates to Invite Members Screen',() => {

})
When ('User enter URL in input fields Discord server Invite Link',() => {

})
Then ('A vallidation should be appears Please enter a Valid URL',() => {
    
})

//------------------------------------------------------------//

Given ('User navigates to Invite Members Screen',() => {

})
When ('User enter Email in input fields Add a tag',() => {

})
Then ('A vallidation should be appears Please enter a valid EMAIL',() => {
    
})

//------------------------------------------------------------//

Given ('User is on Invite Member',() => {

})
And ('User add invite link in input field Discord Server Invite Link',() => {

})
And ('User add tag Emails in input field Add a Tag',() => {

})
And ('User clicks on Add button',() => {

})
And ('Email are added in below box',() => {

})
When ('User clicks on edit button',() => {

})
And ('User edit email in input field',() => {

})
And ('User press enter button',() => {

})
Then ('email is updated',() => {

})

//------------------------------------------------------------//

Given ('User is on Invite Member',() => {

})
And ('User add invite link in input field Discord Server Invite Link',() => {

})
And ('User add tag Emails in input field Add a Tag',() => {

})
And ('User clicks on Add button',() => {

})
And ('Email are added in below box',() => {

})
When ('User clicks on delete button',() => {

})
And ('A Alert appears Are you sure you want to remove this email this active cant be undone YES OR NO',() => {

})
And ('User clicks on Yes',() => {

})
Then ('email is deleted',() => {

})


//------------------------------------------------------------------------//

Given ('User navigates to Invite Members Screen',() => {

})
When ('User clicks on Back Button at top left corner',() => {

})
Then ('it is redirected to previous page Create Channel Screen',() => {
    
})

//------------------------------------------------------------------------//

Given ('User navigates to Invite Members Screen',() => {

})
When ('User clicks on Jump to Dashboard Button at top left corner',() => {

})
Then ('it is redirected to Dashboard page',() => {
    
})

//------------------------------------------------------------------------//