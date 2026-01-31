export class Invite_Member_Page{

    continue_btn(){
        return cy.get(':nth-child(3) > .server_creating_selection_item_right > .btn')
     }
     role_next_button(){
         return cy.get('.no-gutters > .col > .ml-3')
     }
     category_next_button(){
         return cy.get('.no-gutters > .col > .ml-3')
     }
     channel_next_button(){
        return cy.get('.no-gutters > .col > .ml-3')
    }
    invite_link_input(){
        return cy.get('input.form-control')
    }
    
    email_tag_input(){
        return cy.get('.email_tag_input')
    }
    Add_input_btn(){
        return cy.get('.col-6 > .text-right > .btn')
    }

    role_email(){
        return cy.get('.role_name')
    }
    email_edit_btn(){
       return cy.get('.back_link')
    }

    email_dlt_btn(){
       return cy.get('.fa-trash-o')
    }

    send_invites_btn(){
        return cy.get('.col > .btn')
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

    create_btn(){
        return cy.get(':nth-child(1) > .no-gutters > .col > .btn')
    }
     
}
export default Invite_Member_Page;