"use client";
import { useEffect, useState } from "react";
import { CardData } from "@/types/types";
import { getTitles } from "@/services/getTitle";
import { CardList } from "../Card/CardList";
import { Pagination } from "../Pagination/Pagination";

interface CatalogProps {
  type: string; // 'movies', 'series', 'anime', 'all'
  searchQuery?: string; // Поисковый запрос
}

export const Catalog: React.FC<CatalogProps> = ({ type, searchQuery }) => {
  const [titles, setTitles] = useState<CardData[]>([]); // Все загруженные тайтлы
  const [filteredTitles, setFilteredTitles] = useState<CardData[]>([]); // Отфильтрованные тайтлы
  const [visibleTitles, setVisibleTitles] = useState<CardData[]>([]); // Тайтлы, отображаемые на странице
  const [loading, setLoading] = useState<boolean>(true); // Состояние загрузки
  const [error, setError] = useState<string | null>(null); // Ошибки
  const [page, setPage] = useState<number>(1); // Текущая страница
  const [hasMore, setHasMore] = useState<boolean>(true); // Есть ли еще данные для загрузки

  // Количество тайтлов, загружаемых за один раз
  const itemsPerPage = 20;

  // Загрузка данных
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getTitles(type === 'Search' ? undefined : type); // Получаем все тайтлы
        setTitles(data);
        setFilteredTitles(data); // Инициализируем отфильтрованные тайтлы
        setVisibleTitles(data.slice(0, itemsPerPage)); // Показываем первые N тайтлов
        setHasMore(data.length > itemsPerPage); // Проверяем, есть ли еще данные
      } catch (err) {
        console.error(err);
        setError("Не удалось загрузить данные.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  // Фильтрация тайтлов по поисковому запросу
  useEffect(() => {
    if (searchQuery) {
      const filtered = titles.filter((title) =>
        title.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTitles(filtered);
      setVisibleTitles(filtered.slice(0, itemsPerPage)); // Сбрасываем пагинацию
      setPage(1); // Сбрасываем страницу
      setHasMore(filtered.length > itemsPerPage); // Проверяем, есть ли еще данные
    } else {
      setFilteredTitles(titles);
      setVisibleTitles(titles.slice(0, itemsPerPage)); // Сбрасываем пагинацию
      setPage(1); // Сбрасываем страницу
      setHasMore(titles.length > itemsPerPage); // Проверяем, есть ли еще данные
    }
  }, [searchQuery, titles]);

  // Обработчик для кнопки "Загрузить еще"
  const handleLoadMore = () => {
    const nextPage = page + 1;
    const nextTitles = filteredTitles.slice(0, nextPage * itemsPerPage); // Загружаем следующую порцию тайтлов
    setVisibleTitles(nextTitles);
    setPage(nextPage);
    setHasMore(nextTitles.length < filteredTitles.length); // Проверяем, есть ли еще данные
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <CardList items={visibleTitles} type={type} /> {/* Передаем отфильтрованные тайтлы */}

      {/* Компонент пагинации */}
      <Pagination
        hasMore={hasMore}
        onLoadMore={handleLoadMore}
        loading={loading}
      />
    </div>
  );
};