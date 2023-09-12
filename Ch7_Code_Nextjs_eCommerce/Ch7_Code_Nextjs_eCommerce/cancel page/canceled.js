import React, { useEffect } from "react";
import Link from "next/link";

import { useStateContext } from "../context/StateContext";

const Canceled = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className="canceled-wrapper">
      <div className="canceled">
        <h2>Your order is canceled - you have not been charged.</h2>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Canceled;
