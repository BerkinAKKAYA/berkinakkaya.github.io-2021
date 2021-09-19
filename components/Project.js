import styles from "../styles/Project.module.css";

export default function Header({ title, description, index, img }) {
  return (
    <div className={styles.container + " " + styles["hover" + index]}>
      <img src={img} alt={title} />

      <div className={styles.content}>
        <h2>{title}</h2>
        <p style={{ marginTop: 15 }}>{description}</p>
      </div>
    </div>
  );
}
