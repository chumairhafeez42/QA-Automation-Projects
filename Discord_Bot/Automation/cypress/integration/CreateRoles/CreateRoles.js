import { cyan } from "colorette";
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import Create_Roles_Page from '../../page_locator/CreateRoles.js';

const manual_roles = new Create_Roles_Page();
var rolename = 'QA Testing Moderator'


Given ('User navigates to Server Configuration Screen', () => {
    cy.Login()
})
When ('User clicks on Continue button in Manual Flow Tab',()=> {
    manual_roles.manualbtn().click()
})
And ('A new Window appears it is redirected to new page Create Roles',()=> {
    cy.log("Create Roles Screen Appears")

})
And('User enters Role Name in input field' ,()=> {
    manual_roles.rolenamefield().type(rolename)
    
})
And ('User can select color from Role Colors',()=> {
    function random_item(items)
    {
        return items[Math.floor(Math.random()*items.length)];
    }
    var items = ['#D9E3F0' , '#f47373', '#697689', '#37D67A','#2CCCE4','#555555','#DCE775','#FF8A65','#BA68C8'];
    var color_item = random_item(items)
    cy.log(color_item)
    manual_roles.rolecolor().click()
    manual_roles.role_input().click().clear()
    manual_roles.role_input().type(color_item)

})

And ('User can set Role Setting by enabling button',()=> {
    var arrayOfFunctions = [];
    arrayOfFunctions.push(manual_roles.invite_switch , manual_roles.kick_members_switch , manual_roles.ban_members_switch);
    cy.log(arrayOfFunctions.length)
    for (var i = 0; i < arrayOfFunctions.length; ++i) {
        arrayOfFunctions[i]().should('not.be.disabled').click(); // run your function
    }
})
And ('User can set up Permisions by enabling button',()=> {
    // var arrayOfswitchFunc = [];
    // arrayOfswitchFunc.push(manual_roles.Administrator_switch , manual_roles.Manage_Channels_switch, manual_roles.Manage_Guild_switch, manual_roles.Add_Reactions_switch, manual_roles.View_Audit_Log_switch, manual_roles.Priority_Speaker_switch, manual_roles.Stream_switch, manual_roles.View_Channel_switch, manual_roles.Send_Messages_switch, manual_roles.Send_Tts_Messages_switch , manual_roles.Manage_Messages_switch, manual_roles.Embed_Links_switch, manual_roles.Attach_Files_switch, manual_roles.Read_Message_History_switch, manual_roles.Mention_Everyone_switch, manual_roles.Use_External_Emojis_switch, manual_roles.View_Guild_Insights_switch,manual_roles.Connect_switch,manual_roles.Speak_switch,manual_roles.Mute_Members_switch , manual_roles.Deafen_Members_switch, manual_roles.Move_Members_switch,manual_roles.Use_Vad_switch,manual_roles.Change_Nickname_switch,manual_roles.Manage_Nicknames_switch,manual_roles.Manage_Roles_switch,manual_roles.Manage_Webhooks_switch,manual_roles.Manage_Emojis_switch);
    // cy.log(arrayOfswitchFunc.length)
    // for (var i = 0; i < arrayOfswitchFunc.length; ++i) {
    //     arrayOfswitchFunc[i]().should('not.be.disabled').click(); // run your function
    // }
    // manual_roles.clear_permision_btn().click()
})

And ('User can check uncheck box Create Permission Preset',()=> {
    manual_roles.permision_box().scrollIntoView() // Scrolls 'footer' into view
    manual_roles.create_permission_preset().should('be.visible').check({ force: true}).should('be.checked')
    // manual_roles.create_permission_preset().uncheck()
})
And ('User can scroll for more permissions',()=> {
    
})
And ('User clicks on Create button',()=> {
    manual_roles.create_role_btn().click()
})
Then ('A role is created',()=> {
    cy.log("A Role is created")
})
And ('created roles are shown in Roles box',()=> {
    manual_roles.created_roles().contains(rolename)
    cy.get('.roles_card > .roles').within(($form) => {
        var roletest = cy.get('.role_item_row').contains(rolename)
    })
})
And ('permison presets shown in Permission Presets box',()=> {
    manual_roles.created_permissions().contains(rolename)
        manual_roles.delete_role().click()
        manual_roles.yes_alert_box().click()
})

//-------------------------------------------------------------//

Given ('User is on to Create Role Screen', () => {
    cy.Login()
    manual_roles.manualbtn().click()
})
When ('User not enters RoleName in input field click to create button', () => {
    manual_roles.create_role_btn().click()
})
Then ('A validation should be appear Characters only', () => {
    cy.get('input.form-control').should('have.length', 1)
   
    cy.get('input.form-control').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
      })
    cy.get('.create_server_title')
})


//-----------------------------------------------------//


    Given ('User navigates to Create Role Screen', () => {
        cy.Login()
        manual_roles.manualbtn().click()
    })
    And ('User enters Role Name in input field', () => {
        manual_roles.rolenamefield().type(rolename)
    })
    And ('User selects Role Setting by enabling button', () => {
        var arrayOfFunctions = [];
        arrayOfFunctions.push(manual_roles.invite_switch , manual_roles.kick_members_switch , manual_roles.ban_members_switch);
        cy.log(arrayOfFunctions.length)
        for (var i = 0; i < arrayOfFunctions.length; ++i) {
            arrayOfFunctions[i]().should('not.be.disabled').click(); // run your function
        }
    })
    When ('User selects set up Permisions by enabling button', () => {
        var arrayOfswitchFunc = [];
        arrayOfswitchFunc.push(manual_roles.Administrator_switch , manual_roles.Manage_Channels_switch, manual_roles.Manage_Guild_switch, manual_roles.Add_Reactions_switch, manual_roles.View_Audit_Log_switch, manual_roles.Priority_Speaker_switch, manual_roles.Stream_switch, manual_roles.View_Channel_switch, manual_roles.Send_Messages_switch, manual_roles.Send_Tts_Messages_switch , manual_roles.Manage_Messages_switch, manual_roles.Embed_Links_switch, manual_roles.Attach_Files_switch, manual_roles.Read_Message_History_switch, manual_roles.Mention_Everyone_switch, manual_roles.Use_External_Emojis_switch, manual_roles.View_Guild_Insights_switch,manual_roles.Connect_switch,manual_roles.Speak_switch,manual_roles.Mute_Members_switch , manual_roles.Deafen_Members_switch, manual_roles.Move_Members_switch,manual_roles.Use_Vad_switch,manual_roles.Change_Nickname_switch,manual_roles.Manage_Nicknames_switch,manual_roles.Manage_Roles_switch,manual_roles.Manage_Webhooks_switch,manual_roles.Manage_Emojis_switch);
        cy.log(arrayOfswitchFunc.length)
        for (var i = 0; i < arrayOfswitchFunc.length; ++i) {
            arrayOfswitchFunc[i]().should('not.be.disabled').click(); // run your function
        }
    })
    And ('User clicks on Clear Permissions Button', () => {
        manual_roles.clear_permision_btn().click()
    })
    Then ('All permisions switch buttons are disabled', () => {
        cy.log("All switch buttons are disabled")
    })
    And ('All permissions are clear', () => {
       cy.log("All permission is cleared")
        manual_roles.delete_role().click()
        manual_roles.yes_alert_box().click()
    })


//-----------------------------------------------------//


    Given ('User is navigate to Create Role Screen', () => {
        cy.Login()
        manual_roles.manualbtn().click()
    })
    And ('User enters Role Name in input field', () => {
        manual_roles.rolenamefield().type(rolename)
    })
    And ('User  selects color from Role Colors', () => {
        function random_item(items)
        {
            return items[Math.floor(Math.random()*items.length)];
        }
        var items = ['#D9E3F0' , '#f47373', '#697689', '#37D67A','#2CCCE4','#555555','#DCE775','#FF8A65','#BA68C8'];
        var color_item = random_item(items)
        cy.log(color_item)
        manual_roles.rolecolor().click()
        manual_roles.role_input().click().clear()
        manual_roles.role_input().type(color_item)
    })
    And ('User selects  Role Setting by enabling button', () => {
        var arrayOfFunctions = [];
        arrayOfFunctions.push(manual_roles.invite_switch , manual_roles.kick_members_switch , manual_roles.ban_members_switch);
        cy.log(arrayOfFunctions.length)
        for (var i = 0; i < arrayOfFunctions.length; ++i) {
            arrayOfFunctions[i]().should('not.be.disabled').click(); // run your function
        }
    })
    And ('User selects set up Permisions by enabling button', () => {
        cy.log("permision are selected")
        manual_roles.permision_box().scrollIntoView() // Scrolls 'footer' into view
    })
    When ('User clicks on Create Permissions presets checkbox', () => {
        manual_roles.create_permission_preset().should('be.visible').check({ force: true}).should('be.checked')
    })
    And ('User clicks on Create Button', () => {
        manual_roles.create_role_btn().click()
    })
    Then ('A role is created', () => {
        cy.log('A role is created')
    })
    And ('created roles are shown in Roles box',()=> {
        manual_roles.created_roles().contains(rolename)
        cy.get('.roles_card > .roles').within(($form) => {
            var roletest = cy.get('.role_item_row').contains(rolename)
        })
    })
    And ('created permision presets are shown in Permission Presets box',()=> {
        manual_roles.created_permissions().contains(rolename)
        cy.log('Permission present is created please click on Apply for reuse')

        manual_roles.delete_role().click()
        manual_roles.yes_alert_box().click()
    })



//-----------------------------------------------------//

    Given ('User is navigates to Create Role Screen', () => {
        cy.Login()
        manual_roles.manualbtn().click()
        manual_roles.rolenamefield().type(rolename)
        manual_roles.create_role_btn().click()
    })
    When ('User clicks on delete icon in roles box', () => {
        manual_roles.delete_role().click()
    })
    And ('A Alert Alert appears  Are you sure you want to remove this role this active cant be undone YES OR NO', () => {
        
    })
    And ('user clicks on Yes', () => {
        manual_roles.yes_alert_box().click()
    })
    Then ('Created roles is deleted', () => {
        manual_roles.created_roles().contains(rolename)
        cy.log("Role is Deleted")
    })
    And ('user clicks on No', () => {
        manual_roles.rolenamefield().type("XYZ")
        manual_roles.create_role_btn().click()
        manual_roles.delete_role().click()
        manual_roles.no_alert_box().click()
    })
    And ('Created roles isnt deleted', () => {
        cy.get('.roles_card > .roles').contains('XYZ')
        cy.log('Role is not Deleted')
    })

//-----------------------------------------------------//

    Given ('User is on to Create Role Screen', () => {
        cy.Login()
        manual_roles.manualbtn().click()
    })
    When('User clicks on Back Button at top left corner', () => {
        manual_roles.back_btn().click()
    })
    Then ('it is redirected to previous page Server Configuration Screen', () => {
        manual_roles.back_page_text().contains('Server Configuration')
    })


//-----------------------------------------------------//

    Given ('User is on to Create Role Screen page', () => {
        cy.Login()
        manual_roles.manualbtn().click()
    })
    When('User clicks on skip this step Button at top right corner', () => {
        manual_roles.skip_steps().click()
    })
    Then ('it is redirected to next page Create Category Screen', () => {
        manual_roles.next_page_text().contains('Create Category')
    })

//-----------------------------------------------------//

    Given ('User navigating to Create Role Screen', () => {
        cy.Login()
        manual_roles.manualbtn().click()
    })
    When('User clicks on Jump to Dashboard Button at top left corner', () => {
        manual_roles.jump_to_dashboard().click()
    })
    Then ('it is redirected to Homepage', () => {
        manual_roles.dashboard_text().contains('Dashboard')
    })