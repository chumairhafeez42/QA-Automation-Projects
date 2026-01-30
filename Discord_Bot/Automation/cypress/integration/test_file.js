

    // function random_item(items)
    // {
    //     return items[Math.floor(Math.random()*items.length)];
    // }

    // var items = [manual_roles.green_color , manual_roles.orange_color , manual_roles.pink_color, manual_roles.grey_color];
    // cy.log(random_item(items).click())

    // Array.prototype.random = function (length) {
    //     return this[Math.floor((Math.random()*length))];
    // }
    
    // var teams = [manual_roles.green_color];
    // var chosen_team = teams.random(teams.length)
    // chosen_team(function(value){
    //    cy.log(value)
    // });




    // var arrayOfFunctions = [];
    // arrayOfFunctions.push(manual_roles.invite_switch , manual_roles.kick_members_switch , manual_roles.ban_members_switch);
    // cy.log(arrayOfFunctions.length)
    // for (var i = 0; i < arrayOfFunctions.length; ++i) {
    //     arrayOfFunctions[i]().click(); // run your function
    // }


        // var arrayOfswitchFunc = [];
    // arrayOfswitchFunc.push(manual_roles.invite_switch , manual_roles.kick_members_switch , manual_roles.ban_members_switch , manual_roles.Administrator_switch , manual_roles.Manage_Channels_switch, manual_roles.Manage_Guild_switch, manual_roles.Add_Reactions_switch, manual_roles.View_Audit_Log_switch, manual_roles.Priority_Speaker_switch, manual_roles.Stream_switch, manual_roles.View_Channel_switch, manual_roles.Send_Messages_switch, manual_roles.Send_Tts_Messages_switch , manual_roles.Manage_Messages_switch, manual_roles.Embed_Links_switch, manual_roles.Attach_Files_switch, manual_roles.Read_Message_History_switch, manual_roles.Mention_Everyone_switch, manual_roles.Use_External_Emojis_switch, manual_roles.View_Guild_Insights_switch,manual_roles.Connect_switch,manual_roles.Speak_switch,manual_roles.Mute_Members_switch , manual_roles.Deafen_Members_switch, manual_roles.Move_Members_switch,manual_roles.Use_Vad_switch,manual_roles.Change_Nickname_switch,manual_roles.Manage_Nicknames_switch,manual_roles.Manage_Roles_switch,manual_roles.Manage_Webhooks_switch,manual_roles.Manage_Emojis_switch);
    // cy.log(arrayOfswitchFunc.length)
    // for (var i = 0; i < arrayOfswitchFunc.length; ++i) {
    //     arrayOfswitchFunc[i]().click(); // run your function
    // }

    // var arrayOfswitchFunc = [];
    // arrayOfswitchFunc.push(manual_roles.Administrator_switch , manual_roles.Manage_Channels_switch, manual_roles.Manage_Guild_switch, manual_roles.Add_Reactions_switch, manual_roles.View_Audit_Log_switch, manual_roles.Priority_Speaker_switch, manual_roles.Stream_switch, manual_roles.View_Channel_switch, manual_roles.Send_Messages_switch, manual_roles.Send_Tts_Messages_switch , manual_roles.Manage_Messages_switch, manual_roles.Embed_Links_switch, manual_roles.Attach_Files_switch, manual_roles.Read_Message_History_switch, manual_roles.Mention_Everyone_switch, manual_roles.Use_External_Emojis_switch, manual_roles.View_Guild_Insights_switch,manual_roles.Connect_switch,manual_roles.Speak_switch,manual_roles.Mute_Members_switch , manual_roles.Deafen_Members_switch, manual_roles.Move_Members_switch,manual_roles.Use_Vad_switch,manual_roles.Change_Nickname_switch,manual_roles.Manage_Nicknames_switch,manual_roles.Manage_Roles_switch,manual_roles.Manage_Webhooks_switch,manual_roles.Manage_Emojis_switch);
    // cy.get('.roles_card').contains('QA testing Moderator').within(($form) => {
    //     cy.log($form)
    //     cy.get('.fa-circle')
        // var role_item = cy.get('.remove_role')
        // cy.log(role_item)
    // })

    // cy.get('.roles_card > .roles').within(($form) => {
    //     var roletest = cy.get('.role_item_row').contains('QA testing Moderator')
    //     roletest.get('.remove_role').first().click()
    //     cy.end()
        
        // $form.each($element => {
        //     var roletest = cy.get('.role_item').contains('QA testing Moderator')
        //     cy.log(roletest.get('.remove_role').click())
        // });
    //  })


    // cy.contains('Please fill out this field.')
    // .should('have.text' , '**Create **')

    // cy.on('window:alert', (str) => {
    //     cy.log(str)
    //     expect(str).to.have('Please fill out this field.')
    // })


    // cy.on('window:alert',(txt)=>{
    //     //Mocha assertions
    //     expect(txt).to.contains('Your full name cannot be blank.');
    //  })



    // cy.window().then(($win) => {
    //     cy.stub($win, 'prompt').returns('This is a test text')
    // })

    // cy.get('input.form-control').should('have.length', 1)

//     cy.get('pvd-system-message')
//   .shadow()
//   .find('p.message__bind')
//   .contains('SSN 123456789 not found ');

// cy.get('pvd-system-message')
//   .shadow()
//   .find('p.message__bind')
//   .should('have.text', 'SSN 123456789 not found ');
