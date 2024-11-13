import React, { useState } from 'react';

const AddDishForm = () => {
  // State to store dish details
  const [dish, setDish] = useState({
    name: '',
    protein: '',
    fat: '',
    carbs: '',
    energy: '',
    image: null,
  });

  // State to manage dietary preferences
  const [preferences, setPreferences] = useState({
    lactoseFree: false,
    glutenFree: false,
    vegetarian: false,
    halal: false,
  });

  // Toggle preference selection
  const togglePreference = (preference) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [preference]: !prevPreferences[preference],
    }));
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDish((prevDish) => ({
      ...prevDish,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle image file upload
  const handleImageUpload = (e) => {
    setDish((prevDish) => ({
      ...prevDish,
      image: e.target.files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dish added:', dish);
    // Add your logic to send this data to the backend or display it
  };

  return (
    <div className='w-full py-10'>
      <form onSubmit={handleSubmit} className="bg-blue-950 bg-opacity-5 rounded-lg text-white shadow-md p-6 w-3/5 mx-auto outline outline-2 outline-white" style={{ backdropFilter: 'blur(2px)' }}>
        <h2 className="text-3xl font-semibold text-white mb-8 text-center">Add New Dish</h2>

        {/* Dish Name */}
        <div className="mb-4">
          <label className="block text-gray-100 text-sm font-medium mb-2" htmlFor="name">
            Dish Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={dish.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-100 text-sm font-medium mb-2" htmlFor="image">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageUpload}
            className="w-full text-gray-300"
            accept="image/*"
          />
        </div>

        {/* Macronutrient Inputs */}
        {['protein', 'fat', 'carbs', 'energy'].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block text-gray-100 text-sm font-medium mb-2" htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)} (g)
            </label>
            <input
              type="number"
              id={field}
              name={field}
              value={dish[field]}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              min="0"
              step="0.1"
            />
          </div>
        ))}

        {/* Dietary Options */}
        <div className="mb-4">
          <span className="block text-gray-100 text-sm font-medium mb-2">Dietary Preferences</span>
          <div className="flex gap-4 flex-wrap">
            {Object.keys(preferences).map((preference) => (
              <button
                key={preference}
                type="button"
                onClick={() => togglePreference(preference)}
                className={`px-3 py-2 rounded-md font-medium text-sm transition-colors ${preferences[preference] ? 'bg-blue-500 text-white' : 'bg-gray-   text-gray-700'
                  }`}
              >
                {preference.replace(/([A-Z])/g, ' $1')}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add Dish
        </button>
      </form>
    </div>
  );
};

export default AddDishForm;
