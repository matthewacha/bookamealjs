import React from "react";
import { mount } from "enzyme";
import { createStore, applyMiddleware } from "redux";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import { FlushThunks } from "redux-testkit";
import Signup from "../Signup";
import mainReducer from "../../../reducers";

describe("Sign up component", () => {
  let flushThunks, store;
  flushThunks = FlushThunks.createMiddleware();
  store = createStore(mainReducer, applyMiddleware(flushThunks, thunk));
  const historyMock = jest.fn();
  const wrapper = mount(
    <MemoryRouter>
      <Signup store={store} history={historyMock} />
    </MemoryRouter>
  );

  beforeEach(() => {
    jest.resetAllMocks();

  });

  it("should render without an error", () => {
    expect(wrapper.find("form.signup").exists()).toBe(true);
  });

  it("successfully submits form", () => {
    wrapper.find("form").simulate("click", {
      preventDefault: () => {},
      target: {
        elements: {
          email: { value: "me@mail.com" },
          password: { value: "animal" },
          isadmin: { checked: "true" }
        }
      }
    });
  });
});
