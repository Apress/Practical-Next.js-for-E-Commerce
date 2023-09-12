describe("Adding Products", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Click on the Shop link
    cy.get("div.navbar > a:nth-child(3)").click(true);

    // The new url should include "/shop"
    cy.url().should("include", "/shop");

    // Click on a product - Spiced Pumpkin
    cy.get('a[href*="spiced-pumpkin"]').click();

    // Increase product quantity by 2
    cy.get("span.plus").click();

    // Click on Add to Cart
    cy.get("button.add-to-cart").click();

    // Verify that cart icon shows 2
    cy.get("span.cart-item-qty").contains(2);

    // Open cart to remove item
    cy.get("span.cart-item-qty").click();

    // Remove one item from basket
    cy.get("span.minus").eq(0).click();

    // Close Cart
    cy.get("div.cart-wrapper").click();

    // Verify that selected item shows 1
    cy.get("span.cart-num-items").contains("1 items");

    // Verify mini cart shows relevant details
    cy.get("span.cart-num-items").contains("(1 items)");
    cy.get("span.item-desc > span").contains("Spiced Pumpkin");
    cy.get("span.totals").contains("$18.50");
    cy.get("div.total > h3").contains("$18.50");
  });
});
