
import { CardData } from "@/types/types";


import { BannerCard } from "./BannerCard";

interface CardListProps {
  items: CardData[];
}

const BannerList: React.FC<CardListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <BannerCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export { BannerList };