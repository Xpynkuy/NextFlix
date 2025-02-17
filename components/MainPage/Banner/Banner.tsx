"use client";

import { TitleData } from "@/types/types";
import { useEffect, useState } from "react";

import { getTitleByRating } from "@/services/getTitle";
import CustomCarousel from "./Carousel";

const Banner = () => {
  const [title, setTitle] = useState<TitleData[]>([]);
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
        setError("Не удалось загрузить данные.");
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesByRating();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <CustomCarousel items={title} isLoading={loading} />
    </div>
  );
};

export { Banner };
