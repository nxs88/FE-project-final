import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInfo}>
        <Link to="/">
          <img
            className={styles.headerLogo}
            src={`${import.meta.env.BASE_URL}assets/images/logo.svg`}
            alt="Logo"
          />
        </Link>
        <p>.FrontEnd</p>
      </div>

      <div className={styles.headerPages}>
        <div className={styles.vacanciesPage}>
          <span className={styles.vacanciesPageText}>Вакансии FE</span>
        </div>
        <div className={styles.aboutPage}>
          <span data-testid="aboutImg" className={styles.aboutImg}></span>
          <span className={styles.aboutText}>Обо мне</span>
        </div>
      </div>
    </header>
  );
}
