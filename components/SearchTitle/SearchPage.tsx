"use client";
import { useState } from "react";
import { Search } from "./Search";
import { SearchCatalog } from "./SearchCatalog";

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex flex-col gap-8">
      <Search onSearch={handleSearch} />
      <SearchCatalog searchQuery={searchQuery} />
    </div>
  );
};