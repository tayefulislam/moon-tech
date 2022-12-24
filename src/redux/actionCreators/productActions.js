import {
  ADD_TO_CART,
  LOAD_PRODUCT,
  REMOVE_FROM_CART,
} from "../actionTypes/ProductActionsTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const loadProduct = (data) => {
  return {
    type: LOAD_PRODUCT,
    payload: data,
  };
};
