import { createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'



import areasReducer from './areasDuck';
import requestReducer from './requestDuck';
import authReducer from './authDuck';

const rootReducer = combineReducers({
    areas: areasReducer,
    requests: requestReducer,
    auth: authReducer,
    
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}