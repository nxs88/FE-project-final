import { Card, Button } from '@mantine/core';
import styles from './VacancieCard.module.scss';
import type { Vacancie } from '../../types/CardInfo';
import { useNavigate } from 'react-router-dom';
import { renderSalary } from '../../utils/renderSalary';

type CardProps = {
  vacancie: Vacancie;
  isSinglePage?: boolean;
};
export default function VacancieCard({
  vacancie,
  isSinglePage = false,
}: CardProps) {
  const navigate = useNavigate();

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
          <Button
            className={styles.detailsBtn}
            onClick={() => navigate(`/vacancies/${vacancie.id.toString()}`)}
          >
            Смотреть вакансию
          </Button>
        )}
        <Button
          className={`${styles.feedbackBtn} ${
            isSinglePage ? styles.btnSinglePage : ''
          }`}
          onClick={() => {
            window.location.href = vacancie.apply_alternate_url;
          }}
        >
          {isSinglePage ? 'Откликнуться на hh.ru' : 'Откликнуться'}
        </Button>
      </div>
    </Card>
  );
}
