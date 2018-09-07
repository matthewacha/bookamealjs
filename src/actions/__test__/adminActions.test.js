import * as constants from "../adminActions";
import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const signdata = JSON.stringify({ name: "ice cream", price: 3400 });
const fetchMocker = (url, data, method) => {
  var option = {
    get: fetchMock.get(`${url}`, data),
    post: fetchMock.post(`${url}`, data),
    put: fetchMock.put(`${url}`, data),
    delete: fetchMock.delete(`${url}`, data)
  };
  return option[method];
};

describe("tests authentication actions", () => {
  beforeEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  const checks = (store, expectedActions) => {
    const returnActions = store.getActions();
    expect(returnActions.length).toBe(1);
    expect(returnActions).toEqual(expectedActions);
  };
  it("creates a meal", () => {
    const store = mockStore({});
    fetchMocker(
      "http://127.0.0.1:5000/api/v2/meals/",
      { message: "Successfully created" },
      "post"
    );
    const expectedActions = [
      {
        message: { message: "Successfully created" },
        type: "ADD_MEAL"
      }
    ];
    return store.dispatch(constants.PostMeal(signdata)).then(() => {
      checks(store, expectedActions);
    });
  });

  it("edit a meal", () => {
    const store = mockStore({});
    fetchMocker(
      `http://127.0.0.1:5000/api/v2/meals/1`,
      { message: "Successfully edited" },
      "put"
    );
    const expectedActions = [
      {
        message: { message: "Successfully edited" },
        type: "EDIT_MEAL"
      }
    ];
    return store.dispatch(constants.EditMeal(signdata, 1)).then(() => {
      checks(store, expectedActions);
    });
  });

  it("delete a meal", () => {
    const store = mockStore({});
    fetchMocker(
      `http://127.0.0.1:5000/api/v2/meals/1`,
      { message: "Successfully deleted" },
      "delete"
    );
    const expectedActions = [
      {
        message: { message: "Successfully deleted" },
        type: "DELETE_MEAL"
      }
    ];
    return store.dispatch(constants.DeleteMeal(1)).then(() => {
      checks(store, expectedActions);
    });
  });

  it("delete a menu meal", () => {
    const store = mockStore({});
    fetchMocker(
      "http://127.0.0.1:5000/api/v2/menus/King/1",
      { message: "Successfully deleted" },
      "delete"
    );
    const expectedActions = [
      {
        message: { message: "Successfully deleted" },
        type: "DELETE_MENU_MEAL"
      }
    ];
    return store.dispatch(constants.DeleteMenuMeal(1, "King")).then(() => {
      checks(store, expectedActions);
    });
  });

  it("get a menu meal", () => {
    const store = mockStore({});
    fetchMocker(
      "http://127.0.0.1:5000/api/v2/meals/1",
      { message: "Successfully returned" },
      "get"
    );
    const expectedActions = [
      {
        payload: { message: "Successfully returned" },
        type: "GET_MEAL"
      }
    ];
    return store.dispatch(constants.GetMeal(1)).then(() => {
      checks(store, expectedActions);
    });
  });

  it("Add meal to menu", () => {
    const store = mockStore({});
    fetchMocker(
      "http://127.0.0.1:5000/api/v2/menus/1",
      { message: "Successfully added" },
      "post"
    );
    const expectedActions = [
      {
        message: { message: "Successfully added" },
        type: "ADD_TO_MENU"
      }
    ];
    return store.dispatch(constants.AddToMenu(1, "King")).then(() => {
      checks(store, expectedActions);
    });
  });

  it("get a menu", () => {
    const store = mockStore({});
    fetchMocker(
      "http://127.0.0.1:5000/api/v2/getmenus/King",
      { message: "Successfully added" },
      "get"
    );
    const expectedActions = [
      {
        payload: { message: "Successfully added" },
        type: "GET_MENU"
      }
    ];
    return store.dispatch(constants.GetMenu("King")).then(() => {
      checks(store, expectedActions);
    });
  });

  it("get menus", () => {
    const store = mockStore({});
    fetchMocker(
      "http://127.0.0.1:5000/api/v2/menus/",
      { message: "Successfully added" },
      "get"
    );
    const expectedActions = [
      {
        payload: { message: "Successfully added" },
        type: "GET_MENUS"
      }
    ];
    return store.dispatch(constants.GetMenus()).then(() => {
      checks(store, expectedActions);
    });
  });

  it("get meals", () => {
    const store = mockStore({});
    fetchMocker(
      "http://127.0.0.1:5000/api/v2/meals/",
      { message: "Successfully returned" },
      "get"
    );
    const expectedActions = [
      {
        mealsList: { message: "Successfully returned" },
        type: "FETCH_MEALS"
      }
    ];
    return store.dispatch(constants.GetMeals()).then(() => {
      checks(store, expectedActions);
    });
  });

  it("edit status works", () => {
    const store = mockStore({});
    fetchMocker(
      "http://127.0.0.1:5000/api/v2/order/admin_status/1",
      { message: "Successfully returned" },
      "put"
    );
    const expectedActions = [
      {
        userOrders: { message: "Successfully returned" },
        type: "ADMIN_EDIT_ORDERS"
      }
    ];
    return store.dispatch(constants.adminEditStatus(true, 1)).then(() => {
      checks(store, expectedActions);
    });
  });

  it("user edit status works", () => {
    const store = mockStore({});
    fetchMocker(
      "http://127.0.0.1:5000/api/v2/order/user_status/1",
      { message: "Successfully returned" },
      "put"
    );
    const expectedActions = [
      {
        userOrders: { message: "Successfully returned" },
        type: "USER_EDIT_ORDERS"
      }
    ];
    return store.dispatch(constants.userEditStatus(true, 1)).then(() => {
      checks(store, expectedActions);
    });
  });

  it("admin get orders", () => {
    const store = mockStore({});
    fetchMocker(
      "http://127.0.0.1:5000/api/v2/getorder/admin",
      { message: "Successfully returned" },
      "get"
    );
    const expectedActions = [
      {
        Orders: { message: "Successfully returned" },
        type: "ADMIN_GET_ORDERS"
      }
    ];
    return store.dispatch(constants.getAdminOrders()).then(() => {
      checks(store, expectedActions);
    });
  });

  it("user get orders", () => {
    const store = mockStore({});
    fetchMocker(
      "http://127.0.0.1:5000/api/v2/orders",
      { message: "Successfully returned" },
      "get"
    );
    const expectedActions = [
      {
        userOrders: { message: "Successfully returned" },
        type: "GET_ORDERS"
      }
    ];
    return store.dispatch(constants.getOrders()).then(() => {
      checks(store, expectedActions);
    });
  });

  it("user posts orders", () => {
    const store = mockStore({});
    fetchMocker(
      "http://127.0.0.1:5000/api/v2/orders/1/2",
      { message: "Successfully returned" },
      "post"
    );
    const expectedActions = [
      {
        message: { message: "Successfully returned" },
        type: "MAKE_ORDER"
      }
    ];
    return store.dispatch(constants.makeOrder(1, 2)).then(() => {
      checks(store, expectedActions);
    });
  });

  it("user gets caterers menu", () => {
    const store = mockStore({});
    fetchMocker(
      "http://127.0.0.1:5000/api/v2/menus/1",
      {
        message: "Successfully returned"
      },
      "get"
    );
    const expectedActions = [
      {
        catererMenu: { message: "Successfully returned" },
        type: "GET_CATERER_MENU"
      }
    ];
    return store.dispatch(constants.getCatererMenu(1)).then(() => {
      checks(store, expectedActions);
    });
  });

  it("user gets caterer", () => {
    const store = mockStore({});
    fetchMocker(
      "http://127.0.0.1:5000/api/v2/caterer/Java",
      {
        message: "Successfully returned"
      },
      "get"
    );
    const expectedActions = [
      {
        caterers: { message: "Successfully returned" },
        type: "GET_CATERER"
      }
    ];
    return store.dispatch(constants.getCaterer("Java")).then(() => {
      checks(store, expectedActions);
    });
  });
});
