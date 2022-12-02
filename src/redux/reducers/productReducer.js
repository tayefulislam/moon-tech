import { ADD_TO_CART } from "../actionTypes/productActionTypes";

const initialState = {
  cart: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};
