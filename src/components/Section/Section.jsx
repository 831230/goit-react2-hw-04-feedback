// import PropTypes from 'prop-types';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: this.props.state.good,
      neutral: this.props.state.neutral,
      bad: this.props.state.bad,
    };
  }

  static defaultProps = {
    step: 1,
  };

  static propTypes = {
    title: PropTypes.string,
    state: PropTypes.shape({
      good: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.number,
    })
  };

  handlingStatistics = event => {
    if (event.target.outerText === 'Good') {
      this.goodIncrement();
    }
    if (event.target.outerText === 'Neutral') {
      this.neutralIncrement();
    }
    if (event.target.outerText === 'Bad') {
      this.badIncrement();
    }
  };

  goodIncrement = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + this.props.step,
      };
    });
  };

  neutralIncrement = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + this.props.step,
      };
    });
  };

  badIncrement = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + this.props.step,
      };
    });
  };

  amountStats = () => {
    return (
      this.state.good + this.state.neutral + this.state.bad
    )
  };

  countTotalFeedback = () => {
    if (this.state.good || this.state.neutral || this.state.bad) {
      return ({
        total: this.state.good + this.state.neutral + this.state.bad,
        positivePercentage: Math.round(
          (this.state.good /
            (this.state.good + this.state.neutral + this.state.bad)) *
            100
        ),
      });
    } else {
      return ({
        total: this.state.good + this.state.neutral + this.state.bad,
        positivePercentage: 0
      });
    }
  };

  render() {
    return (
      <section>
        <h1>{this.props.title}</h1>
        <FeedbackOptions options={{good:"Good", neutral:"Neutral", bad:"Bad"}} onLeaveFeedback={this.handlingStatistics} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback().total}
          positivePercentage={this.countTotalFeedback().positivePercentage}>
            <Notification message="There is no feedback"/>
        </Statistics>
      </section>
    );
  }
}

export default Section;
