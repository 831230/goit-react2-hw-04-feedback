import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const useStats = () => useContext(AppContext);

export const FeedbackProvider = ({children}) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return(
    <AppContext.Provider value={{good, neutral, bad}}>
      {children}
    </AppContext.Provider>
  )
};