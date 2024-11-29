import styles from "./footer.module.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>Marharyta Rozghon - {currentYear}</footer>
  );
};

export { Footer };
