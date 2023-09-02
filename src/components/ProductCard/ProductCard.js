import { Avatar, Button, Card, Col } from "antd";
const { Meta } = Card;

const ProductCard = ({ product }) => {
  const style = {
    padding: "5px 0",
  };

  const { image, product_name } = product;
  return (
    <>
      <Col className="gutter-row" span={6}>
        <div style={style}>
          <Card
            style={{
              width: 300,
            }}
            cover={<img alt="example" src={image} />}
          >
            <Meta avatar={<Avatar src={image} />} title={product_name} />
            <br />
            <Button block>Add to curt ? show details</Button>
          </Card>
        </div>
      </Col>
    </>
  );
};

export default ProductCard;
