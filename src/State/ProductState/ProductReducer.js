export const initailState = {
  loading: false,
  products: [],
  error: false,
  cart: [],
};

export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "FETCHING_START":
      return {
        ...state,
        loading: true,
        error: false,
      };

    case "FETCHING_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case "FETCHING_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
