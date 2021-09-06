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
        <Project title="Project 1" index="1" />
        <Project title="Project 2" index="2" right />
        <Project title="Project 3" index="3" />
        <Project title="Project 4" index="4" right />
        <Project title="Project 5" index="5" />
      </div>
    </>
  );
}
