"use client";
import { useState } from "react";
import { Catalog } from "@/components/Catalog/Catalog";
import { Search } from "./Search";


export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex flex-col gap-8">
      <Search onSearch={handleSearch} />
      <Catalog type="Search" searchQuery={searchQuery} />
    </div>
  );
};