import styles from "@/styles/Home.module.css";
import {
  FacebookFilled,
  GoogleSquareFilled,
  LinkedinFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Layout } from "antd";
import Link from "next/link";
const { Footer } = Layout;

const FooterPage = () => {
  return (
    <>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PC-builder
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://www.linkedin.com/in/md-omar-faruq-7458b819a/">
            <FacebookFilled />
          </Link>
          <Link href="https://www.linkedin.com/in/md-omar-faruq-7458b819a/">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://www.linkedin.com/in/md-omar-faruq-7458b819a/">
            <GoogleSquareFilled />
          </Link>
          <Link href="https://www.linkedin.com/in/md-omar-faruq-7458b819a/">
            <LinkedinFilled />
          </Link>
        </p>
        News Portal ©2023 Created by Programming Hero
      </Footer>
    </>
  );
};

export default FooterPage;
