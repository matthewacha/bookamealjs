import React from "react";
import { mount, shallow, render } from "enzyme";
import sinon from "sinon";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import bookMeal from "../../../utils/store";
import { UserMenu } from "../userMenu";
import menuListView from "../../admin/menuListView";
import catererView from "../catererView";

describe("<UserMenu/>", () => {
    const returnWrapper = (catererMenu, elem) =>{
        const wrapper = mount(
            <MemoryRouter>
              <Provider store={bookMeal}>
                <UserMenu catererMenu={catererMenu} />
              </Provider>
            </MemoryRouter>,
            {
              context: { store: bookMeal },
              childContextTypes: { store: PropTypes.object.isRequired }
            }
          );
          expect(wrapper.find(`${elem}`).length).toBe(1);
    }
  it("loads succesfully", () => {
    var catererMenu = {
      Menu: [
        {
          mealNameame: "chicken",
          mealPrice: 3400
        }
      ]
    };
    returnWrapper(catererMenu, "UserMenuView")
  });

  it("loads succesfully with no menu selected", () => {
    var catererMenu = {
      Menu: undefined
    };
    returnWrapper(catererMenu,"div#no-menu")
  });
});
