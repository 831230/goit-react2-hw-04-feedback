import { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    const name = event.target.textContent;
    const value = this.state[name] + 1;
    this.setState({
      [name]: value,
    });
  };

  amountStats = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countTotalFeedback = () => {
    return this.amountStats();
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good || this.state.neutral || this.state.bad) {
      return Math.round((this.state.good / this.amountStats()) * 100);
    } else {
      return 0;
    }
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <Section title="Statistics">
          <FeedbackOptions
            options={Object.keys(this.state)}
            handleClickOnBtn={this.handleIncrement}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          >
            <Notification message="There is no feedback" />
          </Statistics>
        </Section>
      </>
    );
  }
}

export default App;
