import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledProduct = styled.div`
    margin: 30px;
    img {
        width: 60%;
    }
`

const Product = (props) => {
    const { photo, name, salePrice } = props.product;

    return (
        <StyledProduct>
            <img src={photo} alt={name} />
            <div className="product-info">
                <h2>{name}</h2>
                <h3>R${salePrice}</h3>
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