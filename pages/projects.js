import Head from "next/head";
import styles from "../styles/Projects.module.css";
import Project from "../components/Project.js";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Berkin AKKAYA</title>
      </Head>

      <div className={styles.container}>
        <Project />
        <Project />
        <Project />
      </div>
    </>
  );
}
