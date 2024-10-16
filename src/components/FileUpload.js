// src/components/FileUpload.js
import { useState } from 'react';
import { storage } from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleUpload = () => {
    if (!file) return;

    const storageRef = ref(storage, `uploads/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => alert('Upload error:', error.message),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          alert('File uploaded successfully! URL: ' + url);
        });
      }
    );
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
