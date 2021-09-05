import styles from "../styles/Footer.module.css";
import Image from "next/image";

import githubIcon from "../public/github.svg";
import mediumIcon from "../public/medium.svg";
import playStoreIcon from "../public/playstore.svg";
import linkedInIcon from "../public/linkedin.svg";

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
          <Image src={githubIcon} alt="GitHub" />
          <span>GitHub</span>
        </a>
        <a
          href="https://berkinakkaya.medium.com/"
          target="_blank"
          rel="noreferrer"
          className={styles.red}
        >
          <Image src={mediumIcon} alt="Medium" />
          <span>Medium</span>
        </a>
        <a
          href="https://play.google.com/store/apps/developer?id=Berkin+Akkaya"
          target="_blank"
          rel="noreferrer"
          className={styles.purple}
        >
          <Image src={playStoreIcon} alt="Play Store" />
          <span>Play Store</span>
        </a>
        <a
          href="https://linkedin.com/in/berkinakkaya"
          target="_blank"
          rel="noreferrer"
          className={styles.blue}
        >
          <Image src={linkedInIcon} alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>
      </footer>
    </>
  );
}