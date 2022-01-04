//components
import Header from './components/Header';
import Main from './components/Main';

//redux
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
};

export default App;
