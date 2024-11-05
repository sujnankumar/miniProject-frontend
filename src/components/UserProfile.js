import React, { useState } from 'react';

const UserProfile = () => {
  // Sample user data, which can later be fetched from a backend
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Passionate about coding and cybersecurity.',
    profilePicture: '',
    preferences: {
      halal: false,
      vegan: false,
      vegetarian: false,
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
    setUpdatedUser(user); // Reset changes on cancel
  };

  // Handle changes to input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({ ...prev, [name]: value }));
  };

  // Handle profile picture upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedUser((prev) => ({ ...prev, profilePicture: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle preference changes
  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setUpdatedUser((prev) => ({
      ...prev,
      preferences: { ...prev.preferences, [name]: checked },
    }));
  };

  // Save changes and update the profile
  const saveChanges = () => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
<div className="h-full w-full flex justify-center items-center">
  <div className="flex items-center bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-4xl">
    {/* Profile Picture */}
    <div className="w-1/5 h-36 flex-shrink-0 border border-gray-950">
      <img
        src={user.profilePicture || 'https://via.placeholder.com/150'}
        alt="Profile"
        className="w-full h-full rounded-full object-cover"
      />
      {isEditing && (
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mt-2 w-full"
        />
      )}
    </div>

    {/* Profile Details */}
    <div className="flex flex-col items-start w-1/5">
    </div>
    <div className="flex flex-col items-start w-4/5">
      {!isEditing ? (
        <>
          {/* Name */}
          <h2 className="text-3xl font-bold text-gray-800 text-center w-full">
            {user.name}
          </h2>
          <p className="text-gray-600 text-lg text-center w-full">{user.email}</p>
          <p className="text-gray-700 mt-2 text-center w-full">{user.bio}</p>

          {/* Preferences Display */}
          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            {user.preferences.halal && (
              <span className="px-3 py-1 bg-blue-950 text-gray-100 rounded text-sm">
                Halal
              </span>
            )}
            {user.preferences.vegan && (
              <span className="px-3 py-1 bg-blue-950 text-gray-100 rounded text-sm">
              Vegan
            </span>
          )}
            {user.preferences.vegetarian && (
              <span className="px-3 py-1 bg-blue-950 text-gray-100 rounded text-sm">
              Vegetarian
            </span>
          )}
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            name="name"
            value={updatedUser.name}
            onChange={handleChange}
            className="border p-3 w-full mb-2 rounded text-lg"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={updatedUser.email}
            onChange={handleChange}
            className="border p-3 w-full mb-2 rounded text-lg"
            placeholder="Email"
          />
          <textarea
            name="bio"
            value={updatedUser.bio}
            onChange={handleChange}
            className="border p-3 w-full mb-2 rounded text-lg"
            placeholder="Bio"
          />

          {/* Preferences Section */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Preferences:</h3>
            <div className="flex flex-col">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="halal"
                  checked={updatedUser.preferences.halal}
                  onChange={handlePreferenceChange}
                  className="mr-2"
                />
                Halal
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="vegan"
                  checked={updatedUser.preferences.vegan}
                  onChange={handlePreferenceChange}
                  className="mr-2"
                />
                Vegan
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="vegetarian"
                  checked={updatedUser.preferences.vegetarian}
                  onChange={handlePreferenceChange}
                  className="mr-2"
                />
                Vegetarian
              </label>
            </div>
          </div>
        </>
      )}

      {/* Edit/Save and Cancel buttons */}
      <div className="mt-4 flex justify-center w-full">
        {isEditing ? (
          <>
            <button
              onClick={saveChanges}
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
            >
              Save
            </button>
            <button
              onClick={toggleEdit}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={toggleEdit}
            className="bg-blue-500 text-white px-5 py-2 rounded text-lg"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  </div>
</div>
  );
};

export default UserProfile;
