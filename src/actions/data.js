export const RECEIVE_DATA = 'RECEIVE_DATA';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

export function receiveData(data) {
    return {
        type: RECEIVE_DATA,
        data,
    }
}

export function filterProducts(category) {
    return {
        type: FILTER_PRODUCTS,
        category
    }
}