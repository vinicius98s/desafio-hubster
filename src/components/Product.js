import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addProduct } from '../actions/cart';

const StyledProduct = styled.div`
    margin: 30px;

    img {
        width: 50%;
    }
`

const Product = (props) => {
    const { photo, name, salePrice } = props.product;

    const handleAddProduct = (product) => {
        const dispatchProductObject = {
            id: product.id,
            name: product.name,
            salePrice: product.salePrice,
            photo: product.photo,
            productQuantity: 1
        }

        props.dispatch(addProduct(dispatchProductObject))
    }

    return (
        <StyledProduct onClick={() => handleAddProduct(props.product)}>
            <img src={photo} alt={name} />
            <div className="product-info">
                <h2>{name}</h2>
                <h3>R${salePrice.toFixed(2)}</h3>
            </div>
        </StyledProduct>
    )
}

function mapStateToProps({ data }, props) {
    const product = data.products.filter(product =>
        props.id === product.id
            ? {
                name: product.name,
                photo: product.photo,
                salePrice: product.salePrice
            }
            : false)

    return {
        product: product[0]
    }
}

export default connect(mapStateToProps)(Product);