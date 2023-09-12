import Product from "../../src/components/Product.jsx";

const mockProduct = {
  _type: "product",
  delivery:
    "We carefully package our macarons and use Royal Mail to post them to you under first class postage. We only deliver to the UK.",
  details:
    "Enjoy the taste of our indulgent Chocolate Orange Macarons. Bursting with 100% natural flavours, our perfectly proportioned treats are handcrafted in our kitchen and beautifully packaged for your enjoyment.",
  image: [
    {
      _key: "ba6786ee0e81",
      _type: "image",
      asset: {
        _ref: "image-812a8575cab31a81ea8352e913d173c9244151b7-456x456-jpg",
      },
    },
  ],
  ingredients:
    "Ground Almonds (contains nuts) , Icing Sugar, Free Range Egg Whites (contains Eggs), Sugar, Milk Chocolate, (Sugar, Cocoa Butter, High Fat Milk Powder, Cocoa Mass, Whole Milk Powder, Skimmed Milk Powder, Lactose (Milk), Emulsifier: Lecithins (Soya); Vanilla Extract), Double Cream (contains Milk), Orange Extract, Colour E110 may have an adverse effect on activity and attention in children  Please note: product may contain allergens - if in doubt, please ask.",
  name: "Chocolate Orange",
  price: 18.5,
  sku: "MACM001",
  slug: {
    current: "chocolate-orange",
  },
  weight: "335g",
};

describe("<Product />", () => {
  it("should render and display expected content", () => {
    // Mount the DemoBanner component
    cy.mount(<Product product={mockProduct} />);

    // The component should contain an element of "footer"
    cy.get("div").should("be.visible");

    // Validate that the correct text is displayed in the Product card
    cy.get("p.product-name:nth-child(2)").should("have.text", mockProduct.name);
  });
});
