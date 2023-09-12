describe("Counting Credit Card Images", () => {
  it("should navigate to the about page", () => {
    cy.visit("http://localhost:3000/");

    // verify that we have 9 list items
    cy.get("ul.payment-icons > li").should("have.length", 9);
  });
});
