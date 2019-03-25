import React, { Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { searchProduct } from '../actions/data';

import Product from './Product';

const StyledProducts = styled.ul`
    margin-top: 20px;
    list-style: none;

    li {
        width: ${props => props.rows ? `calc(100% / ${props.rows})` : '100%'};
        float: left;

        :hover {
            cursor: pointer;
            background: rgba(251, 152, 62, 0.1);
        }
    }
`

const StyledSearchBar = styled.input`
    width: 100%;
    padding: 8px 6px;
    outline: none;
    border: 1px solid var(--orange);
`

const Products = (props) => {
    const currentProducts = props.searchedProductArray
        ? props.searchedProductArray
        : props.products

    const handleUserSearch = (productName) => {
        props.dispatch(searchProduct(productName))
    }

    return (
        <Fragment>
            <StyledSearchBar placeholder='Procurar produto' onKeyUp={(e) => handleUserSearch(e.target.value)} />
            <StyledProducts rows={2}>
                {currentProducts.map(product => (
                    <li key={product.id}>
                        <Product id={product.id} />
                    </li>
                ))}
            </StyledProducts>
        </Fragment>
    )
}

function mapStateToProps({ data }) {
    return {
        products: data.searchedProductArray
            ? data.searchedProductArray
            : data.currentCategory
                ? data.products.filter((product) => product.category.id === data.currentCategory)
                : data.products,
        currentCategory: data.currentCategory,
    }
}

export default connect(mapStateToProps)(Products);