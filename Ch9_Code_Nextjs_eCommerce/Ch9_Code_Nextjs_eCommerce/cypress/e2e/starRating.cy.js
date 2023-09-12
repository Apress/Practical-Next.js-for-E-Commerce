describe("Star Rating", () => {
  it("should navigate to a product page", () => {
    cy.visit("http://localhost:3000/product/chocolate-orange");

    // confirm that we have number of counts of ratings to right of stars
    cy.get("div.reviews > p").contains("(20)");

    // div should contain 5 stars
    cy.get("div.star-rating > button").should("have.length", 5);

    // click on star 3 from left
    cy.get("div.star-rating > button").eq(2).click();

    // should have 3 red stars, 2 grey
    cy.get("div.star-rating > button").eq(2).should("have.class", "on");
  });
});
