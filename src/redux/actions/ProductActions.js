import {
  ADD_LIKE_PRODUCT,
  FILTER_PRODUCTS,
  GET_DETAILS,
  GET_PRODUCTS,
  SEARCH_PRODUCTS,
} from "../types/ProductTypes";

export const productsAction = () => async (dispatch) => {
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  dispatch({ type: GET_PRODUCTS, payload: data });
};

export const productActionDetails = (id) => async (dispatch) => {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );
  dispatch({ type: GET_DETAILS, payload: data });
};

export const productsActionSearch = (keyword) => async (dispatch) => {
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  dispatch({
    type: SEARCH_PRODUCTS,
    payload: data.filter((d) => d.title.toUpperCase().includes(keyword.toUpperCase())),
  });
};

export const productsActionFilter = (keyword) => async (dispatch) => {
  const data = await fetch(`https://fakestoreapi.com/products/category/${keyword}`).then(
    (res) => res.json()
  );
  dispatch({
    type: FILTER_PRODUCTS,
    payload: data,
  });
};


