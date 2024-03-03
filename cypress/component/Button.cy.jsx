import Button from "../../src/components/Button";

describe("Button Component", () => {
  it("should render with the correct text and path", () => {
    // Define the path and text for the button
    const path = "/signin";
    const buttonText = "Click Me";

    // Mount the Button component with the specified props
    cy.mount(<Button text={buttonText} path={path} />);

    // Verify that the button renders with the correct text
    cy.contains(buttonText).should("exist");

    // Verify that the button has the correct path in its href attribute
    cy.get("a").should("have.attr", "href", path);
  });
});
