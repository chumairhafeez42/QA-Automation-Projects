import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import Create_Categories_Page from '../../page_locator/CreateCategories.js';

const manual_category = new Create_Categories_Page();
var category_name = 'QA Department'



Given ('User navigates to Server Configuration Screen', () => {
    cy.Login()
})
And('User clicks on Continue button in Manual Flow Tab' , () =>{
    manual_category.manualflow_continue_btn().click()
})
And ('A new Window appears  Create Roles',()=>{
    manual_category.Role_screen_text().contains('Create Roles')
})
When ('User clicks on Next button',()=>{
    manual_category.Roles_Next_btn().click()
})
And ('it is redirected to new page Create Categories',()=>{
    manual_category.Category_screen_text().contains('Create Category')
})
And ('User enters Category Name in input field',()=>{
    manual_category.category_input_btn().type(category_name)
})
And ('User can Select Private Category by enabling button',()=>{
    manual_category.private_category_switch().click().should('not.be.disabled')
})
And ('User can Select the Roles who can access this category by enabling button',()=>{
    manual_category.frt_roles_switch().click().should('not.be.disabled')
})
And('User clicks on Create button',()=>{
    manual_category.create_categories_btn().click()
})
Then('A Category is created',()=>{
    manual_category.created_category_box().contains(category_name)
    cy.log("Category is created")
})
And('created categories are shown in Categories box',()=>{
    manual_category.created_category_box().contains(category_name)
})
And ('User can delete the categories by clicks on delete icon',()=>{
    manual_category.delete_category().click()
    manual_category.yes_alert_box().click()

})

// -----------------------------------------------------//

Given ('User navigates to Create Categories Screen', () => {
    cy.Login()
    manual_category.manualflow_continue_btn().click()
    manual_category.Role_screen_text().contains('Create Roles')
    manual_category.Roles_Next_btn().click()
    manual_category.Category_screen_text().contains('Create Category')
})
When ('User not enters CategoriesName in input field clicks on create button', () => {
    manual_category.create_categories_btn().click()
})
Then ('A validation should be appear Characters only', () => {
    cy.get('input.form-control').should('have.length', 1)
   
    cy.get('input.form-control').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
      })
    cy.get('.create_server_title')
})

// -----------------------------------------------------//

    Given ('User navigates to Create Categories Screen', () => {
        cy.Login()
        manual_category.manualflow_continue_btn().click()
        manual_category.Role_screen_text().contains('Create Roles')
        manual_category.Roles_Next_btn().click()
        manual_category.Category_screen_text().contains('Create Category')
    })
    And ('User enters Category Name in input field', () => {
        manual_category.category_input_btn().type(category_name)
    })
    When ('User can Select Private Category by enabling button', () => {
        manual_category.private_category_switch().click().should('not.be.disabled')
    })
    And ('User can Select the Roles who can access this category by enabling button', () => {
        manual_category.frt_roles_switch().click().should('not.be.disabled')
    })
    And ('User clicks on Create button', () => {
        manual_category.create_categories_btn().click()
    })
    Then ('A Category is created', () => {
        manual_category.created_category_box().contains(category_name)
    })
    And ('private categories are shown in Categories box', () => {
        cy.log("private category is created")
    })

// -----------------------------------------------------//

    Given('User navigates to Create Categories Screen', () => {
        cy.Login()
        manual_category.manualflow_continue_btn().click()
        manual_category.Role_screen_text().contains('Create Roles')
        manual_category.Roles_Next_btn().click()
        manual_category.Category_screen_text().contains('Create Category')
    })
    And ('User enters Categories Name in input field', () => {
        manual_category.category_input_btn().type(category_name)
    })
    And ('User selects Private Category Setting Role Access by enabling switch button', () => {
        manual_category.private_category_switch().click().should('not.be.disabled')
    })
    And ('User clicks on Create  Button', () => {
        manual_category.create_categories_btn().click()
    })
    And ('A Category is created', () => {
        cy.log('Category is created')
    })
    And ('created categories are shown in Roles box', () => {
        manual_category.created_category_box().contains(category_name)
    })
    When ('User clicks on delete icon in roles box', () => {
        manual_category.delete_category().click()
    })
    And ('A Alert Alert appears Are you sure you want to remove this role this active cant be undone YES OR NO', () => {
        cy.on('window:confirm', () => true)
        cy.fixture('common.json').then(data => {
            manual_category.alert_body().invoke("text").should('eq',data.alert_text)
        })
    })
    And ('user clicks on Yes', () => {
        manual_category.yes_alert_box().click()
    })
    Then ('Created categories is deleted', () => {
        cy.log('category is deleted')
    })
    And ('user clicks on No', () => {
        manual_category.delete_category().click()
        manual_category.no_alert_box().click()
    })
    And ('Created categories isnt deleted', () => {
        cy.log('category is not deleted')
    })

// -----------------------------------------------------//

Given ('User navigates to Create Categories Screen', () => {
    cy.Login()
    manual_category.manualflow_continue_btn().click()
    manual_category.Role_screen_text().contains('Create Roles')
    manual_category.Roles_Next_btn().click()
    manual_category.Category_screen_text().contains('Create Category')
})
When('User clicks on Back Button at top left corner', () => {
    manual_category.back_btn().click()
})
Then ('it is redirected to previous page Create Role Screen', () => {
    manual_category.Role_screen_text().contains('Create Roles')
})


//-----------------------------------------------------//

Given ('User navigates to Create Categories Screen', () => {
    cy.Login()
    manual_category.manualflow_continue_btn().click()
    manual_category.Role_screen_text().contains('Create Roles')
    manual_category.Roles_Next_btn().click()
    manual_category.Category_screen_text().contains('Create Category')
})
When('User clicks on skip this step Button at top right corner', () => {
    manual_category.skip_steps().click()
})
Then ('it is redirected to next page Create Channel Screen', () => {
    manual_category.next_page_text().contains('Create Channels')
})

//-----------------------------------------------------//

Given ('User navigates to Create Categories Screen', () => {
    cy.Login()
    manual_category.manualflow_continue_btn().click()
    manual_category.Role_screen_text().contains('Create Roles')
    manual_category.Roles_Next_btn().click()
    manual_category.Category_screen_text().contains('Create Category')
})
When('User clicks on jump to dashboard Button at top right corner', () => {
    manual_category.jump_to_dashboard().click()
})
Then ('it is redirected to dashboard page', () => {
    manual_category.dashboard_text().contains('Dashboard')
})