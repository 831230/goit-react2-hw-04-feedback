import PropTypes from 'prop-types';

const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  children,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      {good || neutral || bad ? (
        <div>
          <p>Good&#58; {good}</p>
          <p>Neutral&#58; {neutral}</p>
          <p>Bad&#58; {bad}</p>
          <p>Total&#58; {total}</p>
          <p>Positive feedback&#58; {positivePercentage} &#37;</p>
        </div>
      ) : (
        <h3>{children}</h3>
      )}
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
  children: PropTypes.element,
};

export default Statistics;
