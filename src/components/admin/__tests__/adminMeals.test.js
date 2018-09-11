import React from "react";
import { mount } from "enzyme";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import bookMeal from "../../../utils/store";
import { MealList } from "../adminMeals";

describe("<MealList/>", () => {
  const returnWrapper = meals => {
    var mockFunc = () => jest.genMockFunction();
    return mount(
      <MemoryRouter>
        <Provider store={bookMeal}>
          <MealList
            MealsList={meals}
            GetMeals={mockFunc}
            EditMealState={mockFunc}
          />
        </Provider>
      </MemoryRouter>,
      {
        context: { store: bookMeal },
        childContextTypes: { store: PropTypes.object.isRequired }
      }
    );
  };

  it("loads succesfully", () => {
    var meals = {
      Meals: [
        {
          name: "KFC",
          price: 2300,
          id: "234"
        }
      ]
    };
    const wrapper = returnWrapper(meals);

    expect(wrapper.find("MealView").exists()).toBe(true);
  });

  it("loads succesfully with error from fetch request", () => {
    var meals = { Meals: [] };
    const wrapper = returnWrapper(meals);

    expect(wrapper.find("div.no-meals").exists()).toBe(true);
  });

  it("loads succesfully with warning from fetch request", () => {
    var meals = { Meals: [{ warning: "Bad stuff" }] };
    const wrapper = returnWrapper(meals);

    expect(wrapper.find("div.warning").text()).toBe("Bad stuff");
  });

  it("loads edit form on page", () => {
    var EditMealState = { status: true };
    var meals = { Meals: [{ warning: "Bad stuff" }] };
    const wrapper = mount(
      <MemoryRouter>
        <Provider store={bookMeal}>
          <MealList
            MealsList={meals}
            GetMeals={jest.fn()}
            EditMealState={EditMealState}
          />
        </Provider>
      </MemoryRouter>,
      {
        context: { store: bookMeal },
        childContextTypes: { store: PropTypes.object.isRequired }
      }
    );

    expect(wrapper.find("div.warning").text()).toBe("Bad stuff");
  });
});
