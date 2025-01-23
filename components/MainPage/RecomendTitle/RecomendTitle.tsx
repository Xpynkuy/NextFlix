"use client";

import { CardData } from "@/types/types";

import { useEffect, useState } from "react";
import { CardList } from "@/components/Card/CardList";
import { getTitlesByVotes } from "@/services/getTitle";



const RecomendTitle: React.FC = () => {
  const [movies, setMovies] = useState<CardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getTitlesByVotes();
        setMovies(data);
      } catch (err) {
        console.error(err);
        setError("Не удалось загрузить фильмы.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return <CardList items={movies} />;
};

export { RecomendTitle };
