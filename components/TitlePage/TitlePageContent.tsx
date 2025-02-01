import { CardData } from "@/types/types";
import Image from "next/image";
import InfoBlock from "./InfoBlock";

interface TitlePageContentProps {
  title: CardData;
}

export const TitlePageContent: React.FC<TitlePageContentProps> = ({
  title,
}) => {
  const uniquePersons = Array.from(
    new Set(title.persons.map((person) => JSON.stringify(person)))
  ).map((person) => JSON.parse(person));

  // Проверка наличия фоновой картинки
  const hasBackdrop = !!title.backdrop?.url;

  return (
    <>
      {/* Секция с фоновой картинкой */}
      <section
        className="relative mb-20 bg-cover bg-center"
        style={{
          backgroundImage: hasBackdrop ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${title.backdrop.url})` : "none", // Устанавливаем фон, если картинка есть
          backgroundColor: hasBackdrop ? "transparent" : "transparent", // Прозрачный фон, если картинки нет
        }}
      >
        {/* Затемнение фона (только если есть фоновая картинка) */}
        {hasBackdrop && (
          <div className="absolute inset-0 bg-black/50"></div>
        )}

        {/* Контент поверх фона */}
        <div className="relative flex gap-6 py-8 px-3">
          <div>
            <Image
              src={title.poster.url}
              width={320}
              height={360}
              objectFit="cover"
              alt={title.name}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="flex justify-between w-full">
            <div className="flex flex-col justify-end gap-4">
              <h1 className="text-4xl text-white">{title.name}</h1>
              <div className="flex gap-2 text-xl text-white">
                <span className="text-green-500">{title.rating.imdb}</span>
                <span>{title.year}</span>
                <span>{title.ageRating}+</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {title.genres.map((genre) => (
                  <span
                    key={genre.name}
                    className="rounded-lg bg-slate-600/75 px-2 py-1 text-xs sm:text-sm text-white"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <button className="text-white bg-pink-700 hover:bg-pink-800 transition-colors duration-200 px-4 py-2 rounded-lg mr-2">
                  Смотреть
                </button>
                <button className="text-white bg-gray-600 hover:bg-gray-800 transition-colors duration-200 px-4 py-2 rounded-lg">
                  Буду смотреть
                </button>
              </div>
            </div>

            <div className="h-fit p-4 rounded-2xl bg-gray-900/95">
              <div className="flex gap-4">
                <div className="text-4xl text-yellow-600/95">
                  {title.rating.kp}
                </div>
                <div>
                  <h2 className="text-white">Рейтинг тайтла</h2>
                  <div className="text-gray-500 text-xs">
                    {title.votes.kp} оценок
                  </div>
                </div>
              </div>
              <button className="w-full bg-gray-700 rounded-2xl mt-4 hover:opacity-85 duration-150 text-white">
                Оценить
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Остальные секции */}
      <section>
        <div className="mb-10">
          <h1 className="text-2xl py-4">Описание</h1>
          <p className="text-gray-500 text-lg">{title.description}</p>
        </div>
        <div className="">
          <h1 className="text-2xl py-8">Актёры и съёмочная группа</h1>
          <div className="grid grid-cols-10 gap-6 ">
            {uniquePersons.slice(0, 10).map((person) => (
              <div
                key={`${person.id}-${person.name}`}
                className="flex flex-col items-center gap-3 transition transform hover:-translate-y-1 cursor-pointer"
              >
                <Image
                  src={person.photo}
                  width={90}
                  height={60}
                  objectFit="cover"
                  alt={person.name}
                  className="rounded-2xl"
                />
                <span className="text-center w-full truncate">
                  {person.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div>
          <InfoBlock title={title} />
        </div>
      </section>
    </>
  );
};