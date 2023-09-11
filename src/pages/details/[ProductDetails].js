import RootLayout from "@/components/Layouts/RootLayout";
import { useGetProductByIdQuery } from "@/redux/api/apiSlice";
import Rating from "@/shared/Rating/Rating";
import styles from "@/styles/ProductDetails.module.css";
import { Divider } from "antd";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const contentStyle = {
    color: "#001529",
    fontSize: "30px",
  };
  const router = useRouter();

  const { data} = useGetProductByIdQuery(
    router.query.ProductDetails
  );

console.log("data",typeof(data)

);


  return (
    <>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.col}>
                <div className={styles.row}>
                  <Divider
                    orientation="left"
                    orientationMargin="0"
                    style={contentStyle}
                  >
                    Image
                  </Divider>
                  <img  src={data?.image} key={data?._id} />
                  <Divider
                    orientation="left"
                    orientationMargin="0"
                    style={contentStyle}
                  >
                    Product Name
                  </Divider>
                  <h1>{data?.product_name}</h1>
                  <Divider
                    orientation="left"
                    orientationMargin="0"
                    style={contentStyle}
                  >
                    Description
                  </Divider>
                  <p>{data?.description}</p>

                  <Divider
                    orientation="left"
                    orientationMargin="0"
                    style={contentStyle}
                  >
                    Others Information
                  </Divider>
                  <p>Category: {data?.category}</p>
                  <p>Quantity: {data?.quantity}</p>
                  <p>Price: {data?.price}</p>
                  <p>average Rating: {data?.average_rating}</p>
                  <div className="">
                    <Rating rating={data?.rating} />
                  </div>

                  <Divider
                    orientation="left"
                    orientationMargin="0"
                    style={contentStyle}
                  >
                    Key_Features
                  </Divider>
                  <div className="">
                    <ol>
                      {data?.key_Features?.map((features, index) => (
                        <li key={index}>{features} </li>
                      ))}
                    </ol>
                  </div>

                  <Divider
                    orientation="left"
                    orientationMargin="0"
                    style={contentStyle}
                  >
                    Reviews
                  </Divider>
                  <div className="">
                    <ol>
                      {data?.reviews?.map((review, index) => (
                        <li key={index}>{review}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
    </>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
