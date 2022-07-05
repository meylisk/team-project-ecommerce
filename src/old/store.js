//place where we hold one single object. We need to install redux first.

import React from 'react'
import {createStore} from 'redux'
import reducer from './reducer'
const store = createStore(reducer)
export default store;