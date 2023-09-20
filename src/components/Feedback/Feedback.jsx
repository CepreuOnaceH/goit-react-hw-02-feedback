import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

const Feedback = ({ state, handleFeedback }) => {
  const { good, neutral, bad } = state;
  const totalFeedback = good + neutral + bad;
  return (
    <>
      <FeedbackOptions
        options={Object.keys(state)}
        onLeaveFeedback={handleFeedback}
      />
      {totalFeedback > 0 ? (
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
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

export default Feedback;
