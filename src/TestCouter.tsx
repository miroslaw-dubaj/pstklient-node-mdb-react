import * as React from 'react';

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

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }


  render() {
    return (
      <div onClick={this.increment.bind(this)}>
        <h1>Counter: {this.state.count}</h1>
      </div>
    )
  }
}