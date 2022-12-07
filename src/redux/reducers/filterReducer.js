import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/ProductActionsTypes";

const initialState = {
  filters: {
    brands: "",
    stock: "",
  },
  keyword: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BRAND:
      return {};

    case TOGGLE_STOCK:
      return {};
    default:
      return state;
  }
};

export default filterReducer;
