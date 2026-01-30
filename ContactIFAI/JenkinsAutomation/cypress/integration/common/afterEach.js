afterEach(function () {
    cy.wait(3000)
    // cy.get('button.ant-btn.ant-dropdown-trigger.ant-dropdown-open.filter-dropdowns').click()
    // cy.get('.ant-dropdown-menu-item').click()
    cy.get('.drop-down > .ant-btn > .anticon > svg > path').click()
    cy.wait(1000)
    cy.get('.drop-down > .ant-btn > :nth-child(1)').click()
    // cy.get('.ant-dropdown-menu-item').click()
    // cy.get('.custom-breadcrumb-item').invoke('text').should('eq', 'Dashboard')
    cy.log('Test Completed')
    

})