"use client";

interface PaginationProps {
  hasMore: boolean;
  onLoadMore: () => void;
  loading: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({ hasMore, onLoadMore, loading }) => {
  return (
    <div>
      {/* Кнопка "Загрузить еще" */}
      {hasMore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={onLoadMore}
            disabled={loading}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? "Загрузка..." : "Загрузить еще"}
          </button>
        </div>
      )}

      {/* Сообщение, если данные закончились */}
      {!hasMore && (
        <p className="text-center text-gray-500 mt-6">Вы достигли конца списка.</p>
      )}
    </div>
  );
};