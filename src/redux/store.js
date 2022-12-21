import { createStore, applyMiddleware } from "redux";
// import ProductReducer from "./reducers/ProductReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger";
import cartCounter from "./middleware/cartCounter";
//  composeWithDevTools()
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter))
);

export default store;
