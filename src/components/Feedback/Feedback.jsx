import React, { useState } from 'react';
import Button from '@mui/material/Button';

export function Feedback() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = type => {
    setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };
  return (
    <div>
      <h1>Leave your feedback, please</h1>
      <div style={{ display: 'flex', gap: '20px', margin: '0, auto' }}>
        <Button variant="contained" onClick={() => handleFeedback('good')}>
          Good
        </Button>
        <Button variant="contained" onClick={() => handleFeedback('neutral')}>
          Neutral
        </Button>
        <Button variant="contained" onClick={() => handleFeedback('bad')}>
          Bad
        </Button>
      </div>
      <h2>Statistics</h2>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
    </div>
  );
}
