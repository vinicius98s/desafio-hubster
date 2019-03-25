import React from 'react';
import styled from 'styled-components';

const StyledCartProduct = styled.div`

`

const CartProduct = (props) => {
    return (
        <StyledCartProduct>
            {props.id}
        </StyledCartProduct>
    )
}

export default CartProduct