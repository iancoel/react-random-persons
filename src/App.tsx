import React from 'react';

//components
import Header from './components/Header';
import Main from './components/Main';

//redux
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
};

export default App;
