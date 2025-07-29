import React, { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiMapPin, FiCamera } from 'react-icons/fi';

function EditProfile() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    address: '123 Main Street, City, State, 123456',
    photo: '',
  });
  const [photoPreview, setPhotoPreview] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, photo: file });
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center py-10 px-2 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-xl">
        {/* Card background with gradient and shadow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-30 blur-lg z-0" />
        <div className="relative bg-white rounded-3xl shadow-2xl p-10 z-10 overflow-visible">
          {/* Floating profile photo */}
          <div className="flex flex-col items-center mb-8 -mt-20">
            <div className="relative h-32 w-32 mb-2 shadow-lg border-4 border-white rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center">
              <img
                src={photoPreview || '/NextRead.png'}
                alt="Profile"
                className="h-28 w-28 rounded-full object-cover border-4 border-white shadow-md"
              />
              <label htmlFor="photo-upload" className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-pink-500 border-2 border-white shadow">
                <FiCamera />
                <input id="photo-upload" type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
              </label>
            </div>
            <span className="text-gray-700 text-sm mt-2">Profile Photo</span>
          </div>
          <h2 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Edit Profile</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex items-center border-2 border-blue-200 rounded-lg px-3 py-2 bg-blue-50 focus-within:border-pink-400 transition">
              <FiUser className="text-blue-400 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full outline-none bg-transparent text-gray-800"
                value={profile.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center border-2 border-purple-200 rounded-lg px-3 py-2 bg-purple-50 focus-within:border-pink-400 transition">
              <FiMail className="text-purple-400 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full outline-none bg-transparent text-gray-800"
                value={profile.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center border-2 border-pink-200 rounded-lg px-3 py-2 bg-pink-50 focus-within:border-blue-400 transition">
              <FiPhone className="text-pink-400 mr-2" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full outline-none bg-transparent text-gray-800"
                value={profile.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center border-2 border-blue-200 rounded-lg px-3 py-2 bg-blue-50 focus-within:border-purple-400 transition">
              <FiMapPin className="text-blue-400 mr-2" />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="w-full outline-none bg-transparent text-gray-800"
                value={profile.address}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 rounded-xl hover:from-pink-600 hover:to-blue-600 transition font-bold text-lg shadow-lg mt-4">Save Changes</button>
            {success && <div className="text-green-600 text-center font-medium mt-2">Profile updated successfully!</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile; 