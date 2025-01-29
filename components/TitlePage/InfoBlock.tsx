import { CardData } from "@/types/types";


interface InfoBlockProps {
  title: CardData;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title }) => {
  return (
    <div className="py-20">
      <h2 className="text-2xl font-semibold mb-4">Информация</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Страны */}
        <div className="flex flex-col">
          <span className="font-semibold">Страны:</span>
          <span>{title.countries.map((country) => country.name).join(', ')}</span>
        </div>

        {/* Жанр */}
        <div className="flex flex-col">
          <span className="font-semibold">Жанр:</span>
          <span>{title.genres.map((genre) => genre.name).join(', ')}</span>
        </div>
       
        {/* Год */}
        <div className="flex flex-col">
          <span className="font-semibold">Год:</span>
          <span>{title.year}</span>
        </div>

        {/* Ограничения */}
        <div className="flex flex-col">
          <span className="font-semibold">Ограничения:</span>
          <span>{`${title.ageRating}+`}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;