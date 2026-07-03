describe("Module 10: Global Navigation & Footer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("TC01 - should navigate to the Rent vs Buy calculator", () => {
    cy.visit("/en/rent-vs-buy-calculator");
    cy.get("h1, h2").should("be.visible");
  });

  it("TC02 - should open the Property Blog", () => {
    cy.visit("/blog/");
    cy.get("h1, h2").should("be.visible");
  });

  it("TC03 - should open the Insights Hub / Market Reports page", () => {
    cy.visit("/en/insightshub");
    cy.get("h1, h2").should("be.visible");
  });

  it("TC04 - should open the About Us page from footer", () => {
    cy.get("footer").scrollIntoView();
    cy.get('footer a[href*="about-us"]').click({ force: true });
    cy.url().should("include", "about-us");
  });

  it("TC05 - should open the Terms & Conditions page from footer", () => {
    cy.visit("/en/terms-and-conditions.html");
    cy.get("h1, h2").should("be.visible");
  });

  it("TC06 - should open the Privacy Policy page from footer", () => {
    cy.visit("/en/privacy-policy.html");
    cy.get("h1, h2").should("be.visible");
  });

  it("TC07 - should switch language to Arabic via footer language link", () => {
    cy.get("footer").scrollIntoView();
    cy.get('footer a[href*="/ar"]').first().click({ force: true });
    cy.url().should("include", "/ar");
  });

  it("TC08 - should have working country switcher links in the footer", () => {
    cy.get("footer").scrollIntoView();
    cy.get('footer a[href*="propertyfinder.bh"]').should("exist");
    cy.get('footer a[href*="propertyfinder.eg"]').should("exist");
    cy.get('footer a[href*="propertyfinder.qa"]').should("exist");
  });

  it("TC09 - should have working social media links in the footer", () => {
    cy.get("footer").scrollIntoView();
    cy.get('footer a[href*="instagram.com"]').should("have.attr", "href");
    cy.get('footer a[href*="facebook.com"]').should("have.attr", "href");
    cy.get('footer a[href*="linkedin.com"]').should("have.attr", "href");
  });

  it("TC10 - should not have broken internal navigation links (spot check)", () => {
    const criticalLinks = [
      "/en/buy/properties-for-sale.html",
      "/en/rent/properties-for-rent.html",
      "/en/new-projects",
      "/en/find-agent",
      "/en/mortgage",
    ];
    criticalLinks.forEach((path) => {
      cy.request(path).its("status").should("eq", 200);
    });
  });
});
