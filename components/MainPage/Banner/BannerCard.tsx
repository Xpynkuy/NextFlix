import { CardData } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export interface CardProps {
  data: CardData;
}

const BannerCard: React.FC<CardProps> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/title/${data.id}`);
  };
  return (
    <div className="rounded-3xl w-full h-[500px] mx-auto relative overflow-hidden cursor-pointer">
      {/* Контейнер для изображения */}
      <div className="relative w-full h-full">
        <Image
          src={data.backdrop.url || data.backdrop.url}
          alt={data.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Контейнер для текста и кнопки */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
        {/* Надпись "Сейчас в тренде!" сверху */}
        <h2 className="text-white text-sm sm:text-lg font-bold bg-black/30 px-3 py-1 rounded-full w-max">
          🔥Лидеры рейтинга
        </h2>

        {/* Остальной контент */}
        <div>
          {/* Жанры */}
          <div className="flex flex-wrap gap-2">
            {data.genres.map((genre, index) => (
              <span
                key={index}
                className="rounded-lg bg-slate-600/75 px-2 py-1 text-xs sm:text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Название */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-[0_0_1px_black] py-2 sm:py-3">
            {data.name}
          </h1>

          {/* Описание */}
          <p className="text-xs sm:text-sm text-white drop-shadow-[0_0_1px_black] line-clamp-3">
            {data.description || "Описание недоступно"}
          </p>

          {/* Кнопка */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            className="mt-3 sm:mt-4 px-3 sm:px-4 py-1 sm:py-2 bg-white text-black rounded-2xl hover:bg-gray-400 transition-colors text-xs sm:text-sm"
          >
            Смотреть
          </button>
        </div>
      </div>
    </div>
  );
};

export { BannerCard };
