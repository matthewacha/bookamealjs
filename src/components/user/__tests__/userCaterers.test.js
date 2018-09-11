import React from "react";
import { mount } from "enzyme";
import sinon from "sinon";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import bookMeal from "../../../utils/store";
import history from "../../../utils/history";
import { Caterers } from "../userCaterers";

describe("<SearchCaterer/>", () => {
    const getCatererEvent = { preventDefault: () => jest.fn() };
    const returnWrapper = (caterers) => {
        return mount(
            <MemoryRouter>
              <Provider store={bookMeal} history={history}>
                <Caterers caterers={caterers} />
              </Provider>
            </MemoryRouter>,
            {
              context: { store: bookMeal },
              childContextTypes: { store: PropTypes.object.isRequired }
            }
          );
    }

  it("loads succesfully with caterers", () => {
    var caterers = {
      caterers: [
        {
          name: "Java",
          location: "KLA",
          phone: "980"
        }
      ]
    };
    const wrapper = returnWrapper(caterers)
    wrapper.find("#caterers").simulate("submit", getCatererEvent);
    expect(wrapper.find("form").length).toBe(1);
  });

  it("loads succesfully with caterers", () => {
    var caterers = {
      caterers: []
    };
    const wrapper = returnWrapper(caterers)
    expect(wrapper.find("form").length).toBe(1);
  });

  it("loads succesfully with caterers", () => {
    var caterers = {
      message: "Blah blah"
    };
    const wrapper = returnWrapper(caterers)
    expect(wrapper.find("td#no-return").text()).toBe("Search for caterers");
  });
});
