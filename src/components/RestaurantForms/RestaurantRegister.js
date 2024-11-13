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
    <div className="w-full py-10">
      
      <form onSubmit={handleSubmit} className="bg-blue-950 bg-opacity-5 rounded-lg text-white shadow-md p-6 w-3/5 mx-auto outline outline-2 outline-white">
        <h1 className="text-3xl font-semibold text-white mb-8 text-center">
          Register Your Restaurant
        </h1>
       

          {/* Name */}
          <div className='mb-4'>
            <label className="block font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block font-medium mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          {/* Cuisine */}
          <div>
            <label className="block font-medium mb-2">Cuisine</label>
            <input
              type="text"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block font-medium mb-2">Rating</label>
            <input
              type="number"
              step="0.1"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Dietary Options */}
          <div className="flex space-x-4">
            <div>
              <label className="block font-medium mb-2">Vegan</label>
              <input
                type="checkbox"
                name="is_vegan"
                checked={formData.is_vegan}
                onChange={handleChange}
                className="h-6 w-6 text-green-600 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Vegetarian</label>
              <input
                type="checkbox"
                name="is_vegetarian"
                checked={formData.is_vegetarian}
                onChange={handleChange}
                className="h-6 w-6 text-green-600 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Halal</label>
              <input
                type="checkbox"
                name="is_halal"
                checked={formData.is_halal}
                onChange={handleChange}
                className="h-6 w-6 text-green-600 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold text-lg rounded-lg hover:bg-green-700 transition duration-150 focus:outline-none"
          >
            Register Restaurant
          </button>
        </form>
    </div>
  );
};

export default RestaurantRegister;
