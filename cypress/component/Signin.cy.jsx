import React from "react";
import Signin from "../../src/components/Signin";

describe("<Signin />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Signin />);
  });
});
