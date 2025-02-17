import { TitleData } from "@/types/types";
import Image from "next/image";
import InfoBlock from "./InfoBlock";

interface TitlePageContentProps {
  title: TitleData;
}

export const TitlePageContent: React.FC<TitlePageContentProps> = ({
  title,
}) => {
  const uniquePersons = Array.from(
    new Set(title.persons.map((person) => JSON.stringify(person)))
  ).map((person) => JSON.parse(person));
  const hasBackdrop = !!title.backdrop?.url;

  // Функция для рендера жанров
  const renderGenres = () =>
    title.genres.slice(0, 5).map((genre) => (
      <span
        key={genre.name}
        className="rounded-lg bg-slate-600/75 px-2 py-1 text-xs sm:text-sm text-white"
      >
        {genre.name}
      </span>
    ));

  // Функция для рендера персон
  const renderPersons = () =>
    uniquePersons.slice(0, 10).map((person) => (
      <div
        key={`${person.id}-${person.name}`}
        className="flex flex-col items-center gap-2 transition transform hover:-translate-y-1 cursor-pointer"
      >
        <Image
          src={person.photo}
          width={90}
          height={60}
          objectFit="cover"
          alt={person.name}
          className="rounded-2xl w-16 h-24"
          loading="lazy"
        />
        <span className="text-center text-sm md:text-base truncate">
          {person.name}
        </span>
      </div>
    ));

  return (
    <>
      {/* Секция с фоновой картинкой */}
      <section
        className={`relative rounded-xl mb-8 bg-cover bg-center ${
          hasBackdrop ? "backdrop-image backdrop-overlay" : ""
        }`}
        style={
          hasBackdrop ? { backgroundImage: `url(${title.backdrop.url})` } : {}
        }
      >
        {hasBackdrop && <div className="absolute inset-0 bg-black/50"></div>}
        
        {/* Рейтинг в правом верхнем углу */}
        <div
          className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 rounded-2xl bg-gray-900/95 p-4 flex items-center gap-4"
          style={{ zIndex: 10 }}
        >
          <div className="text-3xl text-yellow-600/95">{title.rating.kp}</div>
          <div>
            <h2 className="text-white text-sm">Рейтинг тайтла</h2>
            <div className="text-gray-500 text-xs">{title.votes.kp} оценок</div>
          </div>
        </div>

        {/* Контент поверх фона */}
        <div className="relative flex flex-col md:flex-row gap-6 py-8 px-4 sm:px-6 lg:px-8">
          <div className="mb-6 md:mb-0">
            <Image
              src={title.poster.url || "/default-poster.jpg"}
              width={320}
              height={360}
              objectFit="cover"
              alt={title.name}
              className="rounded-2xl shadow-2xl w-full md:w-[320px] h-auto"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-end w-full">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl md:text-4xl text-white">{title.name}</h1>
              <div className="flex flex-wrap gap-2 text-lg md:text-xl text-white">
                <span className="text-green-500">{title.rating.imdb}</span>
                <span>{title.year}</span>
                <span>{title.ageRating}+</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">{renderGenres()}</div>
            </div>

            {/* Кнопки остаются без изменений */}
            <div className="mt-4 flex flex-col md:flex-row gap-4">
              <button className="w-full md:w-auto text-white bg-pink-700 hover:bg-pink-800 transition-colors duration-200 px-4 py-2 rounded-lg">
                Смотреть
              </button>
              <button className="w-full md:w-auto text-white bg-gray-600 hover:bg-gray-800 transition-colors duration-200 px-4 py-2 rounded-lg">
                Буду смотреть
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Остальные секции  */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-2xl py-4">Описание</h1>
          <p className="text-gray-500 text-base md:text-lg">
            {title.description}
          </p>
        </div>
        <div>
          <h1 className="text-2xl py-8">Актёры и съёмочная группа</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
            {renderPersons()}
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-8">
        <div>
          <InfoBlock title={title} />
        </div>
      </section>
    </>
  );
};
