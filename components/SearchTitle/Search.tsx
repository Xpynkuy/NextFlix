import { FormEventHandler, useState } from "react";

type Props = {
  onSearch: (value: string) => void; // Передаем поисковый запрос
};

export const Search: React.FC<Props> = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value); // Вызываем onSearch при каждом изменении значения
  };


  return (
    <div className="py-4 max-w-[800px] ">
      <h1 className="text-2xl mb-4">Поиск</h1>
      <form className="flex items-center space-x-2">
        <input
          type="search"
          placeholder="Фильмы, сериалы, аниме"
          value={search}
          onChange={handleChange}
          className="p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-3/4"
        />
      </form>
    </div>
  );
};