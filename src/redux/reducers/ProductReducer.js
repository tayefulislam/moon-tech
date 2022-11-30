import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../actionTypes/ProductActionsTypes";

const initialState = {
  cart: [],
};
console.log("from reducer", initialState);
const ProductReducer = (state = initialState, action) => {
  // console.log(action.payload);

  const selectedProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );
  console.log("selectedProduct", selectedProduct);

  switch (action.type) {
    case ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product._id !== action.payload._id
        );
        selectedProduct.quantity += 1;
        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_FROM_CART: {
      if (selectedProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product._id !== action.payload._id
        );
        selectedProduct.quantity -= 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    }
    default:
      return state;
  }
};

export default ProductReducer;
