// src/components/ImageUpload.js
import React, { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Store image as base64 string
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload an image file.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <div
            className="d-flex justify-content-center align-items-center border p-5 cursor-pointer"
            style={{ height: '200px', borderRadius: '10px', backgroundColor: '#f0f0f0' }}
            onClick={() => document.getElementById('fileInput').click()}
          >
            {image ? (
              <img src={image} alt="Uploaded" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            ) : (
              <div className="text-center">
                <i className="bi bi-cloud-upload" style={{ fontSize: '40px' }}></i>
                <p>Click to upload an image</p>
              </div>
            )}
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
