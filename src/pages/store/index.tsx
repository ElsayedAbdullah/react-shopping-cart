import { Col, Row } from "react-bootstrap";
import StoreItem from "../../components/StoreItem";
import items from "../../data/items";

const Store = () => {
  return (
    <div>
      <h1 className="pt-3">Store</h1>
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
        {items.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Store;
