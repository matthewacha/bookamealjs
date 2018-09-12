import React from "react";
import { mount, shallow, render } from "enzyme";
import sinon from "sinon";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import bookMeal from "../../../utils/store";
import { MenuList } from "../adminMenus";

describe("<MenuList/>", () => {
  const loadTest = MenusList => {
    const mockFunc = () => jest.fn();
    const wrapper = mount(
      <MemoryRouter>
        <Provider store={bookMeal}>
          <MenuList TheMenu={MenusList} GetMenu={mockFunc} />
        </Provider>
      </MemoryRouter>,
      {
        context: { store: bookMeal },
        childContextTypes: {
          store: PropTypes.object.isRequired,
          GetMenus: PropTypes.func.isRequired
        }
      }
    );

    expect(wrapper.find(".panel-body").exists()).toBe(true);
    return wrapper
  };

  it("loads succesfully", () => {
    var MenusList = {
      Menu: [
        {
          mealNameame: "chicken",
          mealPrice: 3400
        },
        {
          mealNameame: "beef",
          mealPrice: 3400
        }
      ]
    };
    loadTest(MenusList);
  });

  it("loads succesfully with warning", () => {
    var MenusList = {
      Menu: [{ warning: "Something bad" }]
    };
    loadTest(MenusList);
  });

  it("loads succesfully with no active menu", () => {
    var MenusList = {};
    loadTest(MenusList);
  });

  it("loads succesfully with warning", () => {
    var MenusList = {
      message: "Something bad"
    };
    loadTest(MenusList);
  });

  it("loads succesfully with null meal id", () => {
    var MenusList = {
      Menu: [
        {
          mealId: null,
          mealName: null,
          mealPrice: null
        },
        {
          mealName: "beef",
          mealPrice: 3400
        }
      ]
    };
    loadTest(MenusList);
  });

  it("loads succesfully with null meal id", () => {
    var MenusList = {
      Menu: [
        {
          mealId: null,
          mealName: null,
          mealPrice: null
        },
        {
          mealName: "beef",
          mealPrice: 3400
        }
      ]
    };
    const fakeEvent = {preventDefault: jest.fn()}
    const wrapper = loadTest(MenusList);
    wrapper.find('form').simulate('submit', fakeEvent)
  });
});
