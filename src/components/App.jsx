import React, { useState } from 'react';
import Feedback from './Feedback/Feedback';

export function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = value => {
    setState(prevState => ({
      ...prevState,
      [value]: prevState[value] + 1,
    }));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Leave your feedback, please</h1>
      <Feedback state={state} handleFeedback={handleFeedback} />
    </div>
  );
}
