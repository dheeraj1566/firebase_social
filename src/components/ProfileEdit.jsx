// ProfileEdit.js
import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import {db, addDoc, users} from '../Firebase'
// import CloudinaryUpload from './CloudinaryUpload'; 
import CloudinaryUpload from '../Cloudinary/CloudinaryUplaod'

function ProfileEdit() {
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const navigate = useNavigate();

  const handleCoverUploadSuccess = async (uploadedCoverURL) => {
    setCoverPhoto(uploadedCoverURL);
    await addDoc(users(db, 'profileImages'), {
      coverPhoto: uploadedCoverURL,
    });
  };


  const handleProfileUploadSuccess = async (uploadedProfileURL) => {
    setProfilePhoto(uploadedProfileURL);

    await addDoc(collection(db, 'profileImages'), {
      profilePhoto: uploadedProfileURL,
    });
  };

  return (
    <div className="p-6">
      <h1>Edit Profile</h1>

      <div className="mb-6">
        <div className="relative w-full h-40 rounded-lg overflow-hidden mb-6">
          <img
            src={coverPhoto || './assets/default-cover.jpg'} 
            alt="Cover"
            className="w-full h-full object-cover"
          />
          {/* CloudinaryUpload for Cover Photo */}
          <CloudinaryUpload
            onUploadSuccess={handleCoverUploadSuccess}
            buttonText="Change Cover Photo"
            buttonClass="absolute top-2 right-2 bg-blue-500 text-white py-1 px-4 rounded-full"
            cloudName="YOUR_CLOUD_NAME"
            uploadPreset="YOUR_UPLOAD_PRESET"
          />
        </div>
      </div>

      <div className="relative flex mt-16">
        <img
          src={profilePhoto || './assets/default-profile.jpg'} // Placeholder if no photo uploaded
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
        />
        {/* CloudinaryUpload for Profile Photo */}
        <CloudinaryUpload
          onUploadSuccess={handleProfileUploadSuccess}
          buttonText="Change Profile Photo"
          buttonClass="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full shadow-lg"
          cloudName="YOUR_CLOUD_NAME"
          uploadPreset="YOUR_UPLOAD_PRESET"
        />
      </div>
    </div>
  );
}

export default ProfileEdit;
