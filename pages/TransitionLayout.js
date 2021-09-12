import { useState, useEffect } from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import styles from "../styles/Layout.module.css";

export default function TransitionLayout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");

  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <>
      <Header />

      <div
        className={`${styles.container} ${styles.content} ${styles[transitionStage]}`}
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          }
        }}
      >
        {displayChildren}
      </div>

      <Footer />
    </>
  );
}
