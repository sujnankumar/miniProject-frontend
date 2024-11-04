import React from 'react';

export default function FoodInfo() {
  const foodInfo = {
    name: "Chicken Biriyani",
    itemsUsed: ["Chicken", "Authentic Spices", "Saffron Rice", "Yogurt Marinade"],
    nutrients: ["High Protein", "Essential Vitamins", "Low Carbs"],
    price: "$24.99",
    description:
      "A traditional Indian dish made with premium spices and tender chicken, cooked to perfection and served with fragrant saffron rice.",
    chefSpecial: true,
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 py-10 px-4">
      <div className="w-full max-w-4xl bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12">
        {/* Title and Highlight */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">{foodInfo.name}</h1>
          {foodInfo.chefSpecial && (
            <span className="text-sm font-semibold text-yellow-400 bg-yellow-800 py-1 px-3 rounded-full">
              Chef's Special
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-8">{foodInfo.description}</p>

        {/* Food Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Ingredients */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              {foodInfo.itemsUsed.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Nutrients */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Nutrients</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              {foodInfo.nutrients.map((nutrient, index) => (
                <li key={index}>{nutrient}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Price and Order Button */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-700">
          <p className="text-3xl font-bold text-green-400">{foodInfo.price}</p>
          <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-150">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
