export class Create_Categories_Page{


    manualflow_continue_btn(){
       return cy.get(':nth-child(3) > .server_creating_selection_item_right > .btn')
    }
    Role_screen_text(){
        return cy.get('.create_server_title')
    }
    Category_screen_text(){
        return cy.get('.create_server_title')
    }

    Roles_Next_btn(){
        return cy.get('.no-gutters > .col > .ml-3')
    }
    category_input_btn(){
        return cy.get('.form-control')
    }

    private_category_switch(){
        return cy.get('.react-switch-handle')
    }

    frt_roles_switch(){
        return cy.get('.role_selection_scrollable_container > :nth-child(1) > .text-right > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 10.08px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-handle')
    }
    create_categories_btn(){
        return cy.get('form > .no-gutters > .col > .btn')
    }
    created_category_box(){
        return cy.get('.category_list_container')
    }
    delete_category(){
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
    Next_button(){
        return cy.get('form > .no-gutters > .col > .btn')
    }

    roles_switch(){
        return cy.get(':nth-child(5) > .text-right > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 14px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg')
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
    next_page_text(){
        return cy.get('.create_server_title')
    }
    dashboard_text(){
        return cy.get('.dashboard_title')
    }
}
export default Create_Categories_Page;