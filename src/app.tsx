import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './TestCouter';

type ComponentType<P> =
  | React.ComponentClass<P>
  | React.StatelessComponent<P>;

// @ts-ignore
function render(Component: ComponentType<P>) {
  ReactDOM.render(
  <AppContainer>
    <Component />
  </AppContainer>
  , document.querySelector('#root')
  )
}

render(Counter)

// @ts-ignore
if (module.hot) {
// @ts-ignore
  module.hot.accept('./TestCouter', () => {
    render(require('./TestCouter'));
  });
}