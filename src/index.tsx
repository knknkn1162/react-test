import * as React from "react";
import * as ReactDOM from "react-dom";

//import Hello from "./components/Hello";
import Hello from './containers/Hello';
import { Provider } from 'react-redux';

/*
ReactDOM.render(
  <Hello name="TypeScript" enthusiasmLevel={10} />,
  document.getElementById("example") as HTMLElement,
);
*/

import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});


ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('example') as HTMLElement
);