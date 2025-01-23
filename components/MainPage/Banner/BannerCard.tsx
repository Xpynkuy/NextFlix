import { CardData } from "@/types/types";
import Image from "next/image";
import React from "react";

export interface CardProps {
  data: CardData;
}

const BannerCard: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-3xl w-full sm:w-[300px] md:w-[400px] lg:w-[660px] lg:h-[460px] mx-auto">
      {/* Контейнер для изображения */}
      <div className="relative w-full h-full">
        <Image
          src={data.backdrop.url|| data.backdrop.url}
          alt={data.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Контейнер для текста и кнопки */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        {/* Надпись "Сейчас в тренде!" сверху */}
        <h2 className="text-white text-lg font-bold bg-black/30 px-3 py-1 rounded-full w-max">
        🔥Лидеры рейтинга
        </h2>

        {/* Остальной контент */}
        <div>
          <h5 className="flex rounded-lg gap-2">
          {data.genres.map((genre, index) => (
              <h5
                key={index}
                className="rounded-lg bg-slate-600/75 px-2 py-1 text-sm"
              >
                {genre.name}
              </h5>
            ))}
          </h5>
          <h1 className="text-4xl font-bold text-white drop-shadow-[0_0_1px_black] py-3">{data.name}</h1>
          <p className="text-sm text-white drop-shadow-[0_0_1px_black] line-clamp-3 mr-3">
            {data.description || "Описание недоступно"}
          </p>
          <button className="mt-4 px-4 py-2 bg-white text-black rounded-2xl hover:bg-green-100 transition-colors">
            Смотреть
          </button>
        </div>
      </div>
    </div>
  );
};

export { BannerCard };