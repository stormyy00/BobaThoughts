import React from "react";
import Header from "../../src/components/Header";

describe("<Header />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header />);
  });
});
