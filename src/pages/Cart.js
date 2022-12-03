import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  // const {
  //   state: { loading, error, cart },
  // } = useProduct();
  // console.log(cart);
  let content;
  const cart = useSelector((state) => state.cart);

  // if (loading) {
  //   content = <p>Loading</p>;
  // }
  // if (error) {
  //   content = <p>Something went wrong</p>;
  // }

  // if (!loading && !error && cart.length > 0) {
  //   content = cart.map((product, index) => (
  //     <ProductCard product={product} key={index}></ProductCard>
  //   ));
  // }

  if (cart.length > 0) {
    content = cart?.map((product, index) => (
      <ProductCard product={product} key={index}></ProductCard>
    ));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default Cart;
