import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

const Feedback = ({ state, handleFeedback }) => (
  <>
    <FeedbackOptions
      options={Object.keys(state)}
      onLeaveFeedback={handleFeedback}
    />
    <Statistics
      good={state.good}
      neutral={state.neutral}
      bad={state.bad}
      total={state.good + state.neutral + state.bad}
      positivePercentage={
        state.good > 0
          ? Math.round(
              (state.good / (state.good + state.neutral + state.bad)) * 100
            )
          : 0
      }
    />
  </>
);

export default Feedback;
