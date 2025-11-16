import React, { useState } from 'react';
export default function UploadImg({ onUpload }) {
  const [preview, setPreview] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    onUpload(file); // gửi file lên page
  };

  return (
         <div className="text-sm text-gray-600 flex items-center justify-center">
             <label> Upload Image
      <input type="file" className="hidden" onChange={handleUpload}
       />
      {preview && <img src={preview} />}
    </label>
                 
     </div>
   
  );
}