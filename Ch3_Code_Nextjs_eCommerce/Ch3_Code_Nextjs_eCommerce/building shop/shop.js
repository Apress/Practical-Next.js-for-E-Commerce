import React from "react";
import { client } from "../../lib/client";

import { Product } from "../components";

const Shop = ({ products }) => (
  <div>
    <div className="products-heading">
      <h2>Shop</h2>
      <p>Browse for products</p>
    </div>
    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  </div>
);

export const getServerSideProps = async ({ req, res }) => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: { products },
  };
};

export default Shop;
