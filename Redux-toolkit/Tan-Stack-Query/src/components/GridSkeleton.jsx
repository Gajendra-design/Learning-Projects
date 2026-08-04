export const GridSkeleton = () => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
    {Array.from({ length: 8 }).map((_, index) => (
      <div key={index} className="animate-pulse rounded-xl border border-gray-200 bg-white p-4">
        <div className="aspect-square w-full rounded-lg bg-gray-200" />
        <div className="mt-3 h-4 w-1/3 rounded bg-gray-200" />
        <div className="mt-2 h-5 w-3/4 rounded bg-gray-200" />
        <div className="mt-4 h-6 w-1/2 rounded bg-gray-200" />
        <div className="mt-3 h-10 w-full rounded-lg bg-gray-200" />
      </div>
    ))}
  </div>
);
