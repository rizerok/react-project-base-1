import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement } from 'store/counter';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000);
  }

  render() {
    const { counter, onIncrement, onDecrement } = this.props;
    return (
      <p>
        <Helmet>
          <title>Counter</title>
        </Helmet>
        <span>
                    Clicked: {counter} times
        </span>
        {' '}
        <button onClick={onIncrement}>
                    +
        </button>
        {' '}
        <button onClick={onDecrement}>
                    -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
                    Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
                    Increment async
        </button>
      </p>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { onIncrement: increment, onDecrement: decrement }, dispatch
);

export default connect(
  state => state,
  mapDispatchToProps
)(Counter);
