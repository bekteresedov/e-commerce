import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CardReducers } from "./reducers/CardReducers";
import { CategoryReducers } from "./reducers/CategoryReducers";
import { ProductReducers } from "./reducers/ProductReducers";

const reducers = combineReducers({
  products: ProductReducers,
  cards: CardReducers,
  categories: CategoryReducers,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
