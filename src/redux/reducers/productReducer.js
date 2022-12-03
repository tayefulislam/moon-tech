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
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVE_FROM_CART:
      //   if (selectProduct) {
      //     const newCart = state.cart.filter(
      //       (product) => product._id !== selectProduct._id
      //     );

      //     return {
      //       ...newCart,
      //       cart: [newCart],
      //     };
      //   }
      return {
        ...state,
        cart: [...state.cart],
      };

    default:
      return state;
  }
};
