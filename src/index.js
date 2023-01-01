import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './services/Reducers/index';
//
const store=createStore(rootReducer);   //wrapping data from reducer into store store
//

//console.log("store data : ",store);

ReactDOM.render(
   //this store will take  data from the root reducer and flow the data in application
     <Provider store={store}>
       <App/>
     </Provider>
  ,document.getElementById("root")
)

