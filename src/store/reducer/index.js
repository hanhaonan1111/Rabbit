import {combineReducers} from "redux";

import HomeReducer from './home'

import CategoryReducer from "./category";

import DetailReducer from "./detail"

export default combineReducers({HomeReducer, CategoryReducer, DetailReducer})