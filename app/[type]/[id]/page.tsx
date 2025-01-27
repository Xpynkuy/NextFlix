import { TitlePageContent } from '@/components/TitlePage/TitlePageContent';
import { getTitleById } from '@/services/getTitle';

import { notFound } from 'next/navigation';

interface Props {
    params: {
        type: string;
        id: string;
    }
}

export default async function TitlePage({ params }: Props) {
    const {type, id } = params;
  
    // Получаем данные о тайтле
    const title = await getTitleById(id);
  
    // Если тайтл не найден, показываем 404
    if (!title) {
      notFound();
    }
  
    // Передаем данные в компонент верстки
    return <TitlePageContent title={title} />;
  }


