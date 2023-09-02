import FooterPage from "@/shared/FooterPage";
import Navbar from "@/shared/Navbar";
import { Layout } from "antd";
const { Content } = Layout;

const RootLayout = ({ children }) => {
  return (
    <Layout>
      <Navbar />
      {/* style={{
        textAlign: "center",
        marginTop: "25%",
      }} */}
      <Content
        style={{
          marginTop: "2%",
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <FooterPage />
    </Layout>
  );
};
export default RootLayout;
