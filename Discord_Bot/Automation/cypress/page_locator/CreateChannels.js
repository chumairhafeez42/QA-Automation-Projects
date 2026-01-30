export class Create_Categories_Page{

    continue_btn(){
       return cy.get(':nth-child(3) > .server_creating_selection_item_right > .btn')
    }
    role_next_button(){
        return cy.get('.no-gutters > .col > .ml-3')
    }
    cate_next_button(){
        return cy.contains('Next')
    }
    Role_screen_text(){
        return cy.get('.create_server_title')
    }
    Category_Screen_text(){
        return cy.get('.create_server_title')
    }
    Channel_screen_text(){
        return cy.get('.create_server_title')
    }
    checkbox_text_channel(){
        return cy.get('#textCHannel')
    }
    checkbox_voice_channel(){
        return cy.get('#voiceCHannel')
    }
    channel_input_field(){
        return cy.get('.form-control')
    }
    select_channel_dropdown(){
        return cy.get('.custom_select_box > .btn')
    }
    dropdown_menu(){
        return cy.get('[value="778875107765518368"]')
    }
    private_channel_switch(){
        return cy.get('.react-switch-handle')
    }
    frt_channel_switch(){
        return cy.get('.role_selection_scrollable_container > :nth-child(1) > .text-right > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-handle')
    }
    channel_create_btn(){
        return cy.get(':nth-child(1) > .no-gutters > .col > .btn')
    }

    delete_channel(){
        return cy.get(':nth-child(3) > .row > .col > .remove_role')
    }
    alert_body(){
        return cy.get('.react-confirm-alert-body > h1')
    }
    yes_alert_box(){
        return cy.get('.react-confirm-alert-button-group > :nth-child(1)')
    }
    no_alert_box(){
        return cy.get('.react-confirm-alert-button-group > :nth-child(2)')
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

    channels_name_box(){
        return cy.get(':nth-child(2) > .bot_card')
    }
    Invite_Screen_Text(){
        return cy.get('.create_server_title')
    }
    dashboard_text(){
        return cy.get('.dashboard_title')
    }

}
export default Create_Categories_Page;