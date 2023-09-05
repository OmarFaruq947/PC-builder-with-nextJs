import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/ProductCard/ProductCard";
import { useGetProductQuery } from "@/redux/api/apiSlice";
import CardLoader from "@/shared/Loader/CardLoader";
import { Row } from "antd";

const PowerSupply = () => {
  const {
    data: allPowerSupply,
    isError,
    isLoading,
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
  if (!isLoading && isError && allPowerSupply?.length === 0) {
    content = <h1> Data not founded ! </h1>;
  }
  if (!isLoading && !isError && allPowerSupply?.length > 0) {
    content = allPowerSupply.map((PowerSupply) => (
      <ProductCard key={PowerSupply.id} product={PowerSupply} />
    ));
  }

  return (
    <>
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
    </>
  );
};

export default PowerSupply;

PowerSupply.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
