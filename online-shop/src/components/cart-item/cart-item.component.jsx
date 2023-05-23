import React from "react";

const CartItem = ({ CartItem }) => {
  const { name, quantity } = CartItem;
  console.log(CartItem);
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
