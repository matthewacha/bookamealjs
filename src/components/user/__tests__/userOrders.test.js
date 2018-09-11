import React from "react";
import { mount, shallow, render } from "enzyme";
import sinon from "sinon";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import bookMeal from "../../../utils/store";
import { UserOrderList } from "../userOrders";

describe("<UserOrderList/>", () => {
  const returnWrapper = (element, orders) => {
    const getOrders = () => jest.genMockFunction();
    const wrapper = mount(
        <MemoryRouter>
          <Provider store={bookMeal}>
            <UserOrderList userOrders={orders} getOrders={getOrders} />
          </Provider>
        </MemoryRouter>,
        {
          context: { store: bookMeal },
          childContextTypes: { store: PropTypes.object.isRequired }
        }
      );
      expect(wrapper.find(element).exists()).toBe(true);
  }
  it("loads succesfully", () => {
    var userOrders = {
      Orders: [
        {
          meal: { name: "chicken", price: 3400 },
          when: 2345,
          menu_name: "Toasts"
        }
      ]
    };
    returnWrapper(".flex-container", userOrders)
  });

  it("loads succesfully", () => {
    var userOrders = {};
    returnWrapper(".panel-body", userOrders)
  });
});
