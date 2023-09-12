import React from "react";
import Link from "next/link";

import { urlFor } from "../../lib/client";
import { ArticleJsonLd, NextSeo } from "next-seo";

const Product = ({
  product: { image, name, slug, price, description, sku },
}) => {
  return (
    <>
      <NextSeo
        title={`${name} - Macaron Magic`}
        description="Great tasting home-made macarons"
        openGraph={{
          title: "Product Page",
          site_name: "Mangez Macaron",
          description: `Learn more about ${name}`,
          url: `http://localhost:3000/product/${name}`,
        }}
      />

      <ArticleJsonLd
        type="Product"
        name={name}
        url={`http://localhost:3000/product/${name
          .replace(" ", "-")
          .toLowerCase()}`}
        images={[
          "https://cdn.sanity.io/images/k4mv79ht/production/8b05c037077d88961edf289dc58448ee9442d8a1-456x456.png",
          "https://cdn.sanity.io/images/k4mv79ht/production/8b05c037077d88961edf289dc58448ee9442d8a1-456x456.png",
        ]}
        headline="Get great tasting homemade macarons here in the Amber Valley"
        description={description}
        sku={sku}
        datePublished="2023-04-23T18:52:13Z"
        dateModified="2023-04-23T18:52:13Z"
        authorName="Alex Libby"
      />

      <div>
        <Link href={`/product/${slug.current}`}>
          <div className="product-card">
            <figure className="fliptile">
              <img
                src={urlFor(image && image[0])}
                width={250}
                height={250}
                className="product-image"
              />
              <figcaption>
                <p className="product-name">{name}</p>
              </figcaption>
            </figure>
            <p className="product-name">{name}</p>
            <p className="product-price">
              $
              {price.toLocaleString("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Product;
