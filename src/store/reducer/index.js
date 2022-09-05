import {combineReducers} from "redux";

import HomeReducer from './home'

import CategoryReducer from "./category";

export default combineReducers({HomeReducer, CategoryReducer})