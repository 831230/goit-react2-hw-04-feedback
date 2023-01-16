import { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export const useStats = () => useContext(AppContext);

export const FeedbackProvider = ({ children }) => {
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

  const amountStats = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good || neutral || bad) {
      return Math.round((good / amountStats()) * 100);
    } else {
      return 0;
    }
  };

  console.log(good, neutral, bad);
  return (
    <AppContext.Provider
      value={{
        good,
        neutral,
        bad,
        handleIncrement,
        amountStats,
        countPositiveFeedbackPercentage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
