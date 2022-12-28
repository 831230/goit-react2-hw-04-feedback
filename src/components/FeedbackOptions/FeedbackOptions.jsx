import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, handleClickOnBtn }) => {
  return (
    <>
      <div>
        {options &&
          options.map(element => (
            <button key={element} onClick={handleClickOnBtn}>
              {element}
            </button>
          ))}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  handleClickOnBtn: PropTypes.func,
};

export default FeedbackOptions;
