import ProductCard from "@/components/ProductCard/ProductCard";
import { useGetProductQuery } from "@/redux/api/apiSlice";
import CardLoader from "@/shared/Loader/CardLoader";
import { Row } from "antd";

const Oaters = () => {
  const { data: Oaters, isLoading, isError } = useGetProductQuery("Others");

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
  if (!isLoading && isError && Oaters?.length === 0) {
    content = <h1> Data not founded ! </h1>;
  }
  if (!isLoading && !isError && Oaters?.length > 0) {
    content = Oaters.map((Oater) => (
      <ProductCard key={Oater._id} product={Oater} />
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

export default Oaters;
