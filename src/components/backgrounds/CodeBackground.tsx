import styles from "./glitch.module.css";

const CodeBackground = () => {
  return (
    <div aria-hidden className={styles.CodeBackground}>
      <div className={styles.text}>
        <p className="opacity-0">.</p>
        <span>{"< />"}</span>
        <span>{"< />"}</span>
        <span>{"< />"}</span>
      </div>
    </div>
  );
};

export default CodeBackground;
