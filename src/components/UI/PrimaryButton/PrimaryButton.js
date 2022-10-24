import Link from "next/link";
// CSS
import styles from "./_PrimaryButton.module.scss";

const PrimaryButton = (props) => {
  return (
    <div className={styles.primaryButton}>
      <Link href="/quem-somos">
        <a>{props.text}</a>
      </Link>
    </div>
  );
};

export default PrimaryButton;
