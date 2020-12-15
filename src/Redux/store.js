import {applyMiddleware, combineReducers, createStore} from "redux";
import commentsReducer from "./Reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    commentspage:commentsReducer,
    form: formReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store= store

export default store