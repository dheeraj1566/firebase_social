import React from 'react';
import {CloudinaryContext} from 'react-cloudinary-upload-widget'

const CloudinaryUpload = ({ onUploadSuccess, buttonText, buttonClass, cloudName, uploadPreset }) => {
  const handleUpload = (result) => {
    if (result.event === 'success') {
      const uploadedUrl = result.info.secure_url; 
      onUploadSuccess(uploadedUrl);
    }
  };

  return (
    <CloudinaryContext cloudName={cloudName}>
      <button
        className={buttonClass}
        onClick={() =>
          window.cloudinary.openUploadWidget(
            {
              cloudName: cloudName,
              uploadPreset: uploadPreset,
              sources: ['local', 'url', 'camera'],
              showAdvancedOptions: false,
              cropping: true,
              multiple: false,
              defaultSource: 'local',
            },
            handleUpload
          )
        }
      >
        {buttonText}
      </button>
    </CloudinaryContext>
  );
};

export default CloudinaryUpload;
