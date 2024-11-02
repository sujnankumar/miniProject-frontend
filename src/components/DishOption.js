import React, { useState } from 'react';

const DishOption = ({ dish }) => {
  const [flipped, setFlipped] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleCancel = (e) => {
    e.stopPropagation();  // Prevents the card from flipping due to the handleFlip click
    setFlipped(false);    // Flip the card back to front side
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div
      className="w-28 h-40 sm:w-32 md:w-36 lg:w-40 perspective"
      onClick={!flipped ? handleFlip : undefined}  // Flip only when on the front side
      style={{ perspective: '1000px' }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${
          flipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          position: 'relative',
        }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-gray-700 rounded-xl shadow-lg text-center backface-hidden"
          style={{
            transform: 'rotateY(0deg)',
          }}
        >
          <img src={dish.image} alt={dish.name} className="w-full h-2/3 object-cover rounded-md mb-2" />
          <p className="text-gray-200 text-sm">{dish.name}</p>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-gray-700 rounded-xl shadow-lg text-center backface-hidden"
          style={{
            transform: 'rotateY(180deg)',
          }}
        >
          <p className="text-gray-200 mt-4 h-1/5">{dish.name}</p>
          
          {/* Quantity Selector */}
          <div className="flex justify-center items-center gap-2 mt-3">
            <button
              className="bg-gray-600 text-white px-2 py-1 rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                decreaseQuantity();
              }}
            >
              -
            </button>
            <span className="text-gray-200 text-lg h-2/5">{quantity}</span>
            <button
              className="bg-gray-600 text-white px-2 py-1 rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                increaseQuantity();
              }}
            >
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-2 mt-4">
            <button className="bg-blue-500 text-white px-2 py-1 rounded-md">Add</button>
            <button 
              className="bg-red-500 text-white px-2 py-1 rounded-md"
              onClick={handleCancel}  // Flip back to front side on cancel
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishOption;
