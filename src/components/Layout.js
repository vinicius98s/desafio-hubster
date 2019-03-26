import React from 'react';
import styled from 'styled-components';

import FilterCategory from './FilterCategory';
import Cart from './Cart';
import Products from './ProductsWrapper';

const StyledLayout = styled.div`
    display: flex;
    max-width: 1300px;
    margin: 50px auto;
    justify-content: center;

    @media(max-width: 1024px) {
        display: block;
        input {
            margin-top: 20px;
        }
    }
`

const Column = styled.div`
    flex: ${props => props.flex ? props.flex : 1};
    margin: ${props => props.margin ? `0 ${props.margin}px` : null};
`

const Layout = () => {
    return (
        <StyledLayout>
            <Column flex={0.3}>
                <FilterCategory />
            </Column>
            <Column margin={20}>
                <Products />
            </Column>
            <Column flex={0.5}>
                <Cart />
            </Column>
        </StyledLayout>
    )
}

export default Layout;