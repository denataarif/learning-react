import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequest";
const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);
  const URL = `https://63fdc63acd13ced3d7be3fa3.mockapi.io/Mockdata?page=${currentPage}&limit=12`;
  let data = useAxiosGet(URL);

  let content = null;

  if (data.error) {
    content = <p>there was an error please refresh or try again latter</p>;
  }

  if (data.loading) {
    content = <Loading />;
  }

  if (data.data) {
    content = (
      <>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
          {data.data.map((items) => (
            <div className="" key={items.id}>
              <ProductCard product={items} />
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-3">
          <Link
            href="#"
            onClick={() => paginateBack()}
            className="inline-flex items-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </Link>
          <p className="font-bold mx-3">{currentPage}</p>
          <Link
            href="#"
            onClick={() => paginateFront()}
            className="inline-flex items-center w-full px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </Link>
        </div>
      </>
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
