import { Button } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
const NotFoundPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);

  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>PH-News-404 Not Found</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Hallow what is your name </h2>
      <Link href="/">
        <Button>Back To Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
