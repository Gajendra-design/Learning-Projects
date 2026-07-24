import React, { useContext } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { MyStore } from '../Context/MyStore';

const CartSidebarCard = ({ item }) => {
  // Fallback to 1 if quantity is not explicitly set in the item object
  const quantity = item.quantity; 
  const unitPrice = item?.price || 0;
  const totalPrice = (unitPrice * quantity).toFixed(2);

  const {handelRemoveCartItem,increeaseItemQuantity,decreaseItemQuantity} = useContext(MyStore)

  return (
    <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-4 flex items-center gap-4 hover:border-slate-700 transition duration-200 shadow-sm">
      {/* Product Thumbnail */}
      <div className="w-16 h-16 rounded-xl bg-slate-950/80 border border-slate-800 p-2 shrink-0 flex items-center justify-center">
        <img
          src={item?.image}
          alt={item?.title || 'Product'}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0 space-y-1">
        {/* Title */}
        <h3 className="text-sm font-bold text-white truncate" title={item?.title}>
          {item?.title}
        </h3>

        {/* Pricing */}
        <div className="text-xs text-indigo-400 font-extrabold">
          ${totalPrice}
          <span className="text-[10px] text-slate-500 font-normal ml-1">
            (${unitPrice.toFixed(2)} each)
          </span>
        </div>

        {/* Quantity Controls & Remove Action */}
        <div className="flex items-center gap-2 pt-1">
          <div className="flex items-center bg-slate-950/80 border border-slate-800 rounded-lg p-1">
            <button 
              onClick={()=>{decreaseItemQuantity(item)}}
              type="button"
              className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded transition cursor-pointer"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="text-xs font-bold text-white px-2.5">
              {quantity}
            </span>
            <button 
              onClick={()=>{increeaseItemQuantity(item)}}
              type="button"
              className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded transition cursor-pointer"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          <button
            onClick={()=>{handelRemoveCartItem(item)}}
            type="button"
            title="Remove item"
            className="p-1.5 text-slate-500 hover:text-rose-400 transition cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebarCard;