import React, {Component} from 'react';
import Main from './Components/MainComponents';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Redux/configureStore';
import { BrowserRouter } from 'react-router-dom';
import './App.css'

const store = ConfigureStore();

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
  
}

export default App;
