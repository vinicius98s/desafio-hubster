import React, { Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { filterProducts } from '../actions/data';

const StyledCategory = styled.ul`
    border: 1px solid var(--orange);
    list-style: none;

    li {
        padding: 10px 0;
        cursor: pointer;

        :hover {
            background: var(--orange);
            color: white;
        }
    }
`

const StyledLI = styled.li`
    background: ${props => props.active ? 'var(--orange)' : 'none'};
    color: ${props => props.active ? 'white' : 'black'};
`

const StyledButton = styled.button`
    background: var(--orange);
    width: 100%;
    border: none;
    color: white;
    margin-top: 10px;
    cursor: pointer;
    padding: 10px 0;
`

const Category = (props) => {
    const { categories, currentCategory } = props;

    const handleCategoryChange = (categoryID) => {
        props.dispatch(filterProducts(categoryID))
    }

    return(
        <Fragment>
            <StyledCategory>
                {categories && (
                    categories.map(category => (
                        <StyledLI
                            active={currentCategory === category.id}
                            key={category.id}
                            onClick={() => handleCategoryChange(category.id)}>
                                <p>{category.name}</p>
                        </StyledLI>
                    ))
                )}
            </StyledCategory>
            {currentCategory && (
                <StyledButton onClick={() => handleCategoryChange()}>Tirar filtro</StyledButton>
            )}
        </Fragment>
    )
}

function mapStateToProps({ data }) {
    return {
        categories: data.categories,
        currentCategory: data.currentCategory,
    }
}

export default connect(mapStateToProps)(Category)