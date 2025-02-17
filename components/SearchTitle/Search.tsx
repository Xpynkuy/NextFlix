"use client";
import { useState } from "react";

type Props = {
  onSearch: (value: string) => void;
};

export const Search: React.FC<Props> = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!search) {
      setIsFocused(false);
    }
  };

  return (
    <div className="py-4 max-w-[800px]">
      <h1 className="text-2xl mb-4">Поиск</h1>
      <form className="flex items-center space-x-2 relative">
        <input
          type="search"
          value={search}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 w-3/4 "
        />
        <label
          className={`absolute left-2 text-gray-400 transition-all duration-400 pointer-events-none ${
            isFocused || search
              ? "transform -translate-y-4 text-sm "
              : "top-1/2 -translate-y-1/2"
          }`}
        >
          Фильмы, сериалы, аниме
        </label>
      </form>
    </div>
  );
};
