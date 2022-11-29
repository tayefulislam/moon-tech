import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  initailState,
  ProductReducer,
} from "../State/ProductState/ProductReducer";

const PRODUCT_CONTEXT = createContext();
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initailState);

  useEffect(() => {
    dispatch({ type: "FETCHING_START" });
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((products) =>
        dispatch({ type: "FETCHING_SUCCESS", payload: products })
      )
      .catch(() => {
        dispatch({ type: "FETCHING_ERROR" });
      });
  }, []);

  const value = {
    state,
    dispatch,
  };

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};

export default ProductProvider;
