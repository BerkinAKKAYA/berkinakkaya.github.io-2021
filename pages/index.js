import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header.js";
import About from "../components/About.js";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Berkin AKKAYA</title>
        <meta name="description" content="Digital Portfolio of Berkin AKKAYA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>BERKIN AKKAYA</h1>
        <p className={styles.description}>
          I create web apps and contribute to open source software. I developed
          mobile games, productivity apps, npm packages and cli tools before.
        </p>

        <Link href="/projects">
          <a className={styles.learnMore}>VIEW MY WORKS</a>
        </Link>
      </main>

      <svg
        width="3000"
        height="300"
        viewBox="0 0 3000 300"
        className={styles.wave}
      >
        <g transform="translate(1500,100) scale(1,-2) translate(-1500,-100)">
          <path d="" fill="rgb(240, 142, 53)">
            <animate
              attributeName="d"
              dur="35"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcmod="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="0s"
              values="M0 0L 0 82.51815123697695Q 375 124.32960784533445  750 98.03699704940963T 1500 97.57353435968953T 2250 71.40384946554622T 3000 85.38012204128856L 3000 0 Z;M0 0L 0 81.79184522140318Q 375 113.0032030802148  750 70.54877384906163T 1500 77.28142460885749T 2250 82.65594037264148T 3000 81.769422385003L 3000 0 Z;M0 0L 0 84.83322843185064Q 375 99.83558153190742  750 82.5657704545481T 1500 87.17597891293669T 2250 72.09698456050755T 3000 86.14263751005281L 3000 0 Z;M0 0L 0 82.51815123697695Q 375 124.32960784533445  750 98.03699704940963T 1500 97.57353435968953T 2250 71.40384946554622T 3000 85.38012204128856L 3000 0 Z"
            ></animate>
          </path>
          <path d="" fill="rgb(240, 142, 53)" opacity="0.5">
            <animate
              attributeName="d"
              dur="35"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcmod="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="-16.666666666666668s"
              values="M0 0L 0 87.24999434389994Q 375 98.36627007267045  750 84.18867571857572T 1500 72.748999421691T 2250 79.68785662134037T 3000 87.81393956811118L 3000 0 Z;M0 0L 0 87.27262662350901Q 375 136.73967806622235  750 98.02172201717711T 1500 90.18061724134483T 2250 77.43928946265072T 3000 99.18254301635494L 3000 0 Z;M0 0L 0 74.77569992786302Q 375 126.08354109306924  750 99.35930599816507T 1500 96.1182899171906T 2250 85.7305106127016T 3000 73.51521271171093L 3000 0 Z;M0 0L 0 87.24999434389994Q 375 98.36627007267045  750 84.18867571857572T 1500 72.748999421691T 2250 79.68785662134037T 3000 87.81393956811118L 3000 0 Z"
            ></animate>
          </path>
        </g>
      </svg>

      <About />
    </div>
  );
}
