import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log("From Home", products);

  const cart = useSelector((state) => state.cart);

  console.log("Cart", cart);
  let content;

  // if (loading) {
  //   content = <p>Loading</p>;
  // }
  // if (error) {
  //   content = <p>Something went wrong</p>;
  // }

  // if (!loading && !error && products.length > 0) {
  //   content = products.map((product, index) => (
  //     <ProductCard product={product} key={index}></ProductCard>
  //   ));
  // }

  if (products.length > 0) {
    content = products?.map((product, index) => (
      <ProductCard product={product} key={index}></ProductCard>
    ));
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default Home;
