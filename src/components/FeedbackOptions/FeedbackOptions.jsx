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

export default FeedbackOptions;