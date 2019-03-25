import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    padding: 8px 6px;
    outline: none;
    border: 1px solid var(--orange);
`

const SearchBar = () => {
    return (
        <StyledInput placeholder='Pesquisar produto' />
    )
}

export default SearchBar