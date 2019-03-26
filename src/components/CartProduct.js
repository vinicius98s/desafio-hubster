import React from 'react';
import styled from 'styled-components';

const StyledCartProduct = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;

    .product-info {
        text-align: left;
        margin-left: 20px;
    }

    img {
        width: 20%;
    }
`

const CartProduct = (props) => {
    return (
        <StyledCartProduct>
            <img src={props.photo} alt={props.name} />
            <div className="product-info">
                <h3>{props.name}</h3>
                <h4>x {props.productQuantity}</h4>
            </div>
        </StyledCartProduct>
    )
}

export default CartProduct