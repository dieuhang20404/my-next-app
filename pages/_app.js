import "@/styles/globals.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  <Head>
    <title>My App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  return <Component {...pageProps} />;
}
