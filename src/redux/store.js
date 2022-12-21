import { createStore, applyMiddleware } from "redux";
// import ProductReducer from "./reducers/ProductReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger";
import cartCounter from "./middleware/cartCounter";
import thunk from "redux-thunk";
//  composeWithDevTools()
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter, thunk, logger))
);

export default store;
