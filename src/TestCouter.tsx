import * as React from 'react';
import { CounterStyle } from 'csstype';

interface CounterProps {
}

interface CounterState {
  count: number;
}


export default class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div onClick={this.increment}>
        <h1>Count: {this.state.count}</h1>
      </div>
    )
  }
}