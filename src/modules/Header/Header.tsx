import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import CustomLink from '../../shared/CustomLink';

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
          <CustomLink to="/vacancies">Вакансии FE</CustomLink>
        </div>
        <div className={styles.aboutPage}>
          <CustomLink
            to="/about"
            icon={
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.aboutIcon}
                data-testid="aboutImg"
              >
                <path
                  d="M6.66797 18.849C6.91548 18.0252 7.42194 17.3032 8.11222 16.79C8.80249 16.2768 9.63982 15.9997 10.5 16H14.5C15.3612 15.9997 16.1996 16.2774 16.8904 16.7918C17.5811 17.3062 18.0874 18.0298 18.334 18.855M21.5 12C21.5 16.9706 17.4706 21 12.5 21C7.52944 21 3.5 16.9706 3.5 12C3.5 7.02944 7.52944 3 12.5 3C17.4706 3 21.5 7.02944 21.5 12ZM15.5 10C15.5 11.6569 14.1569 13 12.5 13C10.8431 13 9.5 11.6569 9.5 10C9.5 8.34315 10.8431 7 12.5 7C14.1569 7 15.5 8.34315 15.5 10Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.5"
                />
              </svg>
            }
          >
            Обо мне
          </CustomLink>
        </div>
      </div>
    </header>
  );
}
