import Head from "next/head";

import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <>
      <Head>
        <title>CT Shame</title>
        <meta
          name="description"
          content="Crypto Twitter's home for bad takes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>Hello CT</main>
    </>
  );
}

export default withAuthenticator(Home);
