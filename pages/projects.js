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
        <Project
          title="Svelte Chat"
          description="Chat Application Backed by Firestore"
          img="/project-thumbnails/svelte.png"
          index="1"
        />
        <Project
          title="Vueweeter"
          description="Realtime Social Media App"
          img="/project-thumbnails/vue.png"
          index="2"
        />
        <Project
          title="svelte-image-gallery"
          description="Fluid Image Container for Svelte"
          img="/project-thumbnails/npm.svg"
          index="3"
        />
        <Project
          title="Stay In The Shadows"
          description="Stealth & Action Game"
          img="/project-thumbnails/stay-in-the-shadows.png"
          index="4"
        />
        <Project
          title="Timeline"
          description="Most Minimalistic Calendar Ever"
          img="/project-thumbnails/timeline.png"
          index="5"
        />
      </div>
    </>
  );
}
