import React from "react";
import { mount } from "enzyme";
import sinon from "sinon";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import bookMeal from "../../../utils/store";
import { MealView } from "../mealsView";

describe("<MealCaterer/>", () => {
  const funcMock = () => jest.genMockFunction();
  const handleMenuEvent = { preventDefault: () => jest.fn() };
  const simulator = (element, event, wrapper) => {
    wrapper.find(element).simulate(event, handleMenuEvent);
  };
  const meal = {
    name: "chicken",
    price: 3400,
    id: 2
  };
  const MenuNames = {
    Menus: ["one", "two"]
  };
  const wrapper = mount(
    <MemoryRouter>
      <Provider store={bookMeal}>
        <MealView
          MenuNames={MenuNames}
          meal={meal}
          DeleteMeal={funcMock}
          DeleteMenuMeal={funcMock}
          EditState={funcMock}
          GetMeals={funcMock}
          AddToMenu={funcMock}
        />
      </Provider>
    </MemoryRouter>,
    {
      context: { store: bookMeal },
      childContextTypes: { store: PropTypes.object.isRequired }
    }
  );
  const buttons = ['button.add-btn', 'button.edi-btn', 'button.del-btn']
  buttons.map(button =>{
    it("loads succesfully", () => {
        simulator(button, "click", wrapper);
      });
  })
});
