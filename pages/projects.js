import Head from "next/head";
import styles from "../styles/Projects.module.css";
import Header from "../components/Header.js";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects - Berkin AKKAYA</title>
      </Head>
      <Header />
      Projects...
    </div>
  );
}
