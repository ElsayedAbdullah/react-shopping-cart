import { Button, Card } from "react-bootstrap";
import { IStoreItem } from "../interface";
import formatCurrency from "../utils";
import { useShoppingCart } from "../context/ShoppingCartContext";

const StoreItem = ({ id, imgUrl, name, price }: IStoreItem) => {
  const {
    getCartItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart,
  } = useShoppingCart();
  const quantity = getCartItemsQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        alt={name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex flex-wrap justify-content-between align-items-baseline mb-4">
          <span className="fs-4">{name}</span>
          <span className="text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <>
              <Button
                onClick={() => increaseCartQuantity(id)}
                className="w-100"
              >
                Add to Cart
              </Button>
            </>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button
                  style={{ width: "30px" }}
                  size="sm"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity} </span> in cart
                </div>
                <Button
                  style={{ width: "30px" }}
                  size="sm"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeItemFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
