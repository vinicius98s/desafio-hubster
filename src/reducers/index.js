import { combineReducers } from 'redux';
import cart from './cart';
import data from './data';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    cart,
    data,
    loadingBar: loadingBarReducer
})