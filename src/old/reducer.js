import React from 'react'
import { addTodo, markAsCompleteTodo, removeTodo } from './actions'
import {createStore} from 'redux'


function reducer(state, action) {
  if (action === addTodo){
      return add new item
  }
  else if (action === removeTodo){
      return remove mytodo
  }
  else if (action === markAsCompleteTodo){
      return mark as completed
  }
  return state
}

// function reducer(state, action) {
//     switch(action){
//         case addTodo{
//             return add new item
//         }
//         case removeTodo {
//             return remove mytodo
//         }
//         case markAsCompleteTodo {
//             return mark as completed
//         }
//         default: {
//             return state
//         }
//     }
// }

export default reducer;