import React from "react";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  return (
    <div>
      <div className="border border-solid border-slate-400 p-4 rounded-md text-center max-h-min">
        <Link to={`/product/${props.product.id}`}>
          <img
            src={props.product.images}
            className="aspect-square w-full object-cover mb-3"
            alt=""
          />
        </Link>
        <Link to={`/product/${props.product.id}`}>
          <h5 className="text-lg font-bold mb-3">{props.product.name}</h5>
        </Link>
        <div className="text-base font-bold text-black mb-3">
          $ {props.product.price}
        </div>
        <p className="mb-3">{props.product.description}</p>
        <Link
          to={`/product/${props.product.id}`}
          className="px-6 py-3 bg-blue-500 border-0 text-white mt-8 block"
        >
          Go to Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
