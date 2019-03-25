import React from 'react';
import styled from 'styled-components';

const StyledCartProduct = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;

    img {
        width: 20%;
    }
`

const CartProduct = (props) => {
    return (
        <StyledCartProduct>
            <img src={props.photo} alt="" />
            <h3>{props.name}</h3>
        </StyledCartProduct>
    )
}

export default CartProduct