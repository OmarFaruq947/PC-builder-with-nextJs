import ProductCard from "@/components/ProductCard/ProductCard";
import {
  useGetPowerSupplyQuery,
  useGetProductQuery,
} from "@/redux/api/apiSlice";
import CardLoader from "@/shared/Loader/CardLoader";
import { Row } from "antd";

const PowerSupply = () => {
  const {
    data: Powers,
    isLoading,
    isError,
  } = useGetProductQuery("PowerSupply");

  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <>
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <h1> There was an error</h1>;
  }
  if (!isLoading && isError && Powers?.length === 0) {
    content = <h1> Data not founded ! </h1>;
  }
  if (!isLoading && !isError && Powers?.length > 0) {
    content = Powers.map((Power) => (
      <ProductCard key={Power.id} product={Power} />
    ));
  }

  return (
    <div>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {content}
      </Row>
    </div>
  );
};

export default PowerSupply;
