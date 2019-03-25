import {
    RESET_CART
} from '../actions/cart';

const initalState = {
    cartProducts: [],
    subtotal: null,
    discount: null,
    taxService: null,
    total: null,
}

export default function cart(state = initalState, action) {
    switch(action.type) {
        case RESET_CART:
            return {
                ...state,
                ...initalState
            }
        default:
            return state
    }
}