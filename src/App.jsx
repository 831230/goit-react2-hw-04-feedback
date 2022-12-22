import Section from 'components/Section/Section';
import { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: props.initialGood,
      neutral: props.initialNeutral,
      bad: props.initialBad,
    };
  }

  static defaultProps = {
    step: 1,
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  static propTypes = {
    step: PropTypes.number,
    initialGood: PropTypes.number,
    initialNeutral: PropTypes.number,
    initialBad: PropTypes.number,
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback" state={this.state}/>
      </>
    );
  }
}

export default App;
