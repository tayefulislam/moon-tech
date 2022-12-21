import { ADD_TO_CART } from "../actionTypes/ProductActionsTypes";

const cartCounter = (store) => (next) => (action) => {
  const state = store.getState();

  const cart = state.product.cart;
  console.log(state.product.cart.length);
  if (action.type === ADD_TO_CART) {
    const newAction = {
      ...action,
      payload: { ...action.payload, cartPosition: cart.length },
    };

    return next(newAction);
  }

  return next(action);
};

export default cartCounter;
