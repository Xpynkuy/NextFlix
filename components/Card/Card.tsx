import { useRouter } from "next/navigation";
import { TitleData } from "@/types/types";
import Image from "next/image";

export interface CardProps {
  data: TitleData;
  type: string;
}

const Card: React.FC<CardProps> = ({ data, type }) => {
  const router = useRouter();

  const posterUrl = data.poster?.url || data.backdrop.url; // Запасное изображение, если poster.url отсутствует

  const handleClick = () => {
    router.push(`/${type}/${data.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative overflow-hidden rounded-3xl w-58 h-80 transition transform hover:-translate-y-2 cursor-pointer"
    >
      <Image
        src={posterUrl}
        alt={data.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={75}
        className="object-cover opacity-90 filter brightness-60"
      />
      <div className="absolute bottom-0 m-3 w-full">
        <h5 className="rounded-lg bg-slate-600/75 max-w-max px-1">
          {data.genres[0]?.name || "Неизвестный жанр"}
        </h5>
        <h3 className="text-lg font-bold text-white drop-shadow-[0_0_1px_black]">
          {data.name}
        </h3>
        <p className="text-sm text-gray-300 line-clamp-3 mr-3 drop-shadow-[0_0_1px_black]">
          {data.description || "Описание недоступно"}
        </p>
      </div>
    </div>
  );
};

export { Card };