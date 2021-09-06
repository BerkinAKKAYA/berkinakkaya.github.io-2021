import styles from "../styles/Project.module.css";

export default function Header({ title, right, index }) {
  return (
    <div
      className={
        styles.container +
        " " +
        (right ? styles.right : styles.left) +
        " " +
        styles["hover" + index]
      }
    >
      <img src="/project-thumbnails/jumpy.png" alt={title} />

      <div className={styles.content}>
        <h2>{title}</h2>
        <p style={{ marginTop: 15 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          feugiat ex nec odio ornare, at tristique tortor suscipit. Suspendisse
          potenti. Cras varius, nunc ullamcorper fermentum imperdiet, dolor
          augue molestie elit, ac pretium mauris nibh nec neque.
        </p>

        <a href="#" className={styles.details}>
          Click To See More
        </a>
      </div>
    </div>
  );
}
