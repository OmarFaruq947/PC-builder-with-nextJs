import ProductCard from "@/components/ProductCard/ProductCard";
import { useGetProductQuery } from "@/redux/api/apiSlice";
import CardLoader from "@/shared/Loader/CardLoader";
import { Row } from "antd";

const Storage = () => {
  const {
    data: Storages,
    isLoading,
    isError,
  } = useGetProductQuery("storageDevice");

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
  if (!isLoading && isError && Storages?.length === 0) {
    content = <h1> Data not founded ! </h1>;
  }
  if (!isLoading && !isError && Storages?.length > 0) {
    content = Storages.map((Storage) => (
      <ProductCard key={Storage._id} product={Storage} />
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

export default Storage;
