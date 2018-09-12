import React from "react";
import { mount, shallow, render } from "enzyme";
import sinon from "sinon";
import PropTypes, { element } from "prop-types";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import bookMeal from "../../../utils/store";
import { AdminOrderView } from "../OrderView";

describe("<AdminOrderView/>", () => {
  const mockFunc = () => jest.fn();
  const unrealEvent = { preventDefault: () => jest.fn() };
  const listElements = [
    'cancelled', 'ready', 'delivered', 
]
  it("loads succesfully", () => {
    var order = {
      meal: {
        name: "KFC",
        price: 900
      },
      when: "today",
      menu_name: "King",
      customer: { name: "Javas" },
      status: "processing"
    };
    const wrapper = mount(
      <MemoryRouter>
        <Provider store={bookMeal}>
          <AdminOrderView
            order={order}
            adminEditStatus={mockFunc}
            getAdminOrders={mockFunc}
          />
        </Provider>
      </MemoryRouter>,
      {
        context: { store: bookMeal },
        childContextTypes: { store: PropTypes.object.isRequired }
      }
    );

    wrapper.find("a").simulate("click", unrealEvent);
  });

  listElements.map(element => {
    it(`loads shows its ${element}`, () => {
        var order = {
          meal: {
            name: "KFC",
            price: 900
          },
          when: "today",
          menu_name: "King",
          customer: { name: "Javas" },
          status: `${element}`
        };
        const wrapper = mount(
          <MemoryRouter>
            <Provider store={bookMeal}>
              <AdminOrderView
                order={order}
                adminEditStatus={mockFunc}
                getAdminOrders={mockFunc}
              />
            </Provider>
          </MemoryRouter>,
          {
            context: { store: bookMeal },
            childContextTypes: { store: PropTypes.object.isRequired }
          }
        );
    
        expect(wrapper.find(`div#${element}`).text()).toBe(`${element}`);
      });
  })
});
