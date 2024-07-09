import React from "react";
import ProductCardDemo from "../components/layout/Prodctcard";



type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <h1>
        Enter some demo (static cards) here to get a brief about projects... - JAY
      </h1>
      <ProductCardDemo />
    </div>
  );
};

export default page;
