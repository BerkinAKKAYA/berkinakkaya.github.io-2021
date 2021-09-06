import Head from "next/head";
import "../styles/globals.css";
import TransitionLayout from "./TransitionLayout.js";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          media="screen"
          href="https://fontlibrary.org//face/fantasque-sans-mono"
          type="text/css"
        />
      </Head>

      <TransitionLayout>
        <Component {...pageProps} />
      </TransitionLayout>
    </>
  );
}

export default App;
