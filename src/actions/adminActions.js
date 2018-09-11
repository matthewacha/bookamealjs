import * as constants from "./types";

let optionFetch = (method, body = undefined, headers) => {
  if (method === "PUT" || method === "POST") {
    return {
      method: method,
      body: body,
      headers: headers
    };
  } else {
    return {
      method: method,
      headers: headers
    };
  }
};

export const PostMeal = mealData => dispatch => {
  let options = optionFetch("POST", mealData, {
    "content-type": "application/json",
    K_access_token: localStorage.getItem("K_access_token")
  });
  return fetch(`http://127.0.0.1:5000/api/v2/meals/`, options)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: constants.ADD_MEAL,
        message: data
      })
    );
};

export const EditMeal = (mealData, mealID) => dispatch => {
  let options = optionFetch("PUT", mealData, {
    "content-type": "application/json",
    K_access_token: localStorage.getItem("K_access_token")
  });
  return fetch(`http://127.0.0.1:5000/api/v2/meals/${mealID}`, options)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: constants.EDIT_MEAL,
        message: data
      })
    );
};

export const DeleteMeal = mealId => dispatch => {
  if (mealId !== "undefined") {
    let options = {
      method: "DELETE",
      headers: {
        K_access_token: localStorage.getItem("K_access_token")
      }
    };
    return fetch(`http://127.0.0.1:5000/api/v2/meals/${mealId}`, options)
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: constants.DELETE_MEAL,
          message: data
        })
      );
  }
};

export const DeleteMenuMeal = (mealId, menuName) => dispatch => {
  let options = optionFetch("DELETE", undefined, {
    K_access_token: localStorage.getItem("K_access_token")
  });
  return fetch(
    `http://127.0.0.1:5000/api/v2/menus/${menuName}/${mealId}`,
    options
  )
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: constants.DELETE_MENU_MEAL,
        message: data
      })
    );
};
export const GetMeal = mealId => dispatch => {
  let options = optionFetch("GET", undefined, {
    K_access_token: localStorage.getItem("K_access_token")
  });
  return fetch(`http://127.0.0.1:5000/api/v2/meals/${mealId}`, options)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: constants.GET_MEAL,
        payload: data
      })
    );
};

export const AddToMenu = (mealId, menuName) => dispatch => {
  let options = optionFetch("POST", menuName, {
    "content-type": "application/json",
    K_access_token: localStorage.getItem("K_access_token")
  });
  return fetch(`http://127.0.0.1:5000/api/v2/menus/${mealId}`, options)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: constants.ADD_TO_MENU,
        message: data
      })
    );
};

export const GetMenu = MenuName => dispatch => {
  let options = optionFetch("GET", undefined, {
    K_access_token: localStorage.getItem("K_access_token")
  });
  return fetch(`http://127.0.0.1:5000/api/v2/getmenus/${MenuName}`, options)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: constants.GET_MENU,
        payload: data
      })
    );
};
export const GetMenus = () => dispatch => {
  let options = optionFetch("GET", undefined, {
    K_access_token: localStorage.getItem("K_access_token")
  });
  return fetch(`http://127.0.0.1:5000/api/v2/menus/`, options)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: constants.GET_MENUS,
        payload: data
      })
    );
};
export const GetMeals = () => dispatch => {
  let options = optionFetch("GET", undefined, {
    K_access_token: localStorage.getItem("K_access_token")
  });
  return fetch(`http://127.0.0.1:5000/api/v2/meals/`, options)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: constants.FETCH_MEALS,
        mealsList: data
      })
    );
};

export const getCaterer = catererName => dispatch => {
  let options = optionFetch("GET", undefined, {
    access_token: localStorage.getItem("access_token")
  });
  return fetch(`http://127.0.0.1:5000/api/v2/caterer/${catererName}`, options)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: constants.GET_CATERER,
        caterers: data
      })
    );
};

export const getCatererMenu = catererId => dispatch => {
  let options = optionFetch("GET", undefined, {
    access_token: localStorage.getItem("access_token")
  });
  return fetch(`http://127.0.0.1:5000/api/v2/menus/${catererId}`, options)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: constants.GET_CATERER_MENU,
        catererMenu: data
      })
    );
};

export const makeOrder = (menuId, mealId) => dispatch => {
  let options = optionFetch("POST", undefined, {
    "content-type": "application/json",
    access_token: localStorage.getItem("access_token")
  });
  return fetch(
    `http://127.0.0.1:5000/api/v2/orders/${menuId}/${mealId}`,
    options
  )
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: constants.MAKE_ORDER,
        message: data
      })
    );
};

export const getOrders = () => dispatch => {
  let options = optionFetch("GET", undefined, {
    "content-type": "application/json",
    access_token: localStorage.getItem("access_token")
  });
  return fetch(`http://127.0.0.1:5000/api/v2/orders`, options)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: constants.GET_ORDERS,
        userOrders: data
      })
    );
};

export const getAdminOrders = () => dispatch => {
  let options = optionFetch("GET", undefined, {
    K_access_token: localStorage.getItem("K_access_token")
  });
  return fetch(`http://127.0.0.1:5000/api/v2/getorder/admin`, options)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: constants.ADMIN_GET_ORDERS,
        Orders: data
      })
    );
};

export const userEditStatus = (status, orderId) => dispatch => {
  let options = optionFetch("PUT", JSON.stringify(status), {
    "content-type": "application/json",
    access_token: localStorage.getItem("access_token")
  });
  return fetch(
    `http://127.0.0.1:5000/api/v2/order/user_status/${orderId}`,
    options
  )
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: constants.USER_EDIT_ORDERS,
        userOrders: data
      })
    );
};

export const adminEditStatus = (status, orderId) => dispatch => {
  let options = optionFetch("PUT", status, {
    "content-type": "application/json",
    K_access_token: localStorage.getItem("K_access_token")
  });
  return fetch(
    `http://127.0.0.1:5000/api/v2/order/admin_status/${orderId}`,
    options
  )
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: constants.ADMIN_EDIT_ORDERS,
        userOrders: data
      })
    );
};
