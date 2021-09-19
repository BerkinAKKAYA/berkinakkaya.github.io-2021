import styles from "../styles/Project.module.css";

export default function Header({
  title,
  description,
  index,
  img,
  liveLink,
  githubLink,
}) {
  return (
    <div className={styles.container + " " + styles["hover" + index]}>
      <img src={img} alt={title} />

      <div className={styles.content}>
        <h2>{title}</h2>
        <p style={{ marginTop: 15 }}>{description}</p>
        <div className={styles.actions}>
          <a href={liveLink} target="_blank" rel="noreferrer">
            <button>Visit</button>
          </a>
          {githubLink ? (
            <a href={githubLink} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : (
            <a href="#" className={styles.disabled}>
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
