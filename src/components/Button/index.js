import styles from "../../styles/components/Button.module.scss";

function Button({ children, onClick }) {
  return (
    <>
      <button className={styles.button} onClick={onClick}>
        {children}
        <img className={styles.icon} src="assets/icons/github.svg" />
      </button>
    </>
  );
}

export default Button;
