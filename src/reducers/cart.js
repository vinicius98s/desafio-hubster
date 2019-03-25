import {
    RESET_CART,
    ADD_PRODUCT,
} from '../actions/cart';

const initalState = {
    cartProducts: [],
    subTotal: null,
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
        case ADD_PRODUCT:
            const newCartProducts = state.cartProducts.concat([[action.product]]);

            return {
                ...state,
                cartProducts: newCartProducts,
            }
        default:
            return state
    }
}