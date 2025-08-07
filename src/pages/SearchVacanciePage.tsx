import VacancieFilter from '../components/VacancieFilter/VacancieFilter';
import TagsFilter from '../components/TagsFilter/TagsFilter';
import CardList from '../modules/CardList/CardList';
import type { Vacancie } from '../types/CardInfo';

type SearchVacanciePageProps = {
  vacancies: Vacancie[];
  page: number;
  totalPages: number;
  pageChange: (page: number) => void;
};

export default function SearchVacanciePage({
  vacancies,
  page,
  totalPages,
  pageChange,
}: SearchVacanciePageProps) {
  return (
    <>
      <div className="devider"></div>
      <div className="container">
        <div className="info">
          <h1>Список вакансий </h1>
          <p>по профессии Frontend-разработчик</p>
        </div>
        <VacancieFilter resetPage={() => pageChange(1)} />
        <div className="filters">
          <TagsFilter />
        </div>
        <CardList
          vacancies={vacancies}
          page={page}
          totalPages={totalPages}
          pageChange={pageChange}
        />
      </div>
    </>
  );
}
