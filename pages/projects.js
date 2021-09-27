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
          index="2"
          liveLink="https://svelte-chat-berkinakkaya.web.app/"
          githubLink="https://github.com/BerkinAKKAYA/svelte-chat"
        />
        <Project
          title="Vueweeter"
          description="Realtime Social Media App"
          img="/project-thumbnails/vue.png"
          index="1"
          liveLink="https://berkinakkaya.github.io/vueweeter"
          githubLink="https://github.com/BerkinAKKAYA/vueweeter"
        />
        <Project
          title="svelte-image-gallery"
          description="Fluid Image Container for Svelte"
          img="/project-thumbnails/npm.svg"
          index="3"
          liveLink="http://npmjs.com/package/svelte-image-gallery"
          githubLink="https://github.com/BerkinAKKAYA/svelte-image-gallery"
        />
        <Project
          title="Stay In The Shadows"
          description="Stealth & Action Game"
          img="/project-thumbnails/stay-in-the-shadows.png"
          index="5"
          liveLink="https://play.google.com/store/apps/details?id=com.BerkinAkkaya.StayintheShadows"
          githubLink=""
        />
        <Project
          title="Split"
          description="Split is a hyper-casual endless game that you try to dodge obstacles as the game gets faster over time."
          img="/project-thumbnails/split.webp"
          index="2"
          liveLink="https://play.google.com/store/apps/details?id=com.BerkinAkkaya.Split"
          githubLink="https://github.com/BerkinAKKAYA/Split"
        />
        <Project
          title="Timeline"
          description="Most Minimalistic Calendar Ever"
          img="/project-thumbnails/timeline.png"
          index="4"
          liveLink="http://timeline-berkin.web.app/"
          githubLink="https://github.com/BerkinAKKAYA/Timeline"
        />
        <Project
          title="Pomolog"
          description="Save how many pomodoros have you done, see monthly charts."
          img="/project-thumbnails/pomolog.jpg"
          index="1"
          liveLink="https://pomolog-berkinakkaya.web.app/"
          githubLink="https://github.com/BerkinAKKAYA/Pomolog"
        />
        <Project
          title="Focused YouTube"
          description="YouTube without distractions, with bookmarks."
          img="/project-thumbnails/focusedyt.png"
          index="5"
          liveLink="https://github.com/BerkinAKKAYA/Focused-YouTube"
          githubLink="https://focused-yt.web.app/"
        />
      </div>
    </>
  );
}
