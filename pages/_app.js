import "../styles/globals.css";
import TransitionLayout from "./TransitionLayout.js";

function App({ Component, pageProps }) {
  return (
    <TransitionLayout>
      <Component {...pageProps} />
    </TransitionLayout>
  );
}

export default App;
