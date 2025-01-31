import { SearchPage } from "@/components/SearchTitle/SearchPage";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Все тайтлы",
  description: "Каталог всех тайтлов: фильмы, сериалы, аниме",
};

export default function AllPage() {
  return <SearchPage/>;
}