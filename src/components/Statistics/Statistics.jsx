import PropTypes from 'prop-types';
import { useStats } from 'context/context';

const Statistics = ({ title, children }) => {
  const { good, neutral, bad, amountStats, countPositiveFeedbackPercentage } =
    useStats();
  return (
    <div>
      <h2>{title}</h2>
      {good || neutral || bad ? (
        <div>
          <p>Good&#58; {good}</p>
          <p>Neutral&#58; {neutral}</p>
          <p>Bad&#58; {bad}</p>
          <p>Total&#58; {amountStats()}</p>
          <p>
            Positive feedback&#58; {countPositiveFeedbackPercentage()} &#37;
          </p>
        </div>
      ) : (
        <h3>{children}</h3>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  amountStats: PropTypes.number,
  countPositiveFeedbackPercentage: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Statistics;
