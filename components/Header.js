import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <h2>Berkin AKKAYA</h2>
        </a>
      </Link>

      <nav className={styles.navigation}>
        <Link href="/#about">
          <a>ABOUT ME</a>
        </Link>
        <Link href="/projects">
          <a>PROJECTS</a>
        </Link>
        <Link href="/contact">
          <a>CONTACT</a>
        </Link>
      </nav>
    </header>
  );
}
