"use client";

import { CardData } from "@/types/types";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { getTitleByRating } from "@/services/getTitle";

const Banner = () => {
  const [title, setTitle] = useState<CardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMoviesByRating = async () => {
      try {
        setLoading(true);

        const data = await getTitleByRating();
        setTitle(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesByRating();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Carousel items={title} />
    </div>
  );
};

export { Banner };
