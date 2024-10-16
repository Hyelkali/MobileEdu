// src/components/Attendance.js
import { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const Attendance = () => {
  const [studentName, setStudentName] = useState('');

  const markAttendance = async () => {
    try {
      await addDoc(collection(db, 'attendance'), {
        name: studentName,
        time: Timestamp.now(),
      });
      alert('Attendance marked successfully!');
      setStudentName('');
    } catch (error) {
      alert('Error:', error.message);
    }
  };

  return (
    <div className="attendance-container">
      <h2>Mark Attendance</h2>
      <input
        type="text"
        placeholder="Enter Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button onClick={markAttendance}>Mark Attendance</button>
    </div>
  );
};

export default Attendance;
