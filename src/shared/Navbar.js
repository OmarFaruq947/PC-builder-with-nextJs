import styles from "@/styles/Home.module.css";
import { Layout, Menu } from "antd";
import Link from "next/link";
const { Header } = Layout;

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

import { signOut, useSession } from "next-auth/react";

const items = [
  {
    key: "1",
    type: "group",
    label: "Accessory Category",
    children: [
      {
        key: "1-1",
        label: (
          <Link href="/processor">
            <items
              style={{
                margin: "0px 15px",
              }}
            >
              CPU/Processor
            </items>
          </Link>
        ),
      },

      {
        key: "1-2",
        label: (
          <Link href="/motherboard">
            <items
              style={{
                margin: "0px 15px",
              }}
            >
              Motherboard
            </items>
          </Link>
        ),
      },

      {
        key: "1-3",
        label: (
          <Link href="/ram">
            <items
              style={{
                margin: "0px 15px",
              }}
            >
              RAM
            </items>
          </Link>
        ),
      },
      {
        key: "1-4",
        label: (
          <Link href="/powerSupply">
            <items
              style={{
                margin: "0px 15px",
              }}
            >
              Power Supply Unit
            </items>
          </Link>
        ),
      },
      {
        key: "1-5",
        label: (
          <Link href="/storageDevice">
            <items
              style={{
                margin: "0px 15px",
              }}
            >
              Storage Device
            </items>
          </Link>
        ),
      },
      {
        key: "1-6",
        label: (
          <Link href="/monitor">
            <items
              style={{
                margin: "0px 15px",
              }}
            >
              Monitor
            </items>
          </Link>
        ),
      },
      {
        key: "1-7",
        label: (
          <Link href="/others">
            <items
              style={{
                margin: "0px 15px",
              }}
            >
              Others
            </items>
          </Link>
        ),
      },
    ],
  },

  // {
  //   key: "2",
  //   label: "sub menu",
  //   children: [
  //     {
  //       key: "2-1",
  //       label: "3rd menu item",
  //     },
  //     {
  //       key: "2-2",
  //       label: "4th menu item",
  //     },
  //   ],
  // },
];

const Navbar = () => {
  const { data: session } = useSession();
  console.log("session", session);
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
              {session?.user ? <span>PC | {session?.user?.email}</span> : "PC"}
            </Link>
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
          {/* dropdown menu */}

          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Category
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

          <Link href="/https://omarfaruqmebd.netlify.app/" target="_blank">
            <items
              style={{
                margin: "0px 15px",
              }}
            >
              Developers
            </items>
          </Link>

          {session?.user ? (
            <Link href="" onClick={() => signOut()}>
              <items
                style={{
                  margin: "0px 15px",
                  padding: "5px 8px",
                  backgroundColor: "red",
                }}
              >
                Sign out
              </items>
            </Link>
          ) : (
            <Link href="/login">
              <items
                style={{
                  margin: "0px 15px",
                  padding: "5px 8px",
                  backgroundColor: "green",
                }}
              >
                Login
              </items>
            </Link>
          )}

          <Link href="/pcBuilder">
            <items
              style={{
                padding: "5px 8px",
                backgroundColor: "#FF9D08",
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
