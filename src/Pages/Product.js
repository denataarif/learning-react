import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { useAxiosGet } from "../Hooks/HttpRequest";
const Product = () => {

  let {id} = useParams()
  const URL = `https://63fdc63acd13ced3d7be3fa3.mockapi.io/Mockdata/${id}`;
  let products = useAxiosGet(URL)


  let content = null

  if(products.error){
    content = <p>there was an error please refresh or try again latter</p>
  }

  if(products.loading){
    content = <Loading/>
  }

    if(products.data){
        return(
            content = 
            <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-3">{products.data.name}</h1>
              <div>
                  <img
                      src={products.data.images}
                      alt='gambar prduct'
                  />
              </div>
              <div className="font-bold text-xl mb-3">
                  $ {products.data.price}
              </div>
              <div>
                  {products.data.description}
              </div>
          </div>
        )
    }  
  
  return (
    <div>
        {content}
    </div>
  );
};

export default Product;
