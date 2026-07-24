import React, { useContext } from 'react';
import { X, ShoppingBag, ArrowRight, ShoppingCart } from 'lucide-react';
import { MyStore } from '../../../Context/MyStore';
import CartSidebarCard from '../../CartSidebarCard';

export default function CartSidebar() {
  const { isCartOpen, setIsCartOpen, loggedInUser, handelClearCart } = useContext(MyStore);

  const cartItems = loggedInUser.cartItems;

  // Calculate total item quantity 
  const totalItemCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // Calculate total price dynamically
  const totalPrice = cartItems
    .reduce((acc, item) => acc + (item.price) * (item.quantity), 0)
    .toFixed(2);

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-all duration-500 ${
        isCartOpen
          ? 'visible opacity-100 ease-out'
          : 'invisible opacity-0 pointer-events-none ease-in delay-500'
      }`}
    >
      {/* ================= BACKDROP OVERLAY ================= */}
      <div
        onClick={() => setIsCartOpen(false)}
        className={`absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-500 cursor-pointer ${
          isCartOpen ? 'opacity-100 ease-out' : 'opacity-0 ease-in'
        }`}
      />

      {/* ================= SLIDING DRAWER ================= */}
      <div
        className={`absolute top-0 right-0 h-full w-full max-w-md bg-slate-950 border-l border-slate-800 shadow-2xl flex flex-col justify-between transition-transform duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          transitionTimingFunction: isCartOpen
            ? 'cubic-bezier(0.25, 1, 0.5, 1)'
            : 'cubic-bezier(0.32, 0, 0.67, 0)',
        }}
      >
        {/* ================= HEADER ================= */}
        <div className="p-5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-bold text-white tracking-wide">
              Cart
            </h2>
            <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full ml-1">
              {totalItemCount} {totalItemCount === 1 ? 'item' : 'items'}
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            title="Close cart"
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white transition duration-200 border border-slate-700/50 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ================= CART ITEMS LIST / EMPTY STATE ================= */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-5 space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartSidebarCard key={item.id} item={item} />
            ))
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-600 shadow-inner">
                <ShoppingCart className="w-10 h-10 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">
                  Your cart is empty
                </h3>
                <p className="text-xs text-slate-400 max-w-[200px] leading-relaxed">
                  Looks like you haven't added anything to your cart yet.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ================= FOOTER / CHECKOUT ================= */}
        <div className="p-5 bg-slate-900 border-t border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Total
            </span>
            <span className="text-2xl font-black text-white tracking-tight">
              ${totalPrice}
            </span>
          </div>

          <button
            disabled={cartItems.length === 0}
            onClick={()=>{setIsCartOpen(false)}}
            className={`w-full flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl transition duration-200 shadow-lg ${
              cartItems.length > 0
                ? 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-indigo-500/20 active:scale-[0.98] cursor-pointer'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed shadow-none'
            }`}
          >
            <span>Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {cartItems.length > 0 && (
            <button
              onClick={handelClearCart}
              className="w-full text-center text-xs font-semibold text-slate-500 hover:text-rose-400 transition cursor-pointer"
            >
              Clear cart
            </button>
          )}
        </div>

      </div>
    </div>
  );
}