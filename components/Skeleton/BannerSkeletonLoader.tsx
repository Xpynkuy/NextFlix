const BannerSkeletonLoader = () => {
  return (
    <div className="rounded-3xl w-full h-[500px] mx-auto relative overflow-hidden bg-gray-500/75 animate-pulse">
      {/* Контейнер для текста и кнопки */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
        {/* Надпись "Сейчас в тренде!" сверху */}
        <div className="h-6 w-32 bg-gray-400 rounded-full"></div>

        {/* Остальной контент */}
        <div>
          {/* Жанры */}
          <div className="flex flex-wrap gap-2">
            <div className="h-4 w-16 bg-gray-400 rounded-lg"></div>
            <div className="h-4 w-16 bg-gray-400 rounded-lg"></div>
          </div>

          {/* Название */}
          <div className="h-8 w-48 bg-gray-400 rounded-lg mt-2"></div>

          {/* Описание */}
          <div className="h-4 w-64 bg-gray-400 rounded-lg mt-2"></div>
          <div className="h-4 w-56 bg-gray-400 rounded-lg mt-2"></div>

          {/* Кнопка */}
          <div className="h-8 w-24 bg-gray-400 rounded-2xl mt-3"></div>
        </div>
      </div>
    </div>
  );
};

export { BannerSkeletonLoader };
