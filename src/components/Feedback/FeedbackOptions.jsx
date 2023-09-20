import React from 'react';
import Button from '@mui/material/Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div style={{ display: 'flex', gap: '20px' }}>
    {options.map(option => (
      <Button
        variant="outlined"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </Button>
    ))}
  </div>
);

export default FeedbackOptions;
