import React, { useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Full-stack developer with a passion for cybersecurity and modern web technologies.',
    profilePicture: '',
    preferences: {
      halal: false,
      vegan: false,
      vegetarian: false,
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    setUpdatedUser(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({ ...prev, [name]: value }));
  };

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

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setUpdatedUser((prev) => ({
      ...prev,
      preferences: { ...prev.preferences, [name]: checked },
    }));
  };

  const saveChanges = () => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
        
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row">
          
          {/* Profile Picture Section */}
          <div className="md:w-1/3 p-6 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
              <img
                src={user.profilePicture || 'https://via.placeholder.com/150'}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {isEditing && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute bottom-0 left-0 w-full text-center bg-gray-800 text-gray-300 opacity-80 text-sm py-1"
                />
              )}
            </div>
          </div>

          {/* User Details Section */}
          <div className="md:w-2/3 p-8">
            <div className="text-left text-white space-y-4">
              {!isEditing ? (
                <>
                  <h2 className="text-3xl font-extrabold">{user.name}</h2>
                  <p className="text-gray-400">{user.email}</p>
                  <p className="text-gray-300 mt-2 text-sm">{user.bio}</p>

                  {/* Preferences Display */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-100">Preferences:</h3>
                    <ul className="flex space-x-4 text-gray-400">
                      {user.preferences.halal && <li className="bg-gray-700 px-3 py-1 rounded-full">Halal</li>}
                      {user.preferences.vegan && <li className="bg-gray-700 px-3 py-1 rounded-full">Vegan</li>}
                      {user.preferences.vegetarian && <li className="bg-gray-700 px-3 py-1 rounded-full">Vegetarian</li>}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    name="name"
                    value={updatedUser.name}
                    onChange={handleChange}
                    className="border border-gray-700 bg-gray-800 p-2 w-full mb-3 rounded text-gray-100"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={updatedUser.email}
                    onChange={handleChange}
                    className="border border-gray-700 bg-gray-800 p-2 w-full mb-3 rounded text-gray-100"
                    placeholder="Email"
                  />
                  <textarea
                    name="bio"
                    value={updatedUser.bio}
                    onChange={handleChange}
                    className="border border-gray-700 bg-gray-800 p-2 w-full mb-3 rounded text-gray-100"
                    placeholder="Bio"
                  />

                  {/* Preferences Section */}
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-100">Preferences:</h3>
                    <div className="flex flex-col space-y-2 mt-2">
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
              <div className="mt-6 flex space-x-4">
                {isEditing ? (
                  <>
                    <button
                      onClick={saveChanges}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition duration-200"
                    >
                      Save
                    </button>
                    <button
                      onClick={toggleEdit}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition duration-200"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={toggleEdit}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-200"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
