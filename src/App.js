import React, { Component } from 'react';
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Main from './containers/Main'

class App extends Component {
  render() {
    return (
      <Provider store={createStore(rootReducer)}>
        <Main />
     </Provider>
    );
  }
}

export default App;
