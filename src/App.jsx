import React,{Component} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment} from './actions'
import {decrement} from './actions'

//import {Decrement} from './actions/Decrement'

function App() {
  const ingelogd=useSelector(state => state.isLogged)
  const counter=useSelector(state => state.counter)
  const dispatch=useDispatch()

  return (
    <div className="App">
       <h1>De counter is {counter}</h1>
       <button onClick={()=>dispatch(increment())}>plus</button>
       <button onClick={()=>dispatch(decrement())}>minus</button>
       {ingelogd ? <p>You're allowed to see this data</p>:""}
    </div>
  );
}

export default App;
