import * as React from 'react';
import { hot } from 'react-hot-loader';

interface ICounterProps {}

interface ICounterState {
  count: number;
}

class Counter extends React.Component<ICounterProps, ICounterState> {
  constructor(props: ICounterProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  public render() {
    return (
      <div onClick={this.increment.bind(this)}>
        <h1>Counter: {this.state.count}</h1>
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
