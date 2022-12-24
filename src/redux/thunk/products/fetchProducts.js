import { loadProduct } from "../../actionCreators/productActions";

const loadProductsData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();

    // console.log("fetchProducts", data);
    if (data.length) {
      dispatch(loadProduct(data));
    }
  };
};

export default loadProductsData;

// comments
// fetch data using thunk
// ref link : https://github.com/reduxjs/redux-thunk
