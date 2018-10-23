import { hot } from 'react-hot-loader';
import * as React from 'react';

import * as s from './TestCounter.scss';


interface CounterProps { }

interface CounterState {
  count: number;
}

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  public render() {
    return (
      <div onClick={this.increment.bind(this)}>
        <h1 className={s.heading}>Counter: {this.state.count}</h1>
      </div>
    );
  }

  private increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
}

export default hot(module)(Counter);