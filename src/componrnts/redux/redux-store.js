import { combineReducers, createStore } from "redux";
import headerReducer from './headerReducer';

const redusers = combineReducers({
	header: headerReducer,
});


const store = createStore(redusers)


window.store = store;

export default store;