"use client";

import { getCriticsTitle, getTitlesByVotes } from "@/services/getTitle";
import { RecomendTitles } from "./RecomendTitles";


const RecomendTitle = () => {
  return (
    <div>
      <RecomendTitles fetchData={getCriticsTitle} title="Лучшие оценки критиков" desc="Фильмы и сериалы, получившие высшие оценки от профессиональных критиков.
       Идеальный выбор для ценителей качественного кино." />
      <RecomendTitles fetchData={getTitlesByVotes} title="Лучшие оценки пользователей" desc="Выбор аудитории: подборка фильмов и сериалов, которые покорили сердца миллионов зрителей." />
    </div>
  );
};

export { RecomendTitle }