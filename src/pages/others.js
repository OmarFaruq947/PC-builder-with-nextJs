import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/ProductCard/ProductCard";
import { useGetOthersQuery } from "@/redux/api/apiSlice";
import CardLoader from "@/shared/Loader/CardLoader";
import { Row } from "antd";

const Others = () => {
  const { data: distProducts, isError, isLoading } = useGetOthersQuery();
  console.log(distProducts);

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
  if (!isLoading && isError && distProducts?.length === 0) {
    content = <h1> Data not founded ! </h1>;
  }
  if (!isLoading && !isError && distProducts?.length > 0) {
    content = distProducts.map((distProduct) => (
      <ProductCard key={distProduct.id} product={distProduct} />
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

export default Others;

Others.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
