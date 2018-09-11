import React from "react";
import { mount, shallow, render } from "enzyme";
import sinon from "sinon";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import bookMeal from "../../../utils/store";
import { MenuView } from "../MenuView";

describe("<MenuView/>", () => {
  it("loads succesfully", () => {
    var mockFunc = () => jest.genMockFunction();
    var menuList = {
      Menu: [
        {
          name: "Monday",
          mealNameame: "chicken",
          mealPrice: 3400,
          meal_id: 3
        }
      ]
    };
    var menuMeal = {
      mealNameame: "chicken",
      mealPrice: 3400,
      meal_id: 3
    };
    var MealsList = {
      Meals: [
        {
          mealNameame: "chicken",
          mealPrice: 3400,
          meal_id: 3
        }
      ]
    };
    const handleMenuEvent = { preventDefault: () => jest.fn() };
    const wrapper = mount(
      <MemoryRouter>
        <Provider store={bookMeal}>
          <MenuView
            menulist={menuList}
            menuMeal={menuMeal}
            MealsList={MealsList}
            DeleteMenuMeal={mockFunc}
            GetMenu={mockFunc}
          />
        </Provider>
      </MemoryRouter>,
      {
        context: { store: bookMeal },
        childContextTypes: { store: PropTypes.object.isRequired }
      }
    );

    wrapper.find("button.del-btn").simulate("click", handleMenuEvent);
    expect(wrapper.find("button.del-btn").text()).toBe("delete");
  });
});
