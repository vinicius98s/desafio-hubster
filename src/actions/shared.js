import { showLoading, hideLoading } from 'react-redux-loading';
import { receiveData } from './data';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())

        setTimeout(() => {
            return fetch('http://5c90795d8447f30014cb8438.mockapi.io/api/v1/catalog/products')
                .then(res => res.json())
                .then((data) => {
                    dispatch(receiveData({ products: data[0].products, categories: data[0].categories }))
                })
                .then(dispatch(hideLoading()))
        }, 2000)
    }
}