export class Create_Roles_Page{
    
    manualbtn(){
        return cy.get(':nth-child(3) > .server_creating_selection_item_right > .btn')
    }
    rolenamefield(){
        return cy.get('.form-control')
    }
    //colors

    rolecolor(){
        return cy.get('#UncontrolledPopover')
    }
    role_input(){
        return cy.get('#rc-editable-input-1')
    }

    white_color(){
       return cy.get('[style="margin-right: -10px;"] > :nth-child(1) > div')
    }
    
    pink_color(){
        return cy.get('[style="margin-right: -10px;"] > :nth-child(2) > div')
    }

    off_blue_color(){
        return cy.get('[style="margin-right: -10px;"] > :nth-child(3) > div')
    }

    green_color(){
        return cy.get('[style="margin-right: -10px;"] > :nth-child(4) > div')
    }

    sk_blue_color(){
        return cy.get('[style="margin-right: -10px;"] > :nth-child(5) > div')
    }

    grey_color(){
        return cy.get('[style="margin-right: -10px;"] > :nth-child(6) > div')
    }

    yellow_color(){
        return cy.get('[style="margin-right: -10px;"] > :nth-child(7) > div')
    }

    orange_color(){
        return cy.get('[style="margin-right: -10px;"] > :nth-child(8) > div')
    }

    purple_color(){
        return cy.get('[style="margin-right: -10px;"] > :nth-child(9) > div')
    }


    //Switches:1

    invite_switch(){
        return cy.get(':nth-child(2) > :nth-child(1) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-handle')
    }
    kick_members_switch(){
        return cy.get(':nth-child(2) > :nth-child(2) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-handle')
    }
    ban_members_switch(){
        return cy.get(':nth-child(2) > :nth-child(3) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-handle')
    }


    // Switches:2

    Administrator_switch(){
       return cy.get(':nth-child(4) > :nth-child(1) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Manage_Channels_switch(){
        return cy.get(':nth-child(4) > :nth-child(2) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Manage_Guild_switch(){
        return cy.get(':nth-child(4) > :nth-child(3) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Add_Reactions_switch(){
        return cy.get(':nth-child(4) > :nth-child(4) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    View_Audit_Log_switch(){
        return cy.get(':nth-child(4) > :nth-child(5) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Priority_Speaker_switch(){
        return cy.get(':nth-child(4) > :nth-child(6) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Stream_switch(){
        return cy.get(':nth-child(4) > :nth-child(7) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    View_Channel_switch(){
        return cy.get(':nth-child(4) > :nth-child(8) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Send_Messages_switch(){
        return cy.get(':nth-child(4) > :nth-child(9) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Send_Tts_Messages_switch(){
        return cy.get(':nth-child(4) > :nth-child(10) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Manage_Messages_switch(){
        return cy.get(':nth-child(4) > :nth-child(11) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Embed_Links_switch(){
        return cy.get(':nth-child(4) > :nth-child(12) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Attach_Files_switch(){
        return cy.get(':nth-child(4) > :nth-child(13) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Read_Message_History_switch(){
        return cy.get(':nth-child(4) > :nth-child(14) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Mention_Everyone_switch(){
        return cy.get(':nth-child(4) > :nth-child(15) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Use_External_Emojis_switch(){
        return cy.get(':nth-child(4) > :nth-child(16) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    View_Guild_Insights_switch(){
        return cy.get(':nth-child(4) > :nth-child(17) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Connect_switch(){
        return cy.get(':nth-child(4) > :nth-child(18) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Speak_switch(){
        return cy.get(':nth-child(4) > :nth-child(19) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Mute_Members_switch(){
        return cy.get(':nth-child(4) > :nth-child(20) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Deafen_Members_switch(){
        return cy.get(':nth-child(4) > :nth-child(21) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Move_Members_switch(){
        return cy.get(':nth-child(4) > :nth-child(22) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Use_Vad_switch(){
        return cy.get(':nth-child(4) > :nth-child(23) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Change_Nickname_switch(){
        return cy.get(':nth-child(4) > :nth-child(24) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Manage_Nicknames_switch(){
        return cy.get(':nth-child(4) > :nth-child(25) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Manage_Roles_switch(){
        return cy.get(':nth-child(4) > :nth-child(26) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Manage_Webhooks_switch(){
        return cy.get(':nth-child(4) > :nth-child(27) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }
    Manage_Emojis_switch(){
        return cy.get(':nth-child(4) > :nth-child(28) > .col-2 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
    }

   //checkbox

    create_permission_preset(){
        return cy.get('#presit')
    }
    permision_box(){
        return cy.get('form > .no-gutters > .col')
    }
 
    create_role_btn(){
        return cy.get('form > .no-gutters > .col > .btn')
    }
    created_roles(){
        return cy.get('.roles_card')
    }
    created_permissions(){
        return cy.get('[style="margin-top: 22px;"] > .roles > .role_item > .row > .col-8')
    }
    delete_role(){
        return cy.get(':nth-child(3) > .row > .col > .remove_role')
    }
    skip_steps(){
        return cy.get('.skip_steps')
    }

    jump_to_dashboard(){
        return cy.get('.jump_link > a')
    }

    back_btn(){
        return cy.get('.back_link')
    }

    clear_permision_btn(){
       return cy.get('.text-right > a')
    }
    yes_alert_box(){
        return cy.get('.react-confirm-alert-button-group > :nth-child(1)')
    }
    no_alert_box(){
        return cy.get('.react-confirm-alert-button-group > :nth-child(2)')
    }
    back_page_text(){
        return cy.get('.create_server_title')
    }
    next_page_text(){
        return cy.get('.create_server_title')
    }
    dashboard_text(){
        return cy.get('.dashboard_title')
    }

}
export default Create_Roles_Page;