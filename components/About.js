import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className={styles.outer}>
      <div className={styles.inner}>
        <h1 id="about" className={styles.title}>
          <span className={styles.hover1}>A</span>
          <span className={styles.hover2}>b</span>
          <span className={styles.hover3}>o</span>
          <span className={styles.hover4}>u</span>
          <span className={styles.hover5}>t</span>
          &nbsp;
          <span className={styles.hover6}>M</span>
          <span className={styles.hover7}>e</span>
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
