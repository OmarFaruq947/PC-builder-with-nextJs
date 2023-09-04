import ProductCard from "@/components/ProductCard/ProductCard";
import { useGetProductQuery } from "@/redux/api/apiSlice";
import CardLoader from "@/shared/Loader/CardLoader";
import { Row } from "antd";

const Monitor = () => {
  const { data: Monitors, isLoading, isError } = useGetProductQuery("Monitor");

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
  if (!isLoading && isError && Monitors?.length === 0) {
    content = <h1> Data not founded ! </h1>;
  }
  if (!isLoading && !isError && Monitors?.length > 0) {
    content = Monitors.map((Monitor) => (
      <ProductCard key={Monitor.id} product={Monitor} />
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

export default Monitor;
