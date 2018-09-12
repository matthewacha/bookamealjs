import React from "react";
import { mount } from "enzyme";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import bookMeal from "../../../utils/store";
import { UserOrderView } from "../userOrderView";

describe("<UserOrderView/>", () => {
  const mockFunc = () => jest.fn();
  const unrealEvent = { preventDefault: () => jest.fn() };
  const returnWrapper = (order)=>{
    return  mount(
        <MemoryRouter>
          <Provider store={bookMeal}>
            <UserOrderView
              order={order}
              userEditStatus={mockFunc}
              getOrders={mockFunc}
            />
          </Provider>
        </MemoryRouter>,
        {
          context: { store: bookMeal },
          childContextTypes: { store: PropTypes.object.isRequired }
        }
      );
  }
  const listElements = [
    { status: "processing", element: "a" },
    { status: "ready", element: "a" },
    { status: "delivered", element: "div.success-btn" }
  ];
  listElements.map(element => {
    it(`loads shows it's ${element.status}`, () => {
      var order = {
        meal: {
          name: "KFC",
          price: 900
        },
        when: "03 Sep 2019 20:28:08 ",
        menu_name: "King",
        customer: { name: "Javas" },
        status: `${element.status}`
      };
      const wrapper = returnWrapper(order)
      wrapper.find(`${element.element}`).simulate("click", unrealEvent);


    });
  });

  it("loads succesfully", () => {
    var order = {
      meal: {
        name: "KFC",
        price: 900
      },
      when: "today",
      menu_name: "King",
      caterer: "Javas",
      status: "cancelled"
    };
    
    const wrapper = returnWrapper(order)

    wrapper.find("div.del-btn").simulate("click", unrealEvent);
  });

  it("loads succesfully for processing", () => {
    var order = {
      meal: {
        name: "KFC",
        price: 900
      },
      when: "03 Sep 2018 20:28:08 ",
      menu_name: "King",
      caterer: "Javas",
      status: "processing"
    };
    
    const wrapper = returnWrapper(order)

    wrapper.find("div.add-btn").simulate("click", unrealEvent);
  });
});
