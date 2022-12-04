import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../actionTypes/productActionTypes";

const initialState = {
  cart: [],
};

export const productReducer = (state = initialState, action) => {
  const selectProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );

  //   console.log(selectProduct);
  switch (action.type) {
    case ADD_TO_CART:
      if (selectProduct) {
        const newCart = state.cart.filter(
          (product) => product._id !== action.payload._id
        );

        selectProduct.quantity += 1;

        return {
          ...state,
          cart: [...newCart, selectProduct],
        };
      }

      action.payload.quantity = 1;
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVE_FROM_CART:
      if (selectProduct.quantity > 1) {
        console.log(selectProduct);
        const newCart = state.cart.filter(
          (product) => product._id !== selectProduct._id
        );

        selectProduct.quantity -= 1;

        return {
          ...state,
          cart: [...newCart, selectProduct],
        };
      }

      const newCart = state.cart.filter(
        (product) => product._id !== action.payload._id
      );

      return {
        ...state,
        cart: [...newCart],
      };

    default:
      return state;
  }
};
