import { Card } from '@mantine/core';
import styles from './VacancieCard.module.scss';
import type { Vacancie } from '../../types/CardInfo';
import { Link } from 'react-router-dom';
import { renderSalary } from '../../utils/renderSalary';

type CardProps = {
  vacancie: Vacancie;
  isSinglePage?: boolean;
};
export default function VacancieCard({
  vacancie,
  isSinglePage = false,
}: CardProps) {
  return (
    <Card className={styles.card}>
      <h2 className={styles.cardName}>{vacancie.name}</h2>
      <div className={styles.cardInfo}>
        <p className={styles.cardSalary}>
          {renderSalary(vacancie.salary_range)}
        </p>
        <p className={styles.cardExp}>Опыт: {vacancie.experience.name}</p>
      </div>
      <p className={styles.cardEmp}>{vacancie.employer.name}</p>
      {vacancie.work_format.length > 0 && (
        <span className={styles.cardWf}>
          {vacancie.work_format.map((f) => f.name.toUpperCase()).join(' / ')}
        </span>
      )}
      <p className={styles.cardArea}>{vacancie.area.name}</p>
      <div className={styles.cardBtns}>
        {!isSinglePage && (
          <Link
            to={`/vacancies/${vacancie.id.toString()}`}
            className={styles.detailsBtn}
          >
            Смотреть вакансию
          </Link>
        )}
        <a
          href={vacancie.apply_alternate_url}
          className={`${styles.feedbackBtn} ${
            isSinglePage ? styles.btnSinglePage : ''
          }`}
        >
          {isSinglePage ? 'Откликнуться на hh.ru' : 'Откликнуться'}
        </a>
      </div>
    </Card>
  );
}
