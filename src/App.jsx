import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

const App = () => {
  return (
    <>
      <h1>Please leave feedback</h1>
      <FeedbackOptions />
      <Statistics title="Statistics">
        <Notification message="There is no feedback" />
      </Statistics>
    </>
  );
};

export default App;
