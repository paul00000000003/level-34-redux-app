
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import allReducers from './reducers'  // Default is index.jsx
import {Provider} from 'react-redux'

//Actions
/*const increment=()=> { 
                       return {type: 'INCREMENT'}
                      }

const decrement=() => {return {type: 'DECREMENT'}}

//Reducer (Action,State)

const counter=(state=0,action)=>{switch(action.type)
  {
     case 'INCREMENT':return state+1
     case 'DECREMENT':return state-1
  }
}

//Store : globalized state

let store=createStore(allReducers)

//display console

store.subscribe(()=>console.log(store.getState()))

//Dispatcher 

//console.log("optellen :"+store.dispatch(increment()))
//console.log("aftrekken :"+store.dispatch(decrement()))
//console.log("isLogged : "+store.dispatch(isLogged()))
*/

const store=createStore(allReducers)


ReactDOM.render(
   <Provider store={store}>
     <App />
   </Provider>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
