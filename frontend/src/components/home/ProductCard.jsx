import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product }) => {
     const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = "/Photos/placeholder-image.png";
  };
  return (
    <Card style={{ width: "18rem" }} >
      <Card.Img variant="top" src={`http://localhost:8001/${product.image}`} onError={handleImageError}/>
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Category: {product.category}</Card.Text>
        <Card.Text>Price: {product.price}</Card.Text>
        <Card.Text>Discount: {product.discount}%</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
