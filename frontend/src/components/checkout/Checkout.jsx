import React from "react";
import Navigation from "../navigationBar/Navigation";
import CartSummery from "../Cart/CartSummery";
import cartItemsContext from "../UserContext";
import { useContext } from "react";
const Checkout = () => {
  const [cart, setCart] = useContext(cartItemsContext);
  const clearCart = () => {
    setCart([]);
  };
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div className="container col-md-6 mt-5">
        <CartSummery cartItems={cart} clearCart={clearCart} page="checkout" />
      </div>
    </>
  );
};
export default Checkout;
