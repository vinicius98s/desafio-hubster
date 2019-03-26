export const RESET_CART = 'RESET_CART';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY';
export const SET_DISCOUNT = 'SET_DISCOUNT';
export const SET_TAX_SERVICE = 'SET_TAX_SERVICE';

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

export function updateProductQuantity(product) {
    return {
        type: UPDATE_PRODUCT_QUANTITY,
        product
    }
}

export function setDiscount(discount) {
    return {
        type: SET_DISCOUNT,
        discount
    }
}

export function setTaxService(tax) {
    return {
        type: SET_TAX_SERVICE,
        tax
    }
}