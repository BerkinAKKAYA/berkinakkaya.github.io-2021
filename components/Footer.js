import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a
          href="https://github.com/BerkinAKKAYA/"
          target="_blank"
          rel="noreferrer"
          className={styles.orange}
        >
          <img src="/github.svg" alt="GitHub" />
          <span>GitHub</span>
        </a>
        <a
          href="https://berkinakkaya.medium.com/"
          target="_blank"
          rel="noreferrer"
          className={styles.red}
        >
          <img src="/medium.svg" alt="Medium" />
          <span>Medium</span>
        </a>
        <a
          href="https://play.google.com/store/apps/developer?id=Berkin+Akkaya"
          target="_blank"
          rel="noreferrer"
          className={styles.purple}
        >
          <img src="/playstore.svg" alt="Play Store" />
          <span>Play Store</span>
        </a>
        <a
          href="https://linkedin.com/in/berkinakkaya"
          target="_blank"
          rel="noreferrer"
          className={styles.blue}
        >
          <img src="/linkedin.svg" alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>
      </footer>
    </>
  );
}
