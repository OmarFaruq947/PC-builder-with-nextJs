import styles from "@/styles/Home.module.css";
import { Layout, Menu } from "antd";
import Link from "next/link";
const { Header } = Layout;

const Navbar = () => {
  return (
    <>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              PC
            </Link>
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
          <Link href="/processor">
            <items
              style={{
                margin: "0px 15px",
              }}
            >
              CPU/Processor
            </items>
          </Link>

          <Link href="/motherboard">
            <items
              style={{
                margin: "0px 15px",
              }}
            >
              Motherboard
            </items>
          </Link>

          <Link href="/ram">
            <items
              style={{
                margin: "0px 15px",
              }}
            >
              RAM
            </items>
          </Link>

          <Link href="/powerSupply">
            <items
              style={{
                margin: "0px 15px",
              }}
            >
              Power Supply Unit
            </items>
          </Link>

          <Link href="/storageDevice">
            <items
              style={{
                margin: "0px 15px",
              }}
            >
              Storage Device
            </items>
          </Link>

          <Link href="/monitor">
            <items
              style={{
                margin: "0px 15px",
              }}
            >
              Monitor
            </items>
          </Link>

          <Link href="/others">
            <items
              style={{
                margin: "0px 15px",
              }}
            >
              Others
            </items>
          </Link>
          <Link href="/pcBuilder">
            <items
              style={{
                padding: "5px 8px",
                backgroundColor: "red",
              }}
            >
              Pc Builder
            </items>
          </Link>
        </Menu>
      </Header>
    </>
  );
};

export default Navbar;
