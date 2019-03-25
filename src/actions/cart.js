export const RESET_CART = 'RESET_CART';
export const ADD_PRODUCT = 'ADD_PRODUCT';

export function setInitialCart() {
    return {
        type: RESET_CART,
    }
}

export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        product
    }
}