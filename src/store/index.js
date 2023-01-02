import { createStore } from 'redux'
import combinReducer from './reducers/index'
import { applyMiddleware } from "redux";

import thunk from "redux-thunk";
const store = createStore(combinReducer, applyMiddleware(thunk))
export default store