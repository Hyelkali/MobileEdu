// src/components/Attendance.js
import { useState } from 'react';

const Attendance = () => {
  const [studentName, setStudentName] = useState('');

  const markAttendance = async () => {
    if (studentName) {
      alert('Attendance marked successfully!');
      setStudentName('');
    } else {
      alert('Please enter student name.');
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
