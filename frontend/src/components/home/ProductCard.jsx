import React from "react";
import { Button, Card, Image, Placeholder } from "semantic-ui-react";

const ProductCard = ({
  product,
  loading,
  onClick,
  showAddToCartButton,
  removeProduct,
}) => {
  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = "/Photos/placeholder-image.png";
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

      <Card.Content textAlign="center" extra>
        {showAddToCartButton ? (
          <Button disabled={loading} primary onClick={() => onClick(product)}>
            Add To Cart
          </Button>
        ) : (
          <Button
            disabled={loading}
            primary
            onClick={() => removeProduct(product)}
          >
            Remove To Cart
          </Button>
        )}
      </Card.Content>
    </Card>
  );
};

export default ProductCard;
