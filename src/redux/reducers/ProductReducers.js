import {
  FILTER_PRODUCTS,
  GET_DETAILS,
  GET_PRODUCTS,
  SEARCH_PRODUCTS,
} from "../types/ProductTypes";

const INITAL_STATE = {
  products: [],
  product: {},
  isLoading: false,
  error: "",
};

export const ProductReducers = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        product: action.payload,
        isLoading: false,
      };
    case SEARCH_PRODUCTS:
      return {
        state,
        products: action.payload,
      };
    case FILTER_PRODUCTS:
      return {
        state,
        products: action.payload,
      };
    default:
      return state;
  }
};
