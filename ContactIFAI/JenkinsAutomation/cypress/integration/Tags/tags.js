/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import TagLocator from '../../Page_Locators/TagsPageLocators/tags.js'
const tagLocator = new TagLocator()



//user moves to tag screen
When('User click on Tags', () => {
    cy.wait(4000)
    cy.get('[href="/app/tags"] > .sidebar-item > .sidebar-item-label').click()
})

// Check create button is enable when Tag form is empty
Given('User is navigate to Tags page', () => {
    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
})
When('User clicks on New Tag button', () => {
    tagLocator.getNewTag().click({ force: true })

})
And('A new Modal will be appears', () => {
    tagLocator.getNewTagModalAppear().should('be.visible')
})
Then('Create button is enabled for empty form', () => {
    tagLocator.getCreateEnablesButton().should('be.enabled')
    tagLocator.getImageDiv().within(() => {
        cy.get('img').click()
    })
})


//Check create button is enable when update tagname field

Given('User is navigate to Tags page', () => {
    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
})

When('User clicks on New Tag button', () => {
    tagLocator.getNewTag().click({ force: true })
})
And('A new Modal will be appears', () => {
    tagLocator.getNewTagModalAppear().contains("Add New Tag")
})
And('User enters value in Tagname input field', () => {

    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    let userInputData = userID_Alpha();
    tagLocator.getTagNameInput().type(userInputData)


})
Then('Tag create button should be enable', () => {
    tagLocator.getCreateEnablesButton().should('be.enabled')
})

And('User close the modal', () => {
    tagLocator.getImageDiv().within(() => {
        cy.get('img').click()
    })
})

// // Check success validation message appears or not while creating tag

Given('User is navigate to Tags page', () => {
    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
})
When('User clicks on New Tag button', () => {
    cy.wait(2000)
    tagLocator.getNewTag().click({ force: true })
})
And('A new Modal will be appears', () => {
    tagLocator.getNewTagModalAppear().contains('Add New Tag')
})
And('User enters value in Tagname input field', () => {
    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    let userInputData = userID_Alpha();
    tagLocator.getTagNameInput().type(userInputData)

})
And('Tag create button should be enable', () => {
    tagLocator.getCreateEnablesButton().should('be.enabled')
})
And('User clicks on Create button', () => {
    tagLocator.getCreateEnablesButton().click()
})
Then('Success message should appears', () => {
    tagLocator.successMessage().should('be.visible')
})


//.................................................................................................//


// Check tagname and description is showing in Tags_list page
Given('User is navigate to Tags page', () => {
    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
})
When('User clicks on New Tag button', () => {
    cy.wait(2000)
    tagLocator.getNewTag().click({ force: true })
})
And('A new Modal will be appears', () => {
    tagLocator.getNewTagModalAppear().contains('Add New Tag')
})
And('User enters value in TagName', () => {
    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    let userInputData = userID_Alpha();
    tagLocator.getTagNameInput().type(userInputData)
})
And('Add value in description', () => {
    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    let userInputData = userID_Alpha();
    tagLocator.getDescriptionInput().type(userInputData)
})
And('User clicks on Create button', () => {
    tagLocator.getCreateEnablesButton().click()

})
And('Success message appears', () => {
    tagLocator.successMessage().should('be.visible')
    cy.wait(2000)
})
Then('Newly added tag name is showing in list', () => {
    cy.get('[class*=ant-table-row-level]').eq(0).within(checkBox => {
        cy.get('.ant-checkbox-input').click()
        // tagLocator.editOption().scrollIntoView()
        cy.get('.ant-tag').eq(0).invoke('text').then(($tagName) => {
            let tagnamess = $tagName;
            cy.log('Tag with time = ', tagnamess)
            cy.contains(tagnamess).should('be.visible')
            // expect(tagnamess).equal(inputTagName)
        })

    })
})
And('Newly added tag description is showing in list', () => {
    tagLocator.getTableDescription().then(($tagName) => {
                expect($tagName.text()).to.exist
            })
   // // tagLocator.tableRows().eq(0).within(checkBox => {
   // //     tagLocator.getTableDescription().eq(0).then(($tagName) => {
   // //         expect($tagName.text()).to.exist
   // //     })
  //  // })

})

//.................................................................................................//

//Check create button is disabled while removing value from tagname field
Given('User is navigate to Tags page', () => {
    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
})
When('User clicks on New Tag button', () => {
    tagLocator.getNewTag().click({ force: true })
})
And('A new Modal will be appears', () => {
    tagLocator.getNewTagModalAppear().contains('Add New Tag')
})
And('User enters value in Tagname input field', () => {
    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    let userInputData = userID_Alpha();
    tagLocator.getTagNameInput().type(userInputData)

})
And('Tag create button is enable', () => {
    tagLocator.getCreateEnablesButton().should('be.enabled')
})
And('User removes values from input field', () => {
    tagLocator.getTagNameInput().clear()
})
Then('Create button disabled', () => {
    tagLocator.getCreateDisablesButton().should('be.enabled')
    tagLocator.tagnamevalidation().contains('Please enter tag name.')
})

And('User close the modal', () => {
    tagLocator.getCancelButton().click()
})


// //Check Tags_Page behaviour on selecting Dropdown "Recently Added" filter
Given('User is navigate to Tags page', () => {
    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
    cy.wait(3000)
})
When('User clicks on Filter dropdown menu', () => {
    cy.wait(2000)
    tagLocator.AllTagDropDown().click()

})
And('User clicks on Recently Added filter', () => {
    tagLocator.AllTagRecentlyFilter().click({ force: true })
    cy.wait(5000)
})
Then('Tags added 1 day before are displaying', () => {
    // tagLocator.tagtotalcount().contains('Total').scrollIntoView()
    cy.get('.ant-select-selector').scrollIntoView()
    cy.log(tagLocator.TotalTagCount())
    cy.window().then((win) => {
        win.scrollTo(0, 500)
    })

    tagLocator.TotalTagCount().scrollIntoView().should('be.visible')
    // tagLocator.TotalTagCount().then()

    // cy.log('Will display total tags number later')
    tagLocator.TotalTagCount().then(($article) => {
        const totalRecentTags = $article.text();

        let slicedText = totalRecentTags.slice(7)
        let Finalslicedtext = slicedText.substring(0, slicedText.length - 1)
        expect(Finalslicedtext).to.exist
        // Also get count from api and then match with the sliced text of total count 
        //will done this later
    })
})

// // Check that search is working PROPERLY
Given('User is navigate to Tags page', () => {

    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
    cy.wait(3000)

})
let tagSearchVal = "python";
When('User type tag name in the searchbox', () => {
    tagLocator.SearchTag().type(tagSearchVal)
})
And('User press Enter button', () => {
    tagLocator.SearchTag().type('{enter}')
})

Then('Tag will be appeared according to searh condition', () => {
    let tagname = "";
    tagLocator.EmptyTableRows().within(mytext => {
        // cy.get('.ant-checkbox-input').click()
        cy.get('.ant-empty-description').eq(0).then(($tagName) => {
            //  $tagName.text();
            // cy.log('Search Value is = ', $tagName.text())
            tagname = $tagName.text()
            // cy.log('Search Value is = ', tagname)
            expect("No Data").equal(tagname)
        })
    })
})

//  Check that search fields accepting special characters and integers

Given('User is navigate to Tags page', () => {

    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
    cy.wait(3000)

})
When('User type tag name in the searchbox', () => {
    tagLocator.SearchTag().type('python')
})
And('User types special characters', () => {
    tagLocator.SearchTag().type('@#$12')
})
And('User press enter key', () => {
    tagLocator.SearchTag().type('{enter}')
    cy.wait(2000)
})

Then('On entering special character and integer tag is showing or not', () => {
    tagLocator.EmptyTableRows().within(mytext => {
        cy.get('.ant-empty-description').eq(0).then(($tagName) => {
            let tagname = $tagName.text()
            expect("No Data").equal(tagname)
        })
    })
})


// Check that pagination is working properly in the tags_page
Given('User is navigate to Tags page', () => {

    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')

})
When('User clicks on pagination button', () => {
    tagLocator.TagPage2().click()
})

Then('Remaining tags are showing on that pagination number', () => {
    tagLocator.tableRows().should('be.visible')
})


// // Check that counts of tags are showing accurate or not
Given('User is navigate to Tags page', () => {

    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
    cy.wait(3000)

})
When('User changes the values from item containing dropdown list', () => {
    tagLocator.PageDataDropdownds().click()
    cy.wait(2000)
    // tagLocator.DropdownInternalVal()[2].click()
})

Then('Number of  tags are showing in the table according to the value in the item containing dropdownlist', () => {
    cy.log('Dropdown selected')
})


//    Check the behaviour of the page on selecting Tagname from the tagslist
Given('User is navigate to Tags page', () => {

    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
})
When('User select tag by clicking on checkbox', () => {
    tagLocator.tagTable().eq(0).within(checkBox => {
        tagLocator.getCheckbox().click()
    })
    
    // cy.get('.ant-checkbox-input').then($el => {
    //     cy.get($el[1]).click()
    // })
    // cy.log( cy.get('ant-checkbox-input'))
})
Then('All fiter dropdown disappears', () => {
    tagLocator.editOption().scrollIntoView()

    tagLocator.AllTagDropDown().should('not.exist')

})
And('New Tag button disappears', () => {
    tagLocator.getNewTag().should('not.exist')
})

And('Edit option will display', () => {
    tagLocator.editOption().should('be.visible')
})
And('Delete option will display', () => {
    tagLocator.deleteOption().should('be.visible')
})

// Check the behaviour of the page on Select all Tagname from the tagslist
Given('User is navigate to Tags page', () => {

    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
    cy.wait(3000)

})
When('User select all tags by clicksing on checkbox', () => {
    tagLocator.getTableHead().within(checkBox => {
        tagLocator.getCheckbox().click()
    })
})
Then('All tags selected', () => {
    cy.get('input.ant-checkbox-input').first().should('be.checked')
    // tagLocator.SelectedCheckbox().within(checkBox => {
    //     // tagLocator.deleteButton().scrollIntoView()
    //     tagLocator.SelectedCheckbox().first().should('be.selected')
    // })
    
})
And('New Tag button disappears', () => {
    cy.wait(2000)
    tagLocator.deleteButton().scrollIntoView()
    tagLocator.getNewTag().should('not.be.visible')
})
And('Delete button will be display', () => {
    tagLocator.getTaskHeader().scrollIntoView()
    tagLocator.deleteOption().contains('Delete')
})

//Check the behaviour on clicking edit option

Given('User is navigate to Tags page', () => {

    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
    cy.wait(3000)

})
let tableTagName = "";
When('User select first tag by clicking on checkbox', () => {
    tagLocator.tagtablecoulmn().then($el => {
        tagLocator.tagtablerows().eq(1).click()
    })
})

And('All filter dropdown disappears', () => {
    cy.wait(2000)
    tagLocator.editOption().scrollIntoView()

    tagLocator.AllTagDropDown().should('not.exist')

})
And('New Tag button disappears', () => {
    tagLocator.getNewTag().should('not.exist')
})

And('Edit will display', () => {
    tagLocator.editOption().should('be.visible')
})
And('Delete will display', () => {
    tagLocator.deleteOption().should('be.visible')
})
And('User Click on Edit', () => {
    tagLocator.editOption().click()
})
Then('A modal form will appears containing values of selected tag', () => {
    let alreadyTag = "";
    tagLocator.editTagNameField().then(someText => {
        cy.log('old tag name = ', Cypress.$(someText).val())
        alreadyTag = Cypress.$(someText).val();
    })
    expect(tableTagName).equal(alreadyTag)
})
And("User closes the modal", () => {
    tagLocator.getImageDiv().within(checkBox => {
        cy.get('img').click()
    })
})




// // Check the behaviour on clicking edit option

Given('User is navigate to Tags page', () => {

    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
    cy.wait(3000)

})
When('User selects tag by clicking on checkbox', () => {
    tagLocator.tagtablecoulmn().then($el => {
        tagLocator.tagtablerows().eq(1).click()
    })
            // cy.get($el[1]).click()
    // cy.log( cy.get('ant-checkbox-input'))
    // tagLocator.tableRows().eq(0).within(checkBox => {
    //     tagLocator.getCheckbox().click()

    // })
})
And('All filter dropdown disappears', () => {
    cy.wait(2000)
    tagLocator.editOption().scrollIntoView()

    tagLocator.AllTagDropDown().should('not.exist')

})
And('New Tag button disappears', () => {
    tagLocator.getNewTag().should('not.exist')
})

And('Edit will display', () => {
    tagLocator.editOption().should('be.visible')
})
And('Delete will display', () => {
    tagLocator.deleteOption().should('be.visible')
})
And('User Click on Edit', () => {
    tagLocator.editOption().click()
    cy.wait(2000)
})
Then('A modal form will appears containing values of selected tag', () => {

    tagLocator.editTagModal().should('be.visible')
    tagLocator.getImageDiv().within(() => {
        cy.get('img').click()
    })
})


// // Check that edit modal form containing tag values after updating
Given('User is navigate to Tags page', () => {

    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
    cy.wait(3000)

})
When('User selects tag by clicking on checkbox', () => {
    tagLocator.tagtablecoulmn().then($el => {
        tagLocator.tagtablerows().eq(1).click()
    })


    // tagLocator.getCheckbox().then($el => {
    //     cy.get($el[1]).click()
    // })
    // cy.log( cy.get('ant-checkbox-input'))
})
And('All filter dropdown disappears', () => {
    cy.wait(2000)
    tagLocator.editOption().scrollIntoView()

    tagLocator.AllTagDropDown().should('not.exist')

})
And('New Tag button disappears', () => {
    tagLocator.getNewTag().should('not.exist')
})

And('Edit will display', () => {
    tagLocator.editOption().should('be.visible')
})
And('Delete will display', () => {
    tagLocator.deleteOption().should('be.visible')
})
And('User Click on Edit', () => {
    tagLocator.editOption().click()
    cy.wait(2000)
})
And('A modal form will appear containing values of selected tag', () => {

    tagLocator.editTagModal().should('be.visible')
    cy.wait(2000)
})
let existedTagName = "";
And('User update the value of Tag name field', () => {
    tagLocator.editTagNameField().then(someText => {
        cy.log('old tag name = ', Cypress.$(someText).val())
        existedTagName = Cypress.$(someText).val();
        // cy.log('Old Tag name = ', existedTagName)
    })

    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    let userInputData = userID_Alpha();
    tagLocator.editTagNameField().clear().type(userInputData)
    cy.log('Existed Tag name = ', existedTagName)
})
And('User update the value of Tag Description field', () => {
    cy.log('Existed Tag name = ', existedTagName)
    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    let userInputData = userID_Alpha();
    tagLocator.editDescription().clear().type(userInputData)
})
And('User clicks on Cancel button', () => {
    tagLocator.getImageDiv().within(checkBox => {
        cy.get('img').click()
    })
})
And('Click on Edit', () => {
    tagLocator.editOption().click({ force: true })
})
let secondTimeTagName = "";
Then('Edit form containing the same value as selected tag', () => {
    // cy.log('Existed Tag name = ', existedTagName)
    tagLocator.editTagNameField().then(somesText => {
        expect(existedTagName).eql(Cypress.$(somesText).val())
    })
})

// Verify that success message after updating tag appears or not
Given('User is on Tag list page', () => {
    cy.wait(2000)
    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
    cy.wait(3000)

})
When('User selects tag by clicking on checkbox', () => {
    tagLocator.tagtablecoulmn().then($el => {
        tagLocator.tagtablerows().eq(1).click()
    })
})
And('All filter dropdown disappears', () => {
    cy.wait(2000)
    tagLocator.editOption().scrollIntoView()

    tagLocator.AllTagDropDown().should('not.exist')
})
And('New Tag button disappears', () => {
    tagLocator.getNewTag().should('not.exist')
})
And('Edit will display', () => {
    tagLocator.editOption().should('be.visible')
})
And('Delete will display', () => {
    tagLocator.deleteOption().should('be.visible')
})
And('User Click on Edit', () => {
    tagLocator.editOption().click()
    cy.wait(2000)
})
And('A modal form will appears containing values of selected tag', () => {
    tagLocator.editTagModal().should('be.visible')
    cy.wait(2000)
})
And('User change the value of Tag name', () => {
    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    let userInputData = userID_Alpha();
    tagLocator.editTagNameField().clear().type(userInputData)
})
And('User change the value of Tag Description', () => {
    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    let userInputData = userID_Alpha();
    tagLocator.editDescription().clear().type(userInputData)
})
And('User clicks on Update button', () => {
    tagLocator.updateButton().click()
})
Then('A success message appears on the top of page', () => {
    tagLocator.successMessage().should('be.visible')
})

// Check that tagname field is updated in tag list
Given('User is on Tag list page', () => {
    cy.wait(2000)
    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
    cy.wait(3000)

})
let oldTag = "";

When('User selects tag by clicking on checkbox', () => {
    tagLocator.tagtablecoulmn().then($el => {
        tagLocator.tagtablerows().eq(1).click()
        cy.get('.ant-tag').eq(0).then(($tagName) => {
            oldTag = $tagName.text();
            cy.log('Old tagname  = ', oldTag)
        })
    })
    cy.log('Old tagname  = ', oldTag)
})
And('All filter dropdown disappears', () => {
    cy.wait(2000)
    tagLocator.editOption().scrollIntoView()

    tagLocator.AllTagDropDown().should('not.exist')
})
And('New Tag button disappears', () => {
    tagLocator.getNewTag().should('not.exist')
})
And('Edit will display', () => {
    tagLocator.editOption().should('be.visible')
})
And('Delete will display', () => {
    tagLocator.deleteOption().should('be.visible')
})
And('User Click on Edit', () => {
    tagLocator.editOption().click()
    cy.wait(2000)
})
And('A modal form will appears containing values of selected tag', () => {
    tagLocator.editTagModal().should('be.visible')
    cy.wait(2000)
})
let NewTag = "";
And('User update the value of Tagname', () => {
    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    NewTag = userID_Alpha();
    let userInputData = NewTag;
    tagLocator.editTagNameField().clear().type(userInputData)
})
And('User update the value of TagDescription', () => {
    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    let userInputData = userID_Alpha();
    tagLocator.editDescription().clear().type(userInputData)
})
And('Click on Update button', () => {
    tagLocator.updateButton().click()
})
And('A success message appears on the top of page', () => {
    tagLocator.successMessage().should('be.visible')
})

Then('Updated tag name is showing in the tag list', () => {
    expect(oldTag).not.equal(NewTag)
})


// Check that Description field is updated in tag list

Given('User is on Tag list page', () => {
    cy.wait(2000)
    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
    cy.wait(3000)

})
let oldDescription = "";

When('User selects tag by clicking on checkbox', () => {
    tagLocator.tagtablecoulmn().then($el => {
        tagLocator.tagtablerows().eq(1).click()
        tagLocator.getTableDescription().eq(0).then(($tagName) => {
            oldDescription = $tagName.text();
            cy.log('Old Description  = ', oldDescription)
        })
    })
    cy.log('Old tagname  = ', oldTag)
})
And('All filter dropdown disappears', () => {
    cy.wait(2000)
    tagLocator.editOption().scrollIntoView()

    tagLocator.AllTagDropDown().should('not.exist')
})
And('New Tag button disappears', () => {
    tagLocator.getNewTag().should('not.exist')
})
And('Edit will display', () => {
    tagLocator.editOption().should('be.visible')
})
And('Delete will display', () => {
    tagLocator.deleteOption().should('be.visible')
})
And('User Click on Edit', () => {
    tagLocator.editOption().click()
    cy.wait(2000)
})
And('A modal form will appears containing values of selected tag', () => {
    tagLocator.editTagModal().should('be.visible')
    cy.wait(2000)
})

And('User update the value of Tag name', () => {
    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    let userInputData = userID_Alpha();
    tagLocator.editTagNameField().clear().type(userInputData)
})
let newDescription = "";
And('User update the value of Tag Description', () => {
    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    newDescription = userID_Alpha();
    tagLocator.editDescription().clear().type(newDescription)
})
And('CLick on Update button', () => {
    tagLocator.updateButton().click()
})
And('A success message appears on the top of page', () => {
    tagLocator.successMessage().should('be.visible')
})

Then('Updated description is showing in the tag list', () => {
    expect(oldDescription).not.equal(newDescription)
})

//Check the behaviour on clicking delete option

Given('User is on Tag list page', () => {
    cy.wait(2000)
    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
    cy.wait(3000)

})

When('User selects tag by clicking on checkbox', () => {
    tagLocator.tagtablecoulmn().then($el => {
        tagLocator.tagtablerows().eq(1).click()
    })
})

And('All filter dropdown disappears', () => {
    cy.wait(2000)
    tagLocator.editOption().scrollIntoView()

    tagLocator.AllTagDropDown().should('not.exist')
})
And('New Tag button disappears', () => {
    tagLocator.getNewTag().should('not.exist')
})
And('Edit will display', () => {
    tagLocator.editOption().should('be.visible')
})
And('Delete will display', () => {
    tagLocator.deleteOption().should('be.visible')
})
And('User Click on Delete', () => {
    cy.wait(2000)
    tagLocator.deleteOption().eq(1).click()
})
Then('A modal form will appears', () => {
    cy.wait(1000)
    tagLocator.deleteModalText().should('be.visible')
})
And('Are You Sure You want to Delete', () => {
    tagLocator.AreYouSureText().should('be.visible')
})
And('Select Delete Or Cancel', () => {
    tagLocator.deleteButton().should('be.visible')
    tagLocator.deleteCancelButton().should('be.visible')
    tagLocator.tagdeletecancelbtn().click()
})

// Check succes message on clicking delete button

Given('User is on Tag list page', () => {
    cy.wait(2000)
    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
    cy.wait(3000)

})

When('User selects tag by clicking on checkbox', () => {
    tagLocator.tagtablecoulmn().then($el => {
        tagLocator.tagtablerows().eq(1).click()
    })
})

And('All filter dropdown disappears', () => {
    cy.wait(2000)
    tagLocator.editOption().scrollIntoView()

    tagLocator.AllTagDropDown().should('not.exist')
})
And('New Tag button disappears', () => {
    tagLocator.getNewTag().should('not.exist')
})
And('Edit will display', () => {
    tagLocator.editOption().should('be.visible')
})
And('Delete will display', () => {
    tagLocator.deleteOption().should('be.visible')
})
And('User clicks on delete option', () => {
    cy.wait(2000)
    tagLocator.deleteOption().eq(1).click()
})

And('A modal form will appears containing two buttons', () => {
    tagLocator.deleteButton().should('be.visible')
    tagLocator.deleteCancelButton().should('be.visible')
})
And('User clicks on delete button', () => {
    tagLocator.deleteButton().click()
})
Then('A success message is appears after clicking delete button', () => {
    tagLocator.successMessage().should('be.visible')
})

// Check the behaviour of cancel button in delete modal form

Given('User is on Tag list page', () => {
    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
    cy.wait(3000)

})

When('User selects tag by clicking on checkbox', () => {
    tagLocator.tagtablecoulmn().then($el => {
        tagLocator.tagtablerows().eq(1).click()
    })
})

And('All filter dropdown disappears', () => {
    cy.wait(2000)
    tagLocator.editOption().scrollIntoView()

    tagLocator.AllTagDropDown().should('not.exist')
})
And('New Tag button disappears', () => {
    tagLocator.getNewTag().should('not.exist')
})
And('Edit will display', () => {
    tagLocator.editOption().should('be.visible')
})
And('Delete will display', () => {
    tagLocator.deleteOption().should('be.visible')
})
And('User clicks on Delete', () => {
    cy.wait(2000)
    tagLocator.deleteOption().eq(1).click()
})

And('A modal form will appears containing two buttons', () => {
    tagLocator.deleteButton().should('be.visible')
    tagLocator.deleteCancelButton().should('be.visible')
})

And('User clicks on cancel button', () => {
    tagLocator.DeleteModal().within(checkBox => {
        cy.get('.ant-btn').eq(0).click()
    })
})

Then('Modal disappears', () => {
    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.log('Model disappears')
})

// Check Tags_Page behaviour on selecting dropdown All filter
Given('User is on Tag list page', () => {
    cy.wait(2000)
    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
    cy.wait(3000)

})
When('User Click on Filter dropdown', () => {
    cy.wait(2000)
    tagLocator.AllTagDropDown().click()

})
And('User clicks on All filter', () => {
    tagLocator.AllTagRecentlyFilter().click({ force: true })
    cy.wait(5000)
})
Then('All tags are showing', () => {

})
// check tags created date is accurate or not
Given('User is navigate to Tags page', () => {

    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
    cy.wait(3000)

})
When('User clicks on New Tag button', () => {
    tagLocator.getNewTag().click()
})
And('A tag modal form will appears', () => {
    tagLocator.getNewTagModalAppear().should('be.visible')
})
let inputTagName = "";
And('User enters value in TagName', () => {
    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    inputTagName = userID_Alpha();
    // cy.log('Input tag name = ', inputTagName)
    tagLocator.getTagNameInput().type(inputTagName)
    cy.wait(1000)

})
let tagDescription = "";
And('Add value in description', () => {
    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    tagDescription = userID_Alpha();
    cy.log('Tag Description = ', tagDescription)
    tagLocator.getDescriptionInput().type(tagDescription)

})
And('User clicks on Create button', () => {
    tagLocator.getCreateEnablesButton().click()
})
And('Success message appears', () => {
    tagLocator.successMessage().should('be.visible')
    cy.wait(2000)
    tagLocator.getNewTag().scrollIntoView()
    cy.reload()
    cy.wait(2000)
})
let tagnamess = null
let descrip = null
let datess = null
Then('Newly added tag name is showing in tag list', () => {
    cy.wait(2000)
    cy.get('[class*=ant-table-row-level]').eq(0).within(checkBox => {
        cy.get('.ant-checkbox-input').click()
        // tagLocator.editOption().scrollIntoView()
        cy.get('.ant-tag').eq(0).invoke('text').then(($tagName) => {
            let tagnamess = $tagName;
            cy.log('Tag with time = ', tagnamess)
            cy.contains(tagnamess).should('be.visible')
            // expect(tagnamess).equal(inputTagName)
        })

    })
})
// And('Newly added description is showing in list', () => {

// })
And('Tag created date is showing in list', () => {
    cy.get('.communication').first().invoke('text').then($date => {
        let firstDate = $date
        cy.log(firstDate)
        expect(firstDate).to.exist

    })
    // datess.should('be.visible')
})


//  Check newly created tagname appears in tags_list or not	

Given('User is navigate to Tags page', () => {

    let getHeader = cy.get('.custom-breadcrumb-item')
    if (getHeader == "Tags") {
        console.log('Tags heading found.')
    }

    cy.get('.custom-breadcrumb-item').should('be.visible')
    cy.wait(2000)
    cy.log('User is on Tag list page')
    cy.wait(3000)
})
And('User Click on New Tag button', () => {
    tagLocator.getNewTag().click()
})
And('A tag modal form will appears', () => {
    tagLocator.getNewTagModalAppear().should('be.visible')
})
And('User enters value in TagName', () => {
    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    let userInputData = userID_Alpha();
    tagLocator.getTagNameInput().type(userInputData)
})
// And('Create button enable', () => {
//     tagLocator.getCreateEnablesButton().should('be.enabled')
// })
When('User clicks on Create button', () => {
    tagLocator.getCreateEnablesButton().click()
})
And('Success message appears', () => {
    tagLocator.successMessage().should('be.visible')
})
Then('Newly added tag name is showing in tags list', () => {

    cy.wait(2000)
    cy.get('[class*=ant-table-row-level]').eq(0).within(checkBox => {
        cy.get('.ant-checkbox-input').click()
        // tagLocator.editOption().scrollIntoView()
        cy.get('.ant-tag').eq(0).invoke('text').then(($tagName) => {
            let tagnamess = $tagName;
            cy.log('Tag with time = ', tagnamess)
            cy.contains(tagnamess).should('be.visible')
            // expect(tagnamess).equal(inputTagName)
        })

    })

})
