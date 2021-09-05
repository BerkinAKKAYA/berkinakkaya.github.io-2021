import Head from "next/head";
import styles from "../styles/Contact.module.css";
import Header from "../components/Header.js";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - Berkin AKKAYA</title>
      </Head>
      <Header />
      Contact...
    </div>
  );
}
