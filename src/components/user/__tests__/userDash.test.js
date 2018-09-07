import React from "react";
import { mount, shallow, render } from "enzyme";
import sinon from "sinon";
import PropTypes from "prop-types";
import { MemoryRouter } from "react-router-dom";
import bookMeal from "../../../utils/store";
import UserDash from "../userDash";

describe("<UserDash/>", () => {
  const signup = render(
    <MemoryRouter initialEntries={["/UserDash"]} initialIndex={0}>
      <UserDash store={bookMeal} />
    </MemoryRouter>,
    {
      context: { store: bookMeal },
      childContextTypes: { store: PropTypes.object.isRequired }
    }
  );

  const testElements = [
    { element: "p.navbar-text", value: "Welcome" ,title: "includes a title UserDash"},
    { element: "div#orders-panel", value: "My orders", title: "has order panel" },
    { element: "footer", value: "Get in touchAboutTerms of service", title: "has a footer" },
    { element: "ul.quicklinks", value: "Get in touchAboutTerms of service", title: "has a  get in touch in footer"}
  ];
  testElements.map(element => {
    it("includes a title UserDash", () => {
        expect(signup.find(`${element.element}`).text()).toEqual(`${element.value}`);
      });
  })
});
