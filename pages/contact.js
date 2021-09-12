import Head from "next/head";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact - Berkin AKKAYA</title>
      </Head>

      <div className={styles.container}>
        <p>
          <img src="/mail.svg" alt="Mail Icon" />
          berkin_akkaya@hotmail.com
        </p>
        <p>
          <img src="/phone.svg" alt="Phone Icon" />
          +90 538 284 8787
        </p>
      </div>
    </div>
  );
}
