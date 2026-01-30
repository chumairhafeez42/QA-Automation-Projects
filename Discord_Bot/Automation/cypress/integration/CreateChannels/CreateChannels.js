import { cyan } from "colorette";
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import Create_Channels_Page from '../../page_locator/CreateChannels.js';

const manual_channels = new Create_Channels_Page();
var channel_name = 'QA Testing Moderator'

Given ('User navigates to Server Configuration Screen',() => {
    cy.Login()
})
And ('User clicks on Continue button in Manual Flow Tab',() => {
    manual_channels.continue_btn().click()
})
And ('A new Window appears Create Roles',() => {
    manual_channels.Role_screen_text().contains('Create Roles')
})
And ('User clicks on Next button',() => {
    manual_channels.role_next_button().click()
})
And ('it is redirected to new page Create Categories',() => {
    manual_channels.Category_Screen_text().contains('Create Category')
})
When ('User clicks on next button',() => {
    manual_channels.cate_next_button().click()
})
And ('it is redirected to new page Create Channels',() => {
    manual_channels.Channel_screen_text().contains('Create Channels')
})
And ('User enters Channels Name in input field',() => {
    manual_channels.channel_input_field().type(channel_name)
})
And ('User can Select Category from dropdown menu',() => {
    manual_channels.checkbox_voice_channel().click().should('not.be.disabled')
    manual_channels.select_channel_dropdown().click()
    manual_channels.dropdown_menu().click()
})
And ('User can Select Private Channel by enabling button',() => {
    manual_channels.private_channel_switch().click().should('not.be.disabled')
})
And ('User can Select the Roles who can access this category by enabling button',() => {
    manual_channels.frt_channel_switch().click().should('not.be.disabled')
})
And ('User clicks on Create button',() => {
    manual_channels.channel_create_btn().click()
})
Then ('A Channel is created',() => {
    cy.log("Channel is created")
})
And ('created channels are shown in Channels box',() => {
    manual_channels.channels_name_box().contains(channel_name)
})
And ('User can delete the channels by clicks on delete icon',() => {
    manual_channels.delete_channel().click()
    cy.on('window:confirm', () => true)
    cy.fixture('common.json').then(data => {
        manual_channels.alert_body().invoke("text").should('eq',data.alert_text)
    })
    manual_channels.yes_alert_box().click()
    
})


// --------------------------------------------------//

Given ('User navigates to Create Channel Screen', () => {
    cy.Login()
    manual_channels.continue_btn().click()
    manual_channels.Role_screen_text().contains('Create Roles')
    manual_channels.role_next_button().click()
    manual_channels.Category_Screen_text().contains('Create Category')
    manual_channels.cate_next_button().click()
    manual_channels.Channel_screen_text().contains('Create Channels')
})
When ('User not enters ChannelName in input field clicks on create button', () => {
    manual_channels.channel_create_btn().click()
})
Then ('A validation should be appear Characters only', () => {
    cy.get('input.form-control').should('have.length', 1)
   
    cy.get('input.form-control').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
      })
    cy.get('.create_server_title')
})

// ----------------------------------------------------------//

Given('User navigates to Create Channel Screen', () => {
    cy.Login()
    manual_channels.continue_btn().click()
    manual_channels.Role_screen_text().contains('Create Roles')
    manual_channels.role_next_button().click()
    manual_channels.Category_Screen_text().contains('Create Category')
    manual_channels.cate_next_button().click()
    manual_channels.Channel_screen_text().contains('Create Channels')
})
And('User enters Channels Name in input field' , () => {
    manual_channels.channel_input_field().type(channel_name)
    manual_channels.checkbox_voice_channel().click()
})
When ('User can Select Private Category by enabling button', () => {
    manual_channels.private_channel_switch().click().should('not.be.disabled')
})
And ('User can Select the Roles who can access this category by enabling button', () => {
    manual_channels.frt_channel_switch().click().should('not.be.disabled')
})
And ('User clicks on Create button', () => {
    manual_channels.channel_create_btn().click()
})
Then ('A Channel is created', () => {
    cy.log("Channel is created")
})
And ('private Channel are shown in Channels box', () => {
    manual_channels.channels_name_box().contains(channel_name)
})


// ----------------------------------------------------------//

Given ('User navigates to Create Channel Screen', () => {
    cy.Login()
    manual_channels.continue_btn().click()
    manual_channels.Role_screen_text().contains('Create Roles')
    manual_channels.role_next_button().click()
    manual_channels.Category_Screen_text().contains('Create Category')
    manual_channels.cate_next_button().click()
    manual_channels.Channel_screen_text().contains('Create Channels')
})
And ('User enters Channel Name in input field', () => {
    manual_channels.channel_input_field().type(channel_name)
    manual_channels.checkbox_voice_channel().click()
})
And ('User selects Private Channel Setting Role Access by enabling switch button', () => {
    manual_channels.private_channel_switch().click().should('not.be.disabled')
})
And ('User clicks on Create Button', () => {
    manual_channels.channel_create_btn().click()
})
And ('A Channel is created', () => {
    cy.log("Channel is created")
})
And ('Created Channels are shown in Channels box', () => {
    manual_channels.channels_name_box().contains(channel_name)
})
When ('User clicks on delete icon in roles box', () => {
    manual_channels.delete_channel().click()
})
And ('A Alert appears Are you sure you want to remove this role this active cant be undone YES OR NO', () => {
    cy.on('window:confirm', () => true)
    cy.fixture('common.json').then(data => {
        manual_channels.alert_body().invoke("text").should('eq',data.alert_text)
    })
})
And ('user clicks on Yes', () => {
    manual_channels.yes_alert_box().click()
})
Then ('Created Channels is deleted', () => {
    cy.log('channel is deleted')
})  
And ('user clicks on No', () => {
    manual_channels.channel_input_field().type(channel_name)
    manual_channels.checkbox_voice_channel().click()
    manual_channels.channel_create_btn().click()
    manual_channels.channels_name_box().contains(channel_name)
    manual_channels.delete_channel().click()
})
And ('Created Channels is not deleted', () => {
    manual_channels.no_alert_box().click()
    cy.log('channel is not deleted')
})


// --------------------------------------------------//
Given ('User navigates to  Create Channel Screen', () => {
    cy.Login()
    manual_channels.continue_btn().click()
    manual_channels.Role_screen_text().contains('Create Roles')
    manual_channels.role_next_button().click()
    manual_channels.Category_Screen_text().contains('Create Category')
    manual_channels.cate_next_button().click()
    manual_channels.Channel_screen_text().contains('Create Channels')
}) 
When ('User clicks on check box', () => {
    manual_channels.checkbox_voice_channel().should('be.visible').check({ force: true}).should('be.checked')
}) 
Then ('checkbox should be checked', () => {
    cy.log("Checkbox is checked")
})


// -----------------------------------------------------------------//


Given ('User navigates to Create Channels Screen', () => {
    cy.Login()
    manual_channels.continue_btn().click()
    manual_channels.Role_screen_text().contains('Create Roles')
    manual_channels.role_next_button().click()
    manual_channels.Category_Screen_text().contains('Create Category')
    manual_channels.cate_next_button().click()
    manual_channels.Channel_screen_text().contains('Create Channels')
}) 
When ('User clicks on Back Button at top left corner', () => {
    manual_channels.back_btn().click()
}) 
Then ('it is redirected to previous page Create Categories Screen', () => {
    manual_channels.Category_Screen_text().contains('Create Category')
}) 


// ---------------------------------------------------------------//

Given ('User navigates to Create Channels Screen', () => {
    cy.Login()
    manual_channels.continue_btn().click()
    manual_channels.Role_screen_text().contains('Create Roles')
    manual_channels.role_next_button().click()
    manual_channels.Category_Screen_text().contains('Create Category')
    manual_channels.cate_next_button().click()
    manual_channels.Channel_screen_text().contains('Create Channels')
}) 
When ('User clicks on skip this step Button at top right corner', () => {
    manual_channels.skip_steps().click()
}) 
Then ('it is redirected to next page Invite Member Screen', () => {
    manual_channels.Invite_Screen_Text().contains('Invite Members')
})


//---------------------------------------------------------------//

Given ('User navigates to Create Channels Screen', () => {
    cy.Login()
    manual_channels.continue_btn().click()
    manual_channels.Role_screen_text().contains('Create Roles')
    manual_channels.role_next_button().click()
    manual_channels.Category_Screen_text().contains('Create Category')
    manual_channels.cate_next_button().click()
    manual_channels.Channel_screen_text().contains('Create Channels')
}) 
When ('User clicks on Jump to Dashboard Button at top right corner', () => {
    manual_channels.jump_to_dashboard().click()
}) 
Then ('it is redirected to Dashboard page', () => {
    manual_channels.dashboard_text().contains('Dashboard')
})