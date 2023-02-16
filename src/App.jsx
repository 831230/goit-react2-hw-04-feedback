import { useState } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = statistic => {
    if (statistic === 'good') {
      let statGood = good;
      setGood((statGood += 1));
    }
    if (statistic === 'neutral') {
      let statNeutral = neutral;
      setNeutral((statNeutral += 1));
    }
    if (statistic === 'bad') {
      let statBad = bad;
      setBad((statBad += 1));
    }
  };

  const amountStats = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(
    (good / amountStats) * 100
  );

  return (
    <>
      <h1>Please leave feedback</h1>
      <Section title="Statistics">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          handleClickOnBtn={handleIncrement}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={amountStats}
          positivePercentage={countPositiveFeedbackPercentage}
        >
          <Notification message="There is no feedback" />
        </Statistics>
      </Section>
    </>
  );
};

export default App;
