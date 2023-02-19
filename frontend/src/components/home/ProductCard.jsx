import React from "react";
import { NavLink } from "react-router-dom";
// import { Card, Button } from "react-bootstrap";
import { Button, Card, Image, Placeholder } from 'semantic-ui-react';
const ProductCard = ({ product, loading, onClick, showAddToCartButton }) => {
  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = '/Photos/placeholder-image.png';
  };
  return (
    <Card>
      {loading ? (
        <Placeholder>
          <Placeholder.Image rectangular />
        </Placeholder>
      ) : (
        <Image
          className="product_card_image"
          src={`http://localhost:8001/${product.image}`}
          onError={handleImageError}
        />
      )}

      <Card.Content>
        {loading ? (
          <Placeholder>
            <Placeholder.Header>
              <Placeholder.Line length="very short" />
              <Placeholder.Line length="medium" />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line length="short" />
              <Placeholder.Line length="medium" />
              <Placeholder.Line length="medium" />
            </Placeholder.Paragraph>
          </Placeholder>
        ) : (
          <>
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>{product.price}</Card.Meta>
            <Card.Description>{product.description}</Card.Description>
            <Card.Meta>{product.category}</Card.Meta>
            <Card.Meta>{product.discount}%</Card.Meta>
          </>
        )}
      </Card.Content>

      <Card.Content extra>
       { showAddToCartButton && (<Button disabled={loading} primary onClick={() => onClick(product)}>
          Add To Cart
        </Button>)}
      </Card.Content>
    </Card>
  );
};

export default ProductCard;

// <Card style={{ width: "18rem" }} >
//   <Card.Img variant="top" src={`http://localhost:8001/${product.image}`} onError={handleImageError}/>
//   <Card.Body>
//     <Card.Title>{product.productName}</Card.Title>
//     <Card.Text>{product.description}</Card.Text>
//     <Card.Text>Category: {product.category}</Card.Text>
//     <Card.Text>Price: {product.price}</Card.Text>
//     <Card.Text>Discount: {product.discount}%</Card.Text>
//     <Button variant="primary">Add to Cart</Button>
//   </Card.Body>
// </Card>
