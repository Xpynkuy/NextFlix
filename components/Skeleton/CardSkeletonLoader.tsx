interface SkeletonLoaderProps {
  count?: number; 
  className?: string; 
}

const CardSkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  count = 1,
  className,
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-3xl w-58 h-80 bg-gray-500/75 animate-pulse ${className}`}
        >
          <div className="absolute bottom-0 m-3 w-full">
            <div className="rounded-lg bg-gray-400/75 max-w-max px-1 h-6 w-24 mb-2"></div>
            <div className="h-6 w-48 bg-gray-400 mb-2"></div>
            <div className="h-4 w-56 bg-gray-400 mb-1"></div>
            <div className="h-4 w-52 bg-gray-400"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export { CardSkeletonLoader };
