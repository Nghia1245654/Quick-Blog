import React, { useState } from "react";
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
      <label>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="tabler-icon tabler-icon-upload inline-block mr-2 w-5 h-5"
        >
          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
          <path d="M7 9l5 -5l5 5"></path>
          <path d="M12 4l0 12"></path>
        </svg>
        Click to upload image
        <input type="file" className="hidden" onChange={handleUpload} />
        {preview && <img src={preview} />}
      </label>
    </div>
  );
}
