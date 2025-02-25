"use client";

import { useEffect, useState } from "react";
import { TitleData } from "@/types/types";
import { getTitles } from "@/services/getTitle";
import { CardList } from "../Card/CardList";
import { Pagination } from "../Pagination/Pagination";
import { FilterComponent } from "../Filter/FilterComponent";

interface CatalogProps {
  type: string;
}

export const Catalog: React.FC<CatalogProps> = ({ type }) => {
  const [titles, setTitles] = useState<TitleData[]>([]);
  const [visibleTitles, setVisibleTitles] = useState<TitleData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const [filters, setFilters] = useState({
    genres: [] as string[],
    countries: [] as string[],
    years: [] as string[],
    rating: "",
  });

  const itemsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getTitles(type);
        setTitles(data || []);
        setVisibleTitles(data?.slice(0, itemsPerPage) || []);
        setHasMore((data || []).length > itemsPerPage);
      } catch (err) {
        console.error(err);
        setError("Не удалось загрузить данные.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    const nextTitles = titles.slice(0, nextPage * itemsPerPage);
    setVisibleTitles(nextTitles);
    setPage(nextPage);
    setHasMore(nextTitles.length < titles.length);
  };

  const applyFilters = () => {
    if (!titles || titles.length === 0) return;

    const filteredTitles = titles.filter((title) => {
      const genreMatch =
        filters.genres.length === 0 ||
        filters.genres.every(
          (genre) => title.genres?.map((g) => g.name).includes(genre) || false
        );

      const countryMatch =
        filters.countries.length === 0 ||
        filters.countries.every(
          (country) =>
            title.countries?.map((c) => c.name).includes(country) || false
        );

      const yearMatch =
        filters.years.length === 0 ||
        filters.years.includes(title.year?.toString() || "");

      const ratingMatch =
        filters.rating === "" || title.rating.kp >= parseFloat(filters.rating);

      return genreMatch && countryMatch && yearMatch && ratingMatch;
    });

    setVisibleTitles(filteredTitles.slice(0, itemsPerPage));
    setPage(1);
    setHasMore(filteredTitles.length > itemsPerPage);
  };

  const handleFilterChange = (filterType: string, value: string | string[]) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      genres: [],
      countries: [],
      years: [],
      rating: "",
    });
    setVisibleTitles(titles.slice(0, itemsPerPage));
    setPage(1);
    setHasMore(titles.length > itemsPerPage);
  };

  // Подготовка уникальных значений для фильтров
  const uniqueGenres = Array.from(
    new Set(
      titles.flatMap((title) => title.genres?.map((genre) => genre.name) || [])
    )
  ).map((name, index) => ({ id: index, name }));

  const uniqueCountries = Array.from(
    new Set(
      titles.flatMap(
        (title) => title.countries?.map((country) => country.name) || []
      )
    )
  );

  const uniqueYears = Array.from(new Set(titles.map((title) => title.year)))
    .filter((year) => year != null)
    .sort((a, b) => b - a);

  return (
    <div>
      <FilterComponent
        genres={uniqueGenres}
        countries={uniqueCountries}
        years={uniqueYears}
        selectedGenres={filters.genres}
        selectedCountries={filters.countries}
        selectedYears={filters.years}
        selectedRating={filters.rating}
        onGenreChange={(genres) => handleFilterChange("genres", genres)}
        onCountryChange={(countries) =>
          handleFilterChange("countries", countries)
        }
        onYearChange={(years) => handleFilterChange("years", years)}
        onRatingChange={(rating) => handleFilterChange("rating", rating)}
        onApplyFilters={applyFilters}
        onResetFilters={resetFilters}
      />

      {/* Отображение скелетонов или данных */}
      {error ? (
        <p>{error}</p>
      ) : titles.length === 0 && !loading ? (
        <p>Нет данных для отображения</p>
      ) : (
        <>
          <CardList items={visibleTitles} type={type} isLoading={loading} />
          <Pagination
            hasMore={hasMore}
            onLoadMore={handleLoadMore}
            loading={loading}
          />
        </>
      )}
    </div>
  );
};
