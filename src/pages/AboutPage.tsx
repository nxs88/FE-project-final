import styles from './AboutPage.module.scss';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Константин Ладоверов</h2>
        <p>
          Привет! Я - Frontend-разработчик. Пишу приложения на React +
          TypeScript + Redux Toolkit.
        </p>
      </div>
    </div>
  );
}
