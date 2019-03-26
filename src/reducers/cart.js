import {
    RESET_CART,
    ADD_PRODUCT,
    UPDATE_PRODUCT_QUANTITY,
    SET_DISCOUNT,
    SET_TAX_SERVICE
} from '../actions/cart';

const initalState = {
    cartProducts: [],
    subTotal: 0,
    discount: 0,
    taxService: 0,
    total: 0,
}

export default function cart(state = initalState, action) {
    const getTaxOrDiscount = () => {
        const totalDiscount = state.subTotal - (state.subTotal * action.discount/100);
        const totalTaxService = state.subTotal + (state.subTotal * action.tax/100);

        return {
            discount: totalDiscount,
            taxService: totalTaxService,
        }
    }

    switch(action.type) {
        case RESET_CART:
            return {
                ...state,
                ...initalState
            }
        case ADD_PRODUCT:
            const checkProductID = () => {
                for(let product of state.cartProducts) {
                    if(product.id === action.product.id) {
                        return true
                    }
                }
                return false
            }

            const newCartProducts = checkProductID() ? [...state.cartProducts] : state.cartProducts.concat([action.product])

            const getTotalAndSubtotal = () => {
                const totalAndSubtotal = newCartProducts.reduce((prev, cur) => prev + cur.salePrice * cur.productQuantity, 0);

                if(state.discount > 0) {
                    const total = totalAndSubtotal - (totalAndSubtotal * state.discount/100);

                    return {
                        total: state.taxService === 0
                            ? total
                            : total + (state.subTotal * state.taxService/100),
                        subTotal: totalAndSubtotal
                    }
                }

                if(state.taxService > 0) {
                    const total = totalAndSubtotal + (totalAndSubtotal * state.taxService/100);

                    return {
                        total: state.discount === 0
                            ? total
                            : total - (state.subTotal * state.discount/100),
                        subTotal: totalAndSubtotal
                    }
                }

                return {
                    total: totalAndSubtotal,
                    subTotal: totalAndSubtotal
                }
            }

            return {
                ...state,
                cartProducts: newCartProducts,
                total: getTotalAndSubtotal().total,
                subTotal: getTotalAndSubtotal().subTotal
            }
        case UPDATE_PRODUCT_QUANTITY:
            return {
                ...state,
                cartProducts: state.cartProducts
                    .map(product => product.id === action.product.id
                        ? {
                            ...product,
                            productQuantity: product.productQuantity + action.product.productQuantity,
                        }
                        : product)
            }
        case SET_DISCOUNT:
            return {
                ...state,
                discount: action.discount,
                total: state.taxService === 0
                    ? getTaxOrDiscount().discount
                    : getTaxOrDiscount().discount + (state.subTotal * state.taxService/100),
            }
        case SET_TAX_SERVICE:
            return {
                ...state,
                taxService: action.tax,
                total: state.discount === 0
                    ? getTaxOrDiscount().taxService
                    : getTaxOrDiscount().taxService - (state.subTotal * state.discount/100),
            }
        default:
            return state
    }
}