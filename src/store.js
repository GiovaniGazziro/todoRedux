
import {createStore, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import tasks from "./reducers/taskReducer";



export default createStore(
        combineReducers({tasks}),
        composeWithDevTools(),
);