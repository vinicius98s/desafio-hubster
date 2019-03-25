import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'

import Product from './Product';

const StyledProducts = styled.ul`
    margin-top: 20px;
    list-style: none;

    li {
        width: ${props => props.rows ? `calc(100% / ${props.rows})` : '100%'};
        float: left;
    }
`

const Products = (props) => {
    return (
        <StyledProducts rows={2}>
            {props.products.map(product => (
                <li key={product.id}>
                    <Product id={product.id} />
                </li>
            ))}
        </StyledProducts>
    )
}

function mapStateToProps({ data }) {
    return {
        products: data.currentCategory
            ? data.products.filter((product) => product.category.id === data.currentCategory)
            : data.products,
        currentCategory: data.currentCategory
    }
}

export default connect(mapStateToProps)(Products);