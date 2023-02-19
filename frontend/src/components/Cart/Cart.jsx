import React, { useContext } from 'react';
import Navigation from '../navigationBar/Navigation';

import { Card } from 'semantic-ui-react';
import ProductCard from '../home/ProductCard';
const Cart = () => {
  const mcart = localStorage.getItem('cart');
  console.log(JSON.stringify(mcart));
  const cart = JSON.parse(mcart || '[]');
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
