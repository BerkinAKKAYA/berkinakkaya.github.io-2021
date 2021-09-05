import styles from "../styles/Project.module.css";

export default function Header() {
  return <div className={styles.container}>{this.props.header}</div>;
}
