import Info from "../../src/components/Info.jsx";

const mockTextFirstTab = "Description";
const mockTextSecondTab = "Additional Information";

describe("<Info />", () => {
  it("should render and display expected content", () => {
    // Mount the Info component
    cy.mount(<Info />);

    // The component should contain an element of "footer"
    cy.get("div.react-tabs").should("be.visible");

    // The component should contain 2 tabs
    cy.get("ul[role='tablist'] > li").should("have.length", 2);

    // Validate that four links with the expected URLs are present
    cy.get("ul[role='tablist'] > li:nth-child(1)").should(
      "have.text",
      mockTextFirstTab
    );

    // Validate that four links with the expected URLs are present
    cy.get("ul[role='tablist'] > li:nth-child(2)").should(
      "have.text",
      mockTextSecondTab
    );
  });
});
