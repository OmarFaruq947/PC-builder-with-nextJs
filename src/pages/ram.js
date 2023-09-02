import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/ProductCard/ProductCard";
import { useGetRamQuery } from "@/redux/api/apiSlice";
import CardLoader from "@/shared/Loader/CardLoader";
import { Row } from "antd";

const Ram = () => {
  const { data: allRams, isError, isLoading } = useGetRamQuery();

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
  if (!isLoading && isError && allRams?.length === 0) {
    content = <h1> Data not founded ! </h1>;
  }
  if (!isLoading && !isError && allRams?.length > 0) {
    content = allRams.map((ram) => <ProductCard key={ram.id} product={ram} />);
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

export default Ram;

Ram.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
