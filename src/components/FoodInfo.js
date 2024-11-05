import React from 'react';

export default function FoodInfoModal({ onClose }) {
  const foodInfo = {
    name: "Chicken Biriyani",
    description:
      "A traditional Indian dish made with premium spices and tender chicken, cooked to perfection and served with fragrant saffron rice.",
    ingredients: ["Chicken", "Authentic Spices", "Saffron Rice", "Yogurt Marinade"],
    nutrients: ["High Protein", "Essential Vitamins", "Low Carbs"],
    price: "$24.99",
    chefSpecial: true,
    protein: 20,
    fat: 15,
    energy: 350,
    carbs: 40,
    isLactoseFree: true,
    isHalal: true,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: true,
    isJain: false,
    isSoyFree: true,
    isAvailable: true,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-4xl bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
        >
          &times;
        </button>

        {/* Title and Highlight */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-100">{foodInfo.name}</h1>
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
              {foodInfo.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Nutritional Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Nutritional Information</h2>
            <ul className="text-gray-300 space-y-2">
              <li>Protein: {foodInfo.protein}g</li>
              <li>Fat: {foodInfo.fat}g</li>
              <li>Energy: {foodInfo.energy} kcal</li>
              <li>Carbs: {foodInfo.carbs}g</li>
            </ul>
          </div>
        </div>

        {/* Dietary Information */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Lactose-Free', value: foodInfo.isLactoseFree },
            { label: 'Halal', value: foodInfo.isHalal },
            { label: 'Vegan', value: foodInfo.isVegan },
            { label: 'Vegetarian', value: foodInfo.isVegetarian },
            { label: 'Gluten-Free', value: foodInfo.isGlutenFree },
            { label: 'Jain', value: foodInfo.isJain },
            { label: 'Soy-Free', value: foodInfo.isSoyFree },
            { label: 'Available', value: foodInfo.isAvailable },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center px-3 py-2 rounded-lg font-semibold text-sm ${
                item.value ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
              }`}
            >
              {item.label}
            </div>
          ))}
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
