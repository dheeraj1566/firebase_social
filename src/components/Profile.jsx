import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function Profile() {
  const navigate = useNavigate(); 

  const handleEditClick = () => {
    navigate('/profile/edit');
  };

  return (
    <>
      <div className="w-full mx-auto p-6 bg-slate-500">
        <div className="relative w-full h-40 rounded-lg overflow-hidden mb-6">
          <img
            src="" 
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative flex mt-16">
          <img
            src="./assets/download.jpeg" 
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
          <button
            onClick={handleEditClick} 
            className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full shadow-lg"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
