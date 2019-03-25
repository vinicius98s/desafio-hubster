export const RECEIVE_DATA = 'RECEIVE_DATA';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
export const RESET_SEARCH = 'RESET_SEARCH';

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

export function searchProduct(productName) {
    return {
        type: SEARCH_PRODUCT,
        productName,
    }
}

export function resetSearch() {
    return {
        type: RESET_SEARCH
    }
}