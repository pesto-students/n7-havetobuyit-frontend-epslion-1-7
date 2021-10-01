import React from "react";
import { DefaultProductsLimit, SERVER_URL } from "../../config/constants";
import { useGet } from "../../hooks/fetch.hooks";
import { ProductCard } from "./ProductCard";

interface ProductListViewProps {
  children?: any;
  products: any[];
}

export const ProductListView: React.FC<ProductListViewProps> = (props) => {
    console.log(props.products.length)
  return (
    <>
      {props.products.slice(4, 5).map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </>
  );
};
