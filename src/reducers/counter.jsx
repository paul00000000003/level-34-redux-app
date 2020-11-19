import React from 'react'

const counterReducer=(state=3,action)=>{switch(action.type)
    {
       case 'INCREMENT':return state+1
       case 'DECREMENT':return state-1
       default : return state
    }
  }

export default counterReducer 