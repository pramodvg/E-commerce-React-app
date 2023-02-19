import { useState } from 'react';
import ProductCard from './ProductCard';
import useProducts from './useProducts';
import Navigation from '../navigationBar/Navigation';
import { Card } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
function Home() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  !sessionStorage.getItem('isAuthenticated') && navigate('/');
  const [loading, error, products] = useProducts();

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(JSON.stringify([...cart, product]));
  };

  if (error) {
    return <p>Error 404</p>;
  }
  return (
    <div>
      <Navigation />
      <div className="container my-4">
        <div className="row">
          <Card.Group doubling itemsPerRow={4} stackable>
            {products.map((data, index) => {
              return (
                <ProductCard
                  product={data}
                  loading={loading}
                  key={index}
                  onClick={addToCart}
                />
              );
            })}
          </Card.Group>
        </div>
      </div>
    </div>
  );
}

export default Home;
