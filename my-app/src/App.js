import React from 'react'
import './App.css'
import Layout from './layout/layout'
import { BrowserRouter as Router } from 'react-router-dom'
import persistState from 'redux-localstorage'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/index";

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    persistState('newTest', { 'key': 'newTest' }),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose
  )
);
function App (){
    return (
      <Provider store={store}>
        <Router>
          <Layout />
        </Router>
       </Provider> 
    );
}
export default App