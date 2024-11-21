import React, { useState } from "react";

const initialPreferences = {
  is_lactose_intolerant: true,
  is_halal: false,
  is_vegan: true,
  is_vegetarian: true,
  is_allergic_to_gluten: false,
  is_jain: false,
};

const dietaryPreferences = [
  { key: "is_lactose_intolerant", label: "Lactose Intolerant" },
  { key: "is_halal", label: "Halal" },
  { key: "is_vegan", label: "Vegan" },
  { key: "is_vegetarian", label: "Vegetarian" },
  { key: "is_allergic_to_gluten", label: "Allergic to Gluten" },
  { key: "is_jain", label: "Jain" },
];

const recentOrders = ["Vegan Burger", "Gluten-Free Pizza", "Avocado Salad"];
const recentReviews = [
  { dish: "Vegan Burger", review: "Absolutely loved it!" },
  { dish: "Avocado Salad", review: "Very fresh and tasty." },
];

const initialUser = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  description:
    "Food enthusiast with a passion for exploring diverse cuisines. Always on the lookout for vegan and gluten-free options.",
  membershipTier: "Gold Member",
  loyaltyScore: 1200, // Loyalty score added here
  
};

export default function UserProfilePage() {
  const [user, setUser] = useState(initialUser);
  const [editing, setEditing] = useState(false);
  const [preferences, setPreferences] = useState(initialPreferences);

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const togglePreference = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen p-8">
      {/* Header Section */}
      <div className="shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 bg-gray-800 text-white">
        <div className="relative">
          <img
            src="https://www.artguru.ai/blogs/wp-content/uploads/sites/4/sites/6/2023/07/artguru-pfp.png"
            alt="User Avatar"
            className="w-32 h-32 rounded-full shadow-md"
          />
          <button
            onClick={handleEditToggle}
            className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-white shadow-md"
          >
            {editing ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 3.487a2.25 2.25 0 113.182 3.182L6.75 19.965l-4.097.533.533-4.097 13.676-13.676z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.009 6.527l-1.482 1.482"
                />
              </svg>

            )}
          </button>
        </div>
        <div className="text-center">
          {editing ? (
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleUserChange}
              className="text-2xl font-bold bg-gray-700 rounded-md p-2 w-full text-white"
            />
          ) : (
            <h1 className="text-2xl font-bold">{user.name}</h1>
          )}
          <p className="text-gray-300">
            {editing ? (
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleUserChange}
                className="bg-gray-700 rounded-md p-2 w-full text-white"
              />
            ) : (
              user.email
            )}
          </p>
        </div>
      </div>


      {/* About Me */}
      <div className="shadow-lg rounded-lg p-6 mt-6 bg-gray-800 text-white lg:col-span-2">
        <h2 className="text-lg font-semibold mb-4">About Me</h2>
        {editing ? (
          <textarea
            name="description"
            value={user.description}
            onChange={handleUserChange}
            className="w-full bg-gray-700 rounded-md p-2 text-white"
            rows="4"
          ></textarea>
        ) : (
          <p className="text-gray-300">{user.description}</p>
        )}
      </div>

      {/* Information Section */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Loyalty Score */}
        <div className="shadow-lg rounded-lg p-6 bg-gray-800 text-white">
          <h2 className="text-lg font-semibold mb-4">Loyalty Score</h2>
          <p className="text-4xl font-bold text-yellow-400">{user.loyaltyScore}</p>
        </div>

        {/* Membership Tier */}
        <div className="shadow-lg rounded-lg p-6 bg-gray-800 text-white">
          <h2 className="text-lg font-semibold mb-4">Membership Tier</h2>
          <p className="text-2xl font-bold text-orange-400">
          Gold Member
          </p>
        </div>

      

        {/* Favorite Dishes */}
        <div className="shadow-lg rounded-lg p-6 bg-gray-800 text-white">
          <h2 className="text-lg font-semibold mb-4">Favorite Dishes</h2>
          <p className="text-4xl font-bold text-green-400">12</p>
        </div>


        {/* Recent Orders */}
        <div className="shadow-lg rounded-lg p-6 bg-gray-800 text-white">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <ul className="text-gray-300 list-disc pl-6">
            {recentOrders.map((order, index) => (
              <li key={index}>{order}</li>
            ))}
          </ul>
        </div>

        {/* Dietary Preferences */}
        <div className="shadow-lg rounded-lg p-6 bg-gray-800 text-white">
          <h2 className="text-lg font-semibold mb-4">Dietary Preferences</h2>
          <div className="flex flex-wrap gap-2">
            {dietaryPreferences.map((preference) => (
              <button
                key={preference.key}
                onClick={() => togglePreference(preference.key)}
                className={`px-4 py-2 rounded-full text-sm ${
                  preferences[preference.key]
                    ? "bg-purple-800 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {preference.label}
              </button>
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="shadow-lg rounded-lg p-6 bg-gray-800 text-white">
          <h2 className="text-lg font-semibold mb-4">Recent Reviews</h2>
          <ul className="text-gray-300 list-disc pl-6">
            {recentReviews.map((review, index) => (
              <li key={index}>
                <strong>{review.dish}:</strong> {review.review}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
