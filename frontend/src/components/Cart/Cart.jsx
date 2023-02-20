import React, {useContext } from 'react';
import Navigation from '../navigationBar/Navigation';
import { Card } from 'semantic-ui-react';
import ProductCard from '../home/ProductCard';
import CartSummery from './CartSummery';
import cartItemsContext from '../UserContext';
const Cart = () => {
  const [cart, setCart] = useContext(cartItemsContext);
  
  // const mcart = localStorage.getItem('cart');
  // console.log(JSON.stringify(mcart));
 // const [cart, setCart] = useState(JSON.parse(mcart || '[]'));

  // useEffect(() => {
  //   if (cart.length > 0) {
  //     const updatedCart = [...cart];
  //     localStorage.setItem('cart', JSON.stringify(updatedCart));
  //   }
  // }, [cart]);
    const clearCart = () => {
      setCart([]);
    };
  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item._id !== product._id));
  };
  return (
    <>
      <Navigation />
      <div className="container my-4">
        <div className="row">
          <div class="col-8">
            <Card.Group doubling itemsPerRow={3} stackable>
              {cart.map((data, index) => {
                return (
                  <ProductCard
                    product={data}
                    key={index}
                    showAddToCartButton={false}
                    removeProduct={removeFromCart}
                  />
                );
              })}
            </Card.Group>
          </div>
          <div class="col-4">
            <CartSummery cartItems={cart} clearCart={clearCart} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
