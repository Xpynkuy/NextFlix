import { useState } from "react";

interface FilterComponentProps {
  genres: { id: number; name: string }[];
  countries: string[];
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
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleOpenMenu = (menu: string) =>
    setOpenMenu(openMenu === menu ? null : menu);

  const renderFilter = (
    name: string,
    items: string[] | number[],
    selected: string[],
    onChange: (values: string[]) => void
  ) => (
    <div className="relative w-full">
      <button
        onClick={() => handleOpenMenu(name)}
        className={`w-full p-3 rounded-lg text-white transition-all duration-300 ${
          openMenu === name ? "bg-blue-500" : "bg-black/15 hover:bg-black/25"
        }`}
      >
        {name}
      </button>
      {openMenu === name && (
        <div className="absolute top-12 left-0 w-full bg-BG text-white border border-black/30 rounded-lg shadow-lg z-10 p-1 max-h-48 overflow-y-auto">
          <select
            multiple
            value={selected}
            onChange={(e) =>
              onChange(Array.from(e.target.selectedOptions, (o) => o.value))
            }
            className="w-full p-2 bg-BG border-none text-white"
          >
            {items.map((item, i) => (
              <option key={i} value={item.toString()}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-white bg-BG rounded-xl p-4 mb-10 h-auto w-full">
      {/* Фильтр жанров */}
      {renderFilter(
        "Жанры",
        genres.map((g) => g.name),
        selectedGenres,
        onGenreChange
      )}

      {/* Фильтр стран */}
      {renderFilter("Страны", countries, selectedCountries, onCountryChange)}

      {/* Фильтр лет */}
      {renderFilter(
        "Годы",
        years.map((y) => y.toString()),
        selectedYears,
        onYearChange
      )}

      {/* Фильтр рейтинга */}
      {renderFilter(
        "Рейтинг",
        [...Array(10)].map((_, i) => (i + 1).toString()),
        [selectedRating],
        (r) => onRatingChange(r[0])
      )}

      {/* Кнопки применения и сброса фильтров */}
      <div className="col-span-1 flex flex-col gap-2 w-full md:col-span-2 lg:col-span-1">
        <button
          onClick={onApplyFilters}
          className="w-full p-3 bg-blue-500/25 text-white rounded-lg hover:bg-blue-600"
        >
          Применить
        </button>
        <button
          onClick={onResetFilters}
          className="w-full p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Сбросить
        </button>
      </div>
    </div>
  );
};
