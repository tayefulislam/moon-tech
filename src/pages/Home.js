import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  const products = useSelector((state) => state);
  console.log(products);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {data?.map((product, index) => (
        <ProductCard product={product} key={index}></ProductCard>
      ))}
    </div>
  );
};

export default Home;
