import {applyMiddleware, createStore} from 'redux'
import reducer from './reducer'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))