import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div onClick={onLeaveFeedback}>
        <button>{options.good}</button>
        <button>{options.neutral}</button>
        <button>{options.bad}</button>
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.string,
    neutral: PropTypes.string,
    bad: PropTypes.string,
  }),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;