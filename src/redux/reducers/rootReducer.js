import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import ProductReducer from "./ProductReducer";

const rootReducer = combineReducers({
  product: ProductReducer,
  filter: filterReducer,
});

export default rootReducer;
