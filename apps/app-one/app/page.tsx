import styles from "./page.module.css";
import AboutPage from "./pages/AboutPage/page";
import HomePage from "./pages/HomePage/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomePage />
      <AboutPage />
    </div>
  );
}
