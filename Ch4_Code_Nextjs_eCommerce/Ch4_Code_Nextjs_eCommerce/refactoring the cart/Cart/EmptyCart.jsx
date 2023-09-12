import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

const EmptyCart = ({ children }) => {
  return (
    <div className="empty-cart">
      <AiOutlineShopping size={150} />
      <p>Your shopping bag is empty</p>
      {children}
    </div>
  );
};

export default EmptyCart;
