describe("Maps component", () => {
  beforeEach(() => {
    cy.visit("/"); // Replace this with the actual path to your component
  });

  it("displays Google Map", () => {
    cy.get('[cy-data="google-map"]').should("exist");
  });

  it("allows searching for places", () => {
    cy.get("#pac-input").type("Your search query"); // Replace 'Your search query' with the query you want to test
    cy.get(".pac-container").should("exist"); // Assuming `.pac-container` is the class for autocomplete suggestions container
  });

  // Add more tests as needed
});
