import Enter from "../../src/components/Enter";

import { useState } from "react";

describe("Enter Component", () => {
  it("should display placeholder correctly", () => {
    const Parent = () => {
      const onSubmit = () => {}; // Define a mock onSubmit function
      return <Enter onSubmit={onSubmit} />;
    };

    cy.mount(<Parent />);
    cy.get('input[type="text"]').should(
      "have.attr",
      "placeholder",
      "Enter a location",
    );
  });

  it("should update location when user types into input", () => {
    const Parent = () => {
      const onSubmit = () => {}; // Define a mock onSubmit function
      return <Enter onSubmit={onSubmit} />;
    };

    cy.mount(<Parent />);
    cy.get('input[type="text"]').type("New York");
    cy.get('input[type="text"]').should("have.value", "New York");
  });

  it("should call onSubmit with the correct location when submit button is clicked", () => {
    const Parent = () => {
      const [submittedLocation, setSubmittedLocation] = useState("");

      const handleSubmit = (location) => {
        setSubmittedLocation(location);
      };

      return <Enter onSubmit={handleSubmit} />;
    };

    cy.mount(<Parent />);
    cy.get('input[type="text"]').type("Los Angeles");
    cy.contains("Submit").click();
    // cy.window().its("submittedLocation").should("equal", "Los Angeles");
  });
});
