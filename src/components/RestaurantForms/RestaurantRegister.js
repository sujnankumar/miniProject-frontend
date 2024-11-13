import React, { useState } from 'react';

const RestaurantRegister = () => {
  const [formData, setFormData] = useState({
    password: '',
    name: '',
    address: '',
    phone: '',
    email: '',
    cuisine: '',
    rating: '',
    is_vegan: false,
    is_vegetarian: false,
    is_halal: false,
    description: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='w-full py-10'>
      <form
        onSubmit={handleSubmit}
        className="bg-blue-950 bg-opacity-5 rounded-lg text-white shadow-md p-6 w-3/5 mx-auto outline outline-2 outline-white"
        style={{ backdropFilter: 'blur(2px)' }}
      >
        <h2 className="text-3xl font-semibold text-white mb-8 text-center">
          Register Your Restaurant
        </h2>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-100 text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-100 text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-gray-100 text-sm font-medium mb-2" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-100 text-sm font-medium mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-100 text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        {/* Cuisine */}
        <div className="mb-4">
          <label className="block text-gray-100 text-sm font-medium mb-2" htmlFor="cuisine">
            Cuisine
          </label>
          <input
            type="text"
            id="cuisine"
            name="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label className="block text-gray-100 text-sm font-medium mb-2" htmlFor="rating">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            step="0.1"
          />
        </div>

        {/* Dietary Preferences */}
        <div className="mb-4">
          <span className="block text-gray-100 text-sm font-medium mb-2">Dietary Preferences</span>
          <div className="flex gap-4 flex-wrap">
            <label className="flex items-center">
              <input type="checkbox" name="is_vegan" checked={formData.is_vegan} onChange={handleChange} />
              <span className="ml-2">Vegan</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="is_vegetarian" checked={formData.is_vegetarian} onChange={handleChange} />
              <span className="ml-2">Vegetarian</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="is_halal" checked={formData.is_halal} onChange={handleChange} />
              <span className="ml-2">Halal</span>
            </label>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-100 text-sm font-medium mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
        >
          Register Restaurant
        </button>
      </form>
    </div>
  );
};

export default RestaurantRegister;