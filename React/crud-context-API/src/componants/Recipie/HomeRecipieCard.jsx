import React, { useContext } from 'react'
import { FunctionStore } from '../../context/FunctionalStore';
import { UserStore } from '../../context/userStore';

const HomeRecipieCard = ({ recipie, userName, email }) => {
  // Convert price string to number safely for display formatting
  const displayPrice = recipie.price ? parseFloat(recipie.price).toFixed(2) : "0.00";
  
  // Bring in context actions and states
  const { toggleInspectBluePrintOpen, handelAddToCart, handelRemoveCart, handelIncreaseQuantity, handelDecreaseQuantity } = useContext(FunctionStore)
  const { setEditRecipeData, currentUser, editRecipeData } = useContext(UserStore)

  // Purely check if this recipe exists inside the current user's guaranteed cartItems array
  //Array.prototype.includes() doesn't accept a callback function—it only checks for direct primitive values (like strings or numbers). To check for an object inside an array based on a property matching condition, you need to use Array.prototype.some().
  const isCurrentlyInCart = currentUser.cartItems.some(item => item.id === recipie.id);  //now iski need hai kyu ki ye hum pass kar rahe hai editCartData me isse hum dekh rahe hai ki jab hum blueprint view open kare tho fir humko dekna hai ki bhai ye logdin user ki cart me tha na ye nahi karge tho phie humne blueprin me rendering laga rakhi hai jisme hum conditional rendering karrahe hai by editItemData ke isCartItem se so usko hum override kar rahe hai
  
  // Extract quantity safely from the user's cart item if it exists, or fall back to a default preview value
  //now hume quality bhi th sync karwanihai so uske liye find karna hoga na item ko loggedin user ke CArtItem array me jo ki currentUser me hai me
  const matchingCartItem = currentUser.cartItems.find(item => item.id === recipie.id);
  const quantity = matchingCartItem ? matchingCartItem.quantitiy : null //yaha pe agar matching quantity nahi hui tho defalt pe tho chal jayega ui but matching item undefind hogi hand hum undefind ki property thodi access kar payege so for that reason conditional statement
  

  return (
    <div className='group bg-gray-900/20 border border-gray-900 rounded-2xl overflow-hidden flex flex-col hover:border-gray-800/80 transition-all duration-300 shadow-xl'>

      {/* Visual Media Container */}
      <div className='h-48 w-full overflow-hidden bg-gray-950 relative border-b border-gray-900/40 select-none'>
        <img
          src={recipie.imageLink}
          alt={recipie.recipeName}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100'
        />

        {/* Absolute Price Badge (Top Left) */}
        <div className='absolute top-3 left-3 text-[11px] font-black bg-gradient-to-r from-red-600 to-red-700 px-3 py-1 rounded-lg shadow-md tracking-wide text-white border border-red-500/20 shadow-red-950/50'>
          ${displayPrice}
        </div>

        {/* 
          ✅ EXTRA QUANTITY OVERLAY ADDED BACK ON THE IMAGE (Top Right)
        */}
        {isCurrentlyInCart && quantity > 0 && (
          <div className='absolute top-3 right-3 text-[10px] font-black bg-red-600 text-white px-2.5 py-1 rounded-md shadow-md shadow-black/50 tracking-wider uppercase border border-red-500/30 animate-in zoom-in-75 duration-200'>
            {quantity}x In Basket
          </div>
        )}

        {/* Absolute Duration Badge (Bottom Right) */}
        <div className='absolute bottom-3 right-3 text-[10px] font-bold bg-gray-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-gray-850 tracking-wider text-gray-300'>
          ⏱ {recipie.prepTime}
        </div>
      </div>

      {/* Information Content Elements */}
      <div className='p-5 flex flex-col flex-1 justify-between gap-4'>
        <div className='space-y-2.5'>

          {/* Title & Creator Block */}
          <div className='space-y-1.5'>
            <h3 className='font-bold text-md text-gray-200 group-hover:text-red-400 transition-colors line-clamp-1 tracking-wide'>
              {recipie.recipeName}
            </h3>

            {/* Split Metadata: Chef Name & System Account handle */}
            <div className='flex flex-col gap-0.5 text-[11px] text-gray-500 font-medium'>
              <p>
                Formulated by <span className='text-gray-400 font-semibold'>{recipie.chefName}</span>
              </p>
              {userName && (
                <p className='text-[10px] text-gray-600 font-normal'>
                  Posted by account: <span className='text-gray-500 font-medium'>@{userName}</span>
                </p>
              )}
            </div>
          </div>

          {/* Visual Ingredients Summary Cloud */}
          {recipie.ingredients && (
            <div className='flex flex-wrap gap-1.5 pt-1'>
              {recipie.ingredients.split(/[;,]/).slice(0, 3).map((ing, index) => (
                <span
                  key={index}
                  className='text-[9px] font-medium tracking-wide bg-gray-900/60 text-gray-400 px-2 py-0.5 rounded-md border border-gray-850/60 truncate max-w-[95px]'
                >
                  {ing.trim()}
                </span>
              ))}
              {recipie.ingredients.split(/[;,]/).length > 3 && (
                <span className='text-[9px] font-bold text-red-400/80 px-1 py-0.5'>
                  +{recipie.ingredients.split(/[;,]/).length - 3} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Action Button Controls Row */}
        <div className='flex items-center gap-2 pt-3 border-t border-gray-900'>
          <button
            type='button'
            onClick={() => {
              // Pass down contextual data values into modal layout cleanly
              setEditRecipeData({ ...recipie, userName: userName, email: email, isCartItem: isCurrentlyInCart,quantitiy:quantity}) //yaha pe humne overwrite kiya hai quality,iscaritem ko taki hum blueprint melive data sync karwa sake loggedin user ka and username and email ko add kiya hai overwrite nahi kiya hai taki hum unko bhi blueprint me dikha sake
              toggleInspectBluePrintOpen()
            }}
            className='flex-1 text-[11px] py-2.5 px-3 font-bold bg-gray-950 text-gray-400 border border-gray-900 hover:border-gray-800 rounded-xl hover:text-white transition-all cursor-pointer text-center tracking-wider uppercase active:scale-[0.98]'
          >
            Inspect Blueprint
          </button>

          {/* DYNAMIC QUANTITY INCREMENT & DECREMENT SLIDER ENGINE */}
          {isCurrentlyInCart && (
            <div className='flex items-center bg-gray-950 border border-gray-850 rounded-xl px-2 py-1 shadow-inner animate-in slide-in-from-right-3 duration-200 select-none'>
              <button
                type='button'
                onClick={() => {
                  handelDecreaseQuantity(matchingCartItem)
                }}
                className='px-2 py-0.5 text-gray-500 hover:text-white transition-colors text-xs font-bold cursor-pointer active:scale-75 outline-none'
              >
                -
              </button>
              <span className='px-1.5 text-[11px] font-bold text-gray-300 min-w-[12px] text-center'>
                {quantity}
              </span>
              <button
                type='button'
                onClick={() => {
                  handelIncreaseQuantity(matchingCartItem)
                }}
                className='px-2 py-0.5 text-gray-500 hover:text-white transition-colors text-xs font-bold cursor-pointer active:scale-75 outline-none'
              >
                +
              </button>
            </div>
          )}

          {/* Dynamic Favorited Status Icon Button */}
          <button
            type='button'
            onClick={() => {
              isCurrentlyInCart ?
                handelRemoveCart(recipie, userName, email) :
                handelAddToCart(recipie, userName, email)
            }}
            className={`px-2.5 py-2 text-xs border rounded-xl transition-all duration-300 cursor-pointer active:scale-[0.95] flex items-center justify-center outline-none shrink-0 ${
              isCurrentlyInCart
                ? 'bg-red-500/20 border-red-500 text-red-500 shadow-lg shadow-red-950/40'
                : 'bg-gray-950 border-gray-800 text-gray-500 hover:border-gray-700 hover:text-gray-300'
            }`}
          >
            {isCurrentlyInCart ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 fill-red-500 stroke-red-500 stroke-2 scale-105 animate-in zoom-in-75 duration-200"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.2}
                stroke="currentColor"
                className="w-3.5 h-3.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            )}
          </button>

        </div>
      </div>

    </div>
  )
}

export default HomeRecipieCard