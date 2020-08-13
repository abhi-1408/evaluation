import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import commonReducer from "./common/reducer.js";
import loginReducer from "./login/reducer.js";
import registerReducer from "./register/reducer.js";

let reducers = combineReducers({ common: commonReducer, login: loginReducer, register: registerReducer })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export { store }