import { ADD_PRODUCT, updateProductQuantity } from '../actions/cart'

const checkCart = (store) => (next) => (action) => {
    if(action.type === ADD_PRODUCT) {
        const previousStore = store.getState()
        for(let product of previousStore.cart.cartProducts) {
            if(product.id === action.product.id) {
                store.dispatch(updateProductQuantity({ id: action.product.id, productQuantity: 1 }))
            } else {
                next(action)
            }
        }
    }

    return next(action)
}

export default checkCart