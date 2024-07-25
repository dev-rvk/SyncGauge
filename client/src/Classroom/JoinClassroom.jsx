import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const JoinClassroomForm = () => {
  const [classroomCode, setClassroomCode] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  const handleJoinClassroom = () => {
    // Perform join classroom logic here (e.g., check classroom code validity, etc.)
    // For this example, let's just log the classroom code and set isJoined to true.
    console.log('Classroom Code:', classroomCode);
    setIsJoined(true);
  };

  if (isJoined) {
    // Redirect to the /classroom route after successful join.
    return <Navigate to="/classroom" />;
  }

  return (
    <div>
      <h2>Join Classroom</h2>
      <div>
        <input
          type="text"
          placeholder="Enter Classroom Code"
          value={classroomCode}
          onChange={(e) => setClassroomCode(e.target.value)}
        />
        <button onClick={handleJoinClassroom}>Join</button>
      </div>
    </div>
  );
};

export default JoinClassroomForm;
