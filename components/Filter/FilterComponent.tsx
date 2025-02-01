import React, { useState } from "react";

interface FilterComponentProps {
  genres: { id: number; name: string }[];
  countries: string[]; // Массив строк
  years: number[];
  selectedGenres: string[];
  selectedCountries: string[];
  selectedYears: string[];
  selectedRating: string;
  onGenreChange: (genres: string[]) => void;
  onCountryChange: (countries: string[]) => void;
  onYearChange: (years: string[]) => void;
  onRatingChange: (rating: string) => void;
  onApplyFilters: () => void;
  onResetFilters: () => void;
}

export const FilterComponent: React.FC<FilterComponentProps> = ({
  genres,
  countries,
  years,
  selectedGenres,
  selectedCountries,
  selectedYears,
  selectedRating,
  onGenreChange,
  onCountryChange,
  onYearChange,
  onRatingChange,
  onApplyFilters,
  onResetFilters,
}) => {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);

  return (
    <div className="text-white bg-BG flex gap-10 rounded-xl p-4 mb-10">
      {/* Жанры */}
      <div className="flex flex-col relative">
        <button
          onClick={() => setIsGenreOpen(!isGenreOpen)}
          className="text-left p-2 bg-black/15 border rounded-lg"
        >
          Жанры
        </button>
        {isGenreOpen && (
          <div className="absolute top-12 left-0 bg-black/15 border rounded-lg shadow-lg z-10">
            <select
              multiple
              value={selectedGenres}
              onChange={(e) =>
                onGenreChange(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
              className="w-48 p-2 bg-black/15 text-white"
            >
              {genres.map((genre) => (
                <option key={genre.id} value={genre.name}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Страны */}
      <div className="flex flex-col relative">
        <button
          onClick={() => setIsCountryOpen(!isCountryOpen)}
          className="text-left p-2 bg-black/15 border rounded-lg"
        >
          Страны
        </button>
        {isCountryOpen && (
          <div className="absolute top-12 left-0 bg-black/15 border rounded-lg shadow-lg z-10">
            <select
              multiple
              value={selectedCountries}
              onChange={(e) =>
                onCountryChange(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
              className="w-48 p-2 bg-black/15 text-white"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Годы */}
      <div className="flex flex-col relative">
        <button
          onClick={() => setIsYearOpen(!isYearOpen)}
          className="text-left p-2 bg-black/15 border rounded-lg"
        >
          Годы
        </button>
        {isYearOpen && (
          <div className="absolute top-12 left-0 bg-black/15 border rounded-lg shadow-lg z-10">
            <select
              multiple
              value={selectedYears}
              onChange={(e) =>
                onYearChange(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
              className="w-48 p-2 bg-black/15 text-white"
            >
              {years.map((year) => (
                <option key={year} value={year.toString()}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Рейтинг */}
      <div className="flex flex-col relative">
        <button
          onClick={() => setIsRatingOpen(!isRatingOpen)}
          className="text-left p-2 bg-black/15 border rounded-lg"
        >
          Рейтинг
        </button>
        {isRatingOpen && (
          <div className="absolute top-12 left-0 bg-black/15 border rounded-lg shadow-lg z-10">
            <select
              value={selectedRating}
              onChange={(e) => onRatingChange(e.target.value)}
              className="w-48 p-2 bg-black/15 text-white"
            >
              <option value="">Любой</option>
              {[...Array(10)].map((_, index) => (
                <option key={index + 1} value={(index + 1).toString()}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Кнопки */}
      <div className="flex items-end gap-2">
        <button
          onClick={onApplyFilters}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Применить фильтры
        </button>
        <button
          onClick={onResetFilters}
          className="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Сбросить фильтры
        </button>
      </div>
    </div>
  );
};