import React from 'react';
import { FaPhone, FaEnvelope, FaPizzaSlice, FaUtensils } from 'react-icons/fa';


const mockData = {
  user: {
    name: 'John Doe',
    phone: '+91-9876543210',
    email: 'john.doe@example.com',
    description: 'A food enthusiast who loves exploring new cuisines.',
    profilePhoto: 'https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg',
  },
  preferences: {
    is_lactose_intolerant: false,
    is_halal: true,
    is_vegan: false,
    is_vegetarian: false,
    is_allergic_to_gluten: true,
    is_jain: false,
  },
  orders: [
    { id: 1, restaurant: 'The Spice Club', total: 1200, date: '2024-11-18' },
    { id: 2, restaurant: 'Vegan Delights', total: 800, date: '2024-11-15' },
  ],
  favorites: {
    restaurants: ['The Spice Club', 'Vegan Delights'],
    dishes: ['Paneer Tikka', 'Vegan Burger'],
  },
  conversations: [
    { id: 1, restaurant: 'The Spice Club', content: 'Can I order a Jain thali?', date: '2024-11-18' },
    { id: 2, restaurant: 'Vegan Delights', content: 'Is the vegan burger soy-free?', date: '2024-11-15' },
  ],
};

export default function UserProfile() {
  const { user, preferences, orders, favorites, conversations } = mockData;

  return (
    <div className="py-8 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-gray-900 text-gray-200 shadow-sm shadow-gray-500 rounded-lg overflow-hidden">
        {/* User Info Section */}
        <div className="flex items-center p-6 border-b border-gray-700">
          <img
            src={user.profilePhoto}
            alt="Profile"
            className="w-24 h-24 rounded-full border border-gray-600"
          />
          <div className="ml-6">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-400">{user.description}</p>
            <div className="mt-2 flex items-center text-sm text-gray-400">
              <FaPhone className="mr-2" />
              {user.phone}
            </div>
            <div className="mt-1 flex items-center text-sm text-gray-400">
              <FaEnvelope className="mr-2" />
              {user.email}
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-lg font-bold mb-4">Dietary Preferences</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            {Object.entries(preferences).map(([key, value]) => (
              <li
                key={key}
                className={`px-4 py-2 rounded ${
                  value ? 'bg-green-600 text-green-100' : 'bg-orange-600 text-red-100'
                }`}
              >
                {key.replace(/_/g, ' ')}
              </li>
            ))}
          </ul>
        </div>

        {/* Order History */}
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-lg font-bold mb-4">Order History</h2>
          <ul className="space-y-4">
            {orders.map((order) => (
              <li
                key={order.id}
                className="flex justify-between items-center bg-gray-800 p-4 rounded"
              >
                <div>
                  <h3 className="font-semibold">{order.restaurant}</h3>
                  <p className="text-sm text-gray-400">{order.date}</p>
                </div>
                <p className="font-bold">₹{order.total}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Favorites Section */}
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-lg font-bold mb-4">Favorites</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">Restaurants</h3>
              <ul className="mt-2 text-sm">
                {favorites.restaurants.map((rest, index) => (
                  <li key={index} className="mt-1 flex items-center">
                    <FaUtensils className="inline-block mr-2 text-gray-400" />
                    {rest}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Dishes</h3>
              <ul className="mt-2 text-sm">
                {favorites.dishes.map((dish, index) => (
                  <li key={index} className="mt-1 flex items-center">
                    <FaPizzaSlice className="inline-block mr-2 text-gray-400" />
                    {dish}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Recent Conversations */}
        <div className="p-6">
          <h2 className="text-lg font-bold mb-4">Recent Conversations</h2>
          <ul className="space-y-4">
            {conversations.map((chat) => (
              <li
                key={chat.id}
                className="flex justify-between items-center bg-gray-800 p-4 rounded"
              >
                <div>
                  <h3 className="font-semibold">{chat.restaurant}</h3>
                  <p className="text-sm text-gray-300">{chat.content}</p>
                </div>
                <p className="text-sm text-gray-400">{chat.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
