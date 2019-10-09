import { showLoading, hideLoading } from "react-redux-loading";
import { receiveData } from "./data";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());

    return fetch(
      "http://5d556e6936ad770014cce06d.mockapi.io/api/v1/catalog/products"
    )
      .then(res => res.json())
      .then(data => {
        dispatch(
          receiveData({ products: data.products, categories: data.categories })
        );
      })
      .then(dispatch(hideLoading()));
  };
}
