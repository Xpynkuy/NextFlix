import { TitleData } from "@/types/types";
import { Card } from "../Card/Card";
import { CardSkeletonLoader } from "../Skeleton/CardSkeletonLoader";

interface CardListProps {
  items: TitleData[];
  type: string;
  isLoading?: boolean;
}

const CardList: React.FC<CardListProps> = ({ items, type, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <CardSkeletonLoader count={10} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-8">
      {items.map((item) => (
        <Card key={item.id} data={item} type={type} />
      ))}
    </div>
  );
};

export { CardList };
