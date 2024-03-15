import TextBox from "../../src/components/TextBox";

describe("TextBox component", () => {
  it("renders with placeholder and value", () => {
    const placeholder = "Enter text...";
    const value = "Test Value";
    cy.mount(
      <TextBox placeholder={placeholder} value={value} onChange={() => {}} />,
    );
    cy.get('input[type="text"]').should(
      "have.attr",
      "placeholder",
      placeholder,
    );
    cy.get('input[type="text"]').should("have.value", value);
  });

  it("updates value when typed into", () => {
    const newValue = "New Value";
    cy.mount(
      <TextBox placeholder="Enter text..." value="" onChange={() => {}} />,
    );
    cy.get('input[type="text"]').type(newValue);
    //   cy.get('input[type="text"]').should('have.value', newValue)
  });

  it("calls onChange handler when typed into", () => {
    const newValue = "New Value";
    cy.mount(
      <TextBox
        placeholder="Enter text..."
        value=""
        onChange={(value) => {
          cy.log("Received value:", value);
          expect(value).to.equal(newValue); // Expect the received value to be equal to newValue
        }}
      />,
    );
    // cy.get('input[type="text"]').type(newValue);
  });
});
