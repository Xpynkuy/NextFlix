import { CardData } from "@/types/types";
import Image from "next/image";
import React from "react";

export interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl w-58 h-80">
      <Image
        src={data.poster.url}
        alt={data.name}
        fill
        className="object-cover opacity-90 filter brightness-50"
      />
      <div className="absolute bottom-0 m-3 w-full">
        <h5 className="rounded-lg bg-slate-600/55 max-w-max px-1">
          {data.genres[0]?.name || "Неизвестный жанр"}
        </h5>
        <h3 className="text-lg font-bold text-white">{data.name}</h3>
        <p className="text-sm text-gray-300 line-clamp-3 mr-3">
          {data.description || "Описание недоступно"}
        </p>
      </div>
    </div>
  );
};

export { Card };
