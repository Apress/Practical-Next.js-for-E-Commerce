import DemoBanner from "../../src/components/DemoBanner.jsx";

const mockText =
  "This is a demo store - no orders will be accepted or delivered";

describe("<DemoBanner />", () => {
  it("should render and display expected content", () => {
    // Mount the DemoBanner component
    cy.mount(<DemoBanner />);

    // The component should contain an element of "footer"
    cy.get("div.demo-banner-container").should("be.visible");

    // Validate that the correct text is displayed in the banner
    cy.get("div.demo-banner-container").should("have.text", mockText);
  });
});
