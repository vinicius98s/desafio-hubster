import {
    RECEIVE_DATA,
    FILTER_PRODUCTS,
    SEARCH_PRODUCT,
    RESET_SEARCH,
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
        case SEARCH_PRODUCT:
            return {
                ...state,
                searchedProductArray: state.products
                    .filter((product) => product.name.toLowerCase().includes(action.productName)),
                currentCategory: null
            }
        case RESET_SEARCH:
            return {
                ...state,
                searchedProductArray: null
            }
        default:
            return state
    }
}