import {
    RECEIVE_DATA,
    FILTER_PRODUCTS
} from '../actions/data';

export default function data(state = {}, action) {
    switch(action.type) {
        case RECEIVE_DATA:
            return {
                ...action.data
            }
        case FILTER_PRODUCTS:
            return {
                ...state,
                currentCategory: action.category
            }
        default:
            return state
    }
}