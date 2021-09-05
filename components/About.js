import styles from "../styles/About.module.css";

export default function Home() {
  return (
    <section className={styles.outer}>
      <div className={styles.inner}>
        <h1 id="about" className={styles.title}>
          About Me
        </h1>
        <p>
          I am a 20 years old <b>software developer</b> based on <i>Istanbul</i>
          . I started coding with the dream of creating a <b>website</b> about
          cars out of my car magazines. After i learnt some HTML and CSS, i
          decided that i want to develop <b>web based games</b> and started
          learning C# with{" "}
          <a href="https://unity.com" target="_blank" rel="noreferrer">
            Unity
          </a>
          . Meanwhile i met open source software, started using{" "}
          <b>Arch Linux</b> and saw that i enjoy contributing to the software i
          use so much. I&apos;m currently working as a front-end developer and
          learning Rust in my free time.
        </p>
      </div>
    </section>
  );
}
