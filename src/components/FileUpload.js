// src/components/FileUpload.js
import { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleUpload = () => {
    if (!file) return;
    // Mock upload
    setProgress(100);
    alert('File uploaded successfully!');
  };

  return (
    <div className="upload-container">
      <h2>Upload Assignment</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      <p>Progress: {progress}%</p>
    </div>
  );
};

export default FileUpload;
