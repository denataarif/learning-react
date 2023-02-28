import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequest";
const Home = () => {

  const URL = `https://63fdc63acd13ced3d7be3fa3.mockapi.io/Mockdata`;

    let data = useAxiosGet(URL)

  let content = null;

  if (data.error) {
    content = <p>there was an error please refresh or try again latter</p>;
  }

  if (data.loading) {
    content = <Loading />;
  }

  if (data.data) {
    content = (
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 '>
        {data.data.map((items) => (
          <div className="" key={items.id}>
            <ProductCard product={items} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Best Seller</h1>
      {content}
    </div>
  );
};

export default Home;
