import React from "react";
import Signin from "../../src/components/logs/Sign-in";

describe("<Signin />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Signin />);
  });
});
