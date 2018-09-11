import React from "react";
import { mount, shallow, render } from "enzyme";
import sinon from "sinon";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import bookMeal from "../../../utils/store";
import { UserMenuView } from "../userMenuView";

describe("<UserMenuCaterer/>", () => {
  it("loads succesfully", () => {
    var mockFunc = () => jest.genMockFunction();
    var menuMeal = {
      mealNameame: "chicken",
      mealPrice: 3400
    };
    const handleMenuEvent = { preventDefault: () => jest.fn() };
    const wrapper = mount(
      <MemoryRouter>
        <Provider store={bookMeal}>
          <UserMenuView
            menuMeal={menuMeal}
            getOrders={mockFunc}
            makeOrder={mockFunc}
          />
        </Provider>
      </MemoryRouter>,
      {
        context: { store: bookMeal },
        childContextTypes: { store: PropTypes.object.isRequired }
      }
    );
    wrapper.find("a").simulate("click", handleMenuEvent);
    expect(wrapper.find('tr').text()).toBe("3400");
  });
});
