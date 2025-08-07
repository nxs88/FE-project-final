import type { Vacancie } from '../types/CardInfo';

type SalaryRange = Vacancie['salary_range'];

export const renderSalary = (salary_range: SalaryRange) => {
  if (!salary_range) return 'Зарплата не указана';

  const parts = [
    salary_range.from && `от ${salary_range.from}`,
    salary_range.to && `до ${salary_range.to}`,
  ].filter(Boolean);
  return parts.join(' ') + ` ${salary_range.currency}`;
};
