import styles from "../styles/Project.module.css";

export default function Header({ title, right }) {
  return (
    <div
      className={styles.container}
      style={{ flexDirection: right ? "row-reverse" : "row" }}
    >
      <img src="/project-thumbnails/jumpy.png" alt={title} />

      <div className={styles.content}>
        <h2>{title}</h2>
        <p style={{ marginTop: 15 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          feugiat ex nec odio ornare, at tristique tortor suscipit. Suspendisse
          potenti. Cras varius, nunc ullamcorper fermentum imperdiet, dolor
          augue molestie elit, ac pretium mauris nibh nec neque. Donec porta in
          libero auctor aliquam. Integer ullamcorper magna eu nulla tempor
          pretium. Suspendisse ut dapibus sapien. Integer tincidunt maximus
          mauris nec imperdiet.
        </p>
      </div>
    </div>
  );
}
