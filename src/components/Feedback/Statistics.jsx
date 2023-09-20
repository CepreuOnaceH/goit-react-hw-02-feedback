import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2>Statistics</h2>
    <p style={{ margin: '0' }}>Good: {good}</p>
    <p style={{ margin: '0' }}>Neutral: {neutral}</p>
    <p style={{ margin: '0' }}>Bad: {bad}</p>
    <p style={{ margin: '0' }}>Total: {total}</p>
    <p style={{ margin: '0' }}>Positive: {positivePercentage}%</p>
  </>
);

export default Statistics;
