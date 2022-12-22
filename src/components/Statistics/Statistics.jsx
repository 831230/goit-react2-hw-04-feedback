const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <div>
      <h3>Statistics</h3>
      <p>Good&#58; {good}</p>
      <p>Neutral&#58; {neutral}</p>
      <p>Bad&#58; {bad}</p>
      <p>Total&#58; {total}</p>
      <p>Positive feedback&#58; {positivePercentage} &#37;</p>
    </div>
  )
};

export default Statistics;