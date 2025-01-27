import { CardData } from "@/types/types";
import Image from "next/image";

interface TitlePageContentProps {
  title: CardData;
}

export const TitlePageContent: React.FC<TitlePageContentProps> = ({
  title,
}) => {
  return (
    <div>
      <section className="flex gap-3 mb-20">
        <div className="flex flex-col w-[500px] gap-4">
          <h1 className="text-4xl">{title.name}</h1>
          <div className="flex gap-2 text-xl">
            <span className="text-green-500">{title.rating.imdb}</span>
            <span >{title.year}</span>
            <span >{title.movieLength}</span>
            <span>{title.ageRating}+</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {title.genres.map((genre) => (
              <span
                key={genre.name}
                className="rounded-lg bg-slate-600/75 px-2 py-1 text-xs sm:text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
          <p className="text-white text-lg">{title.shortDescription}</p>
          <div className="mt-4"></div>
          <div className="mt-4">
            <button className="text-white bg-pink-700 hover:bg-pink-800 transition-colors duration-200 px-4 py-2 rounded-lg mr-2">
              Смотреть
            </button>
            <button className="text-white border border-gray-600 hover:bg-gray-800 transition-colors duration-200 px-4 py-2 rounded-lg">
              Буду смотреть
            </button>
          </div>
        </div>
        <div className="relative w-[800px] h-[400px]">
          <Image
            src={title.backdrop.url}
            layout="fill"
            objectFit="cover"
            alt={title.name}
            className="rounded-lg "
          />
        </div>
      </section>
      
    </div>
  );
};
