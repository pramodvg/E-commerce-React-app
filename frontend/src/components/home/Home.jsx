import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import useProducts from './useProducts';
function Home() {
  const [loading, error, products] = useProducts();

  if (loading) {
    return <p>Loading..........</p>;
  }
  if (error) {
    return <p>Error 404</p>;
  }

  return (
    <div>
      <div className="container my-4">
        <div className="row">
          {products &&
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
