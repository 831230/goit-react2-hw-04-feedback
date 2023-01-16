import PropTypes from 'prop-types';
import { useStats } from 'context/context';

const FeedbackOptions = () => {
  const { handleIncrement } = useStats();
  const options = ['good', 'neutral', 'bad'];
  return (
    <>
      <div>
        {options &&
          options.map(element => (
            <button key={element} onClick={() => handleIncrement(element)}>
              {element}
            </button>
          ))}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  handleIncrement: PropTypes.func,
};

export default FeedbackOptions;
