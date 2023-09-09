import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/ProductCard/ProductCard";
import { useGetProductQuery } from "@/redux/api/apiSlice";
import CardLoader from "@/shared/Loader/CardLoader";
import { Row } from "antd";

const Monitor = () => {
  
  const {
    data: monitors,
    isError,
    isLoading,
  } = useGetProductQuery("Monitor");

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
  if (!isLoading && isError && monitors?.length === 0) {
    content = <h1> Data not founded ! </h1>;
  }
  if (!isLoading && !isError && monitors?.length > 0) {
    content = monitors.map((monitor) => (
      <ProductCard key={monitor._id} product={monitor} />
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

export default Monitor;

Monitor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
