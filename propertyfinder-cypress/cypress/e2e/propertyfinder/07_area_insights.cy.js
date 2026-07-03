import AreaInsightsPage from "../../pages/AreaInsightsPage";

describe("Module 7: Area Insights", () => {
  it("TC01 - should load Dubai area insights page", () => {
    AreaInsightsPage.visitDubai();
    AreaInsightsPage.assertPageLoaded();
  });

  it("TC02 - should load Abu Dhabi area insights page", () => {
    AreaInsightsPage.visitCity("abu-dhabi");
    AreaInsightsPage.assertPageLoaded();
  });

  it("TC03 - should load Sharjah area insights page", () => {
    AreaInsightsPage.visitCity("sharjah");
    AreaInsightsPage.assertPageLoaded();
  });

  it("TC04 - should open the Dubai community guides page", () => {
    cy.visit("/en/area-insights/dubai");
    cy.get("h1, h2").should("be.visible");
  });

  it("TC05 - should open the sale price map / explore prices page", () => {
    cy.visit("/en/area-insights/explore-prices/dubai");
    cy.get("h1, h2, [class*='map']").should("exist");
  });

  it("TC06 - should open tower & compound guides page", () => {
    cy.visit("/en/area-insights/dubai/compounds-and-towers");
    cy.get("h1, h2").should("be.visible");
  });
});
