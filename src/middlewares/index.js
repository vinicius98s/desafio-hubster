import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'
import checkCart from './checkCart';

export default applyMiddleware(
    thunk,
    logger,
    checkCart
)