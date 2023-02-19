import React, { useState, useEffect } from "react";
import Navigation from "../navigationBar/Navigation";

import { Card } from "semantic-ui-react";
import ProductCard from "../home/ProductCard";
const Cart = () => {
  const mcart = localStorage.getItem("cart");
  console.log(JSON.stringify(mcart));
  const [cart, setCart] = useState(JSON.parse(mcart || "[]"));
  // const cart = JSON.parse(mcart || "[]");

  // useEffect(() => {
  //   const storedCart = localStorage.getItem("cart");
  //   const parsedCart = storedCart ? JSON.parse(storedCart) : [];

  //   if (cart.length > 0) {
  //     const updatedCart = [...parsedCart, ...cart];
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   }
  // }, [cart]);
  const removeFromCart = (product) => {
    console.log(product);
    setCart(cart.filter((item) => item._id !== product._id));
  };
  return (
    <>
      <Navigation />
      <div className="container my-4">
        <div className="row">
          <Card.Group doubling itemsPerRow={4} stackable>
            {cart.map((data, index) => {
              return (
                <ProductCard
                  product={data}
                  key={index}
                  showAddToCartButton={false}
                  showRemoveToCartButton={true}
                  removeProduct={removeFromCart}
                />
              );
            })}
          </Card.Group>
        </div>
      </div>
    </>
  );
};

export default Cart;
