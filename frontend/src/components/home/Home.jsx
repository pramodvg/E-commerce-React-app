import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import Navigation from './Navigation';
import axios from '../../axios';
function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the products data from the server
    axios
      .get('/products')
      .then((data) => setProducts(data.data))
      .catch((error) => console.error(error));
  }, []);

  function handleLogout() {
    // Perform logout action here
    navigate('/'); // Navigate to login page after logout
  }

  return (
    <div>
      <Navigation handleLogout={handleLogout} />
      <div className="container my-4">
        <div className="row">
          {
            products.map((data) => {
              return (
                <div className=".col-lg-3 col-md-3 col-sm-6 col-12">
                  <ProductCard product={data} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
