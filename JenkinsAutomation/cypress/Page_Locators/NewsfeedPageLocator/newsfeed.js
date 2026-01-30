
class NewsfeedPageLocator {
    reloadbtn(){
        return cy.get('[style="text-align: end; right: 27px;"] > .ant-btn > :nth-child(2)')
    }
    newstitle(){
        return cy.get('.news-title')
    }
    news_description(){
        return cy.get(':nth-child(1) > .ant-col-24 > .ant-card > .ant-card-cover > #shareDropdown > .ant-row > .ant-col-18 > .news-description')
    }
    news_company(){
        return cy.get(':nth-child(1) > .ant-col-24 > .ant-card > .ant-card-actions > li > :nth-child(1) > [style="display: flex;"] > [style="width: 50%; text-align: left;"] > [title="Company"]')
    }
    news_date(){
        return cy.get(':nth-child(1) > .ant-col-24 > .ant-card > .ant-card-actions > li > :nth-child(1) > [style="display: flex;"] > [style="width: 50%; text-align: left;"] > [style="margin-left: 15px;"]')
    }
    news_google_company(){
        return cy.get(':nth-child(1) > .ant-col-24 > .ant-card > .ant-card-actions > li > :nth-child(1) > [style="display: flex;"] > [style="width: 50%;"] > span')
    }
    campaign_subject(){
        return cy.get(':nth-child(1) > .ant-card > .ant-card-body > a > .ant-card-meta > .ant-card-meta-detail > .ant-card-meta-title')
    }
    navigate_newsfeed(){
        return cy.get('[href="/app/newsfeed"] > .sidebar-item > .sidebar-item-label')
    }
    campaign_enabled(){
        return cy.get(':nth-child(1) > :nth-child(1) > .ant-card > .ant-card-actions > :nth-child(2) > :nth-child(1) > .ant-btn')
    }
}
export default NewsfeedPageLocator;