import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const RootReducers = combineReducers({
    ...reducers,
});

export const store = createStore(
    RootReducers,
    applyMiddleware(thunk),
);
