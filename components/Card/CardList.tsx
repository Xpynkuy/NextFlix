import { CardData } from '@/types/types';
import { Card } from '../Card/Card';
import { CardSkeleton } from '../Skeleton/CardSkeleton';


interface CardListProps {
  items: CardData[];
  type: string;
  isLoading?: boolean; // Добавляем пропс для индикации загрузки
}

const CardList: React.FC<CardListProps> = ({ items, type, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {Array.from({ length: 10 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {items.map((item) => (
        <Card key={item.id} data={item} type={type} />
      ))}
    </div>
  );
};

export { CardList };