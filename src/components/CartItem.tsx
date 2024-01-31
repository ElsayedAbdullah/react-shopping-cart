import { Stack, Button } from "react-bootstrap";
import formatCurrency from "../utils";
import items from "../data/items";
import { ICartItem } from "../interface";
import { useShoppingCart } from "../context/ShoppingCartContext";

const CartItem = ({ id, quantity }: ICartItem) => {
  const { removeItemFromCart } = useShoppingCart();
  const item = items.find((i) => i.id === id);
  if (!item) return;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt="cart-img"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeItemFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
