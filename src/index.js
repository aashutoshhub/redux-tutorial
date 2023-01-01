import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//
import HomeContainer from "./containers/homeContainers";
//
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './services/Reducers/index';
const store=createStore(rootReducer);
console.warn(store);

//

ReactDOM.render(
   <Provider store={store}>
    <App/>
   </Provider>
  ,document.getElementById("root")
)

