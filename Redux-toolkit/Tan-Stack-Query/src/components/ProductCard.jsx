export const ProductCard = ({ product }) => {
  const { title, brand, price, discountPercentage, rating, thumbnail, availabilityStatus } = product;

  const discountedPrice = discountPercentage
    ? (price - (price * discountPercentage) / 100).toFixed(2)
    : price.toFixed(2);

  return (
    <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md">
      <div>
        {/* Product Image & Discount Badge */}
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          {discountPercentage > 0 && (
            <span className="absolute top-2 left-2 rounded-md bg-red-500 px-2 py-1 text-xs font-bold text-white">
              -{Math.round(discountPercentage)}%
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className="mt-3 flex flex-col gap-1">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="font-semibold uppercase tracking-wider text-gray-400">{brand}</span>
            <span className="flex items-center gap-1 font-semibold text-amber-500">
              ★ {rating ? rating.toFixed(1) : 'N/A'}
            </span>
          </div>

          <h3 className="line-clamp-1 text-base font-semibold text-gray-800" title={title}>
            {title}
          </h3>
        </div>
      </div>

      {/* Pricing & Action */}
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-gray-900">${discountedPrice}</span>
            {discountPercentage > 0 && (
              <span className="text-sm text-gray-400 line-through">${price.toFixed(2)}</span>
            )}
          </div>
          <span className="text-xs font-medium text-emerald-600">{availabilityStatus}</span>
        </div>

        <button className="w-full rounded-lg bg-black py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 active:scale-[0.98]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
