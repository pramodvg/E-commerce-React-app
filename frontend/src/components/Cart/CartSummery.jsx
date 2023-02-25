import React from "react";
import { Divider, Segment, Card, Icon, Button, Label } from "semantic-ui-react";
import { useNavigate, useParams } from "react-router-dom";
const CartSummery = ({ cartItems, clearCart }) => {
  const totalPrice = cartItems.reduce((acc, cur) => acc + cur.price, 0);
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Card>
      <Segment>
        <Button compact size="small" floated="right" onClick={clearCart}>
          Clear
        </Button>
        Your Cart Summery
      </Segment>
      <Card.Content>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Icon name="cart" />
          {cartItems.length} Items
        </div>
        <Segment>
          {cartItems.map((data) => {
            return (
              <>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {data.productName}
                  <p>{data.price}</p>
                </div>
                <Divider fitted />
              </>
            );
          })}
        </Segment>
      </Card.Content>
      <Card.Content extra>
        <Segment>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Icon name="dollar" />
            <strong>${Math.round(totalPrice)} Total</strong>
          </div>
        </Segment>
      </Card.Content>

      {{ id } === "cart" ? (
        <Card.Content className="ui fluid button" textAlign="center">
          <Button
            primary
            onClick={() => {
              navigate("/checkout");
            }}
          >
            <Icon name="cart" />
            Check Out
          </Button>
        </Card.Content>
      ) : (
        <Card.Content className="ui fluid button" textAlign="center">
          <Button primary>Pay Now</Button>
        </Card.Content>
      )}
    </Card>
  );
};

export default CartSummery;
