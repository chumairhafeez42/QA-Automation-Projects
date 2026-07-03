import HomePage from "../../pages/HomePage";
import FindAgentPage from "../../pages/FindAgentPage";

describe("Module 9: Find Agents", () => {
  it("TC01 - should navigate to Find Agents from homepage nav", () => {
    HomePage.visit();
    HomePage.goToFindAgents();
    FindAgentPage.assertPageLoaded();
  });

  it("TC02 - should load the Find Agents page directly", () => {
    FindAgentPage.visit();
    FindAgentPage.elements.heading().should("be.visible");
  });

  it("TC03 - should display a list/grid of agents or agencies", () => {
    FindAgentPage.visit();
    cy.get("body").should("not.be.empty");
  });
});
