import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";
import getStripe from "../../lib/getStripe";
import toast from "react-hot-toast";
import { eUSLocale } from "../../lib/utils";
import EmptyCart from "./Cart/EmptyCart";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <EmptyCart>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </EmptyCart>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                <button
                  type="button"
                  className="remove-item"
                  onClick={() => onRemove(item)}
                >
                  <TiDeleteOutline />
                </button>
                <img
                  src={urlFor(item?.image[0])}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div>
                    <span>{item.name}</span>
                    <span>
                      {item.quantity} @ ${eUSLocale(item.price)}
                    </span>
                  </div>
                  <p className="quantity-desc">
                    <span
                      className="minus"
                      onClick={() => toggleCartItemQuantity(item._id, "dec")}
                    >
                      <AiOutlineMinus />
                    </span>
                    <span
                      className="plus"
                      onClick={() => toggleCartItemQuantity(item._id, "inc")}
                    >
                      <AiOutlinePlus />
                    </span>
                  </p>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <span>${eUSLocale(totalPrice)}</span>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
