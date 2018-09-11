import {
  signUp,
  logIn,
  signAdmin,
  loginAdmin,
  editAdminInfo
} from "../credActions";
import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const authData = JSON.stringify({
  email: "me@mail.com",
  password: "12345678",
  isadmin: "true"
});
const token = {
  token: "8726347kwejhbfv238fu"
};

const expecteds = (type, data, payload = undefined, token = undefined) => {
  if (payload === "payload") {
    return [
      {
        payload: data,
        type: type
      }
    ];
  } else {
    return [
      {
        token: data,
        type: type
      }
    ];
  }
  return;
};

const fetchMocker = (url, data, put = undefined) => {
  if (put === "put") {
    return fetchMock.put(`${url}`, data);
  } else {
    return fetchMock.post(`${url}`, data);
  }
};

describe("tests authentication actions", () => {
  beforeEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it("calls signup request if fetch was successful", () => {
    const store = mockStore({});
    fetchMocker("https://bookamealbk.herokuapp.com/api/v2/auth/signup", {
      message: "Successfully signed up"
    });
    const expectedActions = expecteds(
      "SIGN_USER",
      { message: "Successfully signed up" },
      "payload"
    );
    return store.dispatch(signUp(authData)).then(() => {
      const returnActions = store.getActions();
      expect(returnActions.length).toBe(1);
      expect(returnActions).toEqual(expectedActions);
    });
  });

  it("calls login request if fetch was successful", () => {
    const store = mockStore({});
    fetchMocker("https://bookamealbk.herokuapp.com/api/v2/auth/login", {
      message: "Successfully logged in"
    });
    const expectedActions = expecteds(
        "LOGIN_USER",
        { message: "Successfully logged in" },
        undefined,
        "token"
      );
    return store.dispatch(logIn(authData)).then(() => {
      const returnActions = store.getActions();
      expect(returnActions.length).toBe(1);
      expect(returnActions).toEqual(expectedActions);
    });
  });

  it("calls signup admin request if fetch was successful", () => {
    const store = mockStore({});
    fetchMocker("https://bookamealbk.herokuapp.com/api/v2/auth/admins", {
      message: "Successfully signed up"
    });
    const expectedActions = expecteds(
        "ADMIN_SIGNUP",
        { message: "Successfully signed up" },
        "payload"
      );
    return store.dispatch(signAdmin(authData)).then(() => {
      const returnActions = store.getActions();
      expect(returnActions.length).toBe(1);
      expect(returnActions).toEqual(expectedActions);
    });
  });

  it("calls login admin request if fetch was successful", () => {
    const store = mockStore({});
    fetchMocker("https://bookamealbk.herokuapp.com/api/v2/auth/adminLogin", token);
    const expectedActions = expecteds(
        "ADMIN_LOGIN",
        { token: "8726347kwejhbfv238fu" },
        undefined,
        "token"
      );
    return store.dispatch(loginAdmin(authData)).then(() => {
      const returnedActions = store.getActions();
      expect(returnedActions).toEqual(expectedActions);
    });
  });

  it("calls edit admin request if fetch was successful", () => {
    const store = mockStore({});
    fetchMocker(
      "https://bookamealbk.herokuapp.com/api/v2/auth/manageAdmin",
      { message: "Edited" },
      "put"
    );
    const expectedActions = [
      {
        payload: { message: "Edited" },
        type: "ADMIN_EDIT"
      }
    ];
    return store.dispatch(editAdminInfo(authData)).then(() => {
      const returnedActions = store.getActions();
      expect(returnedActions.length).toBe(1);
      expect(returnedActions).toEqual(expectedActions);
    });
  });
});
