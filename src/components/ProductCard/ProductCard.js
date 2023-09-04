import Rating from "@/shared/Rating/Rating";
import { Avatar, Card, Col } from "antd";
import Link from "next/link";
const { Meta } = Card;

const ProductCard = ({ product }) => {
  const style = {
    padding: "5px 0",
  };

  const { image, product_name, category, price, quantity, rating, id } =
    product;
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
            <p>Category: {category}</p>
            <p>Price: {price}</p>
            <div>
              Status:{" "}
              {quantity ? (
                <span className="stock">In stock</span>
              ) : (
                <span className="soldOut">Sold out</span>
              )}
            </div>
            <Rating rating={rating} />
            <br />
            <Link href={`/details/${id}`} className="addToCartButton">
              Add to curt ? show details ⇾
            </Link>
          </Card>
        </div>
      </Col>
    </>
  );
};

export default ProductCard;
