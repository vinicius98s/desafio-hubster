import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CartProduct from './CartProduct';

const StyledCart = styled.div`
    border: 1px solid var(--orange);
    min-height: 80vh;
    position: relative;

    form {
        width: 100%;
        position: absolute;
        bottom: 0;
        display: flex;
        flex-direction: column;
        padding: 15px;
    }

    * {
        margin: 2px 0;
    }

    .submit-btn {
        background: var(--orange);
        border: none;
        color: white;
        padding: 10px 0;
        cursor: pointer;
    }

    .row {
        display: flex;
        justify-content: space-between;
    }

    .row input {
        width: 30%;
    }
`

const Cart = (props) => {
    return (
        <StyledCart>
            {props.cartProducts && (
                props.cartProducts.map(product => (
                    <CartProduct key={product.id} id={product.id} />
                ))
            )}
            <form className="cart-info">
                <div className='row'>
                    <h3>Subtotal:</h3> <h3>R${!props.subtotal ? String(0) : props.subtotal}</h3>
                </div>
                <div className="row">
                    <h3>Desconto:</h3> <input type="number" value={`${props.discount}`} onChange={(e) => console.log(e.target.value)} />
                </div>
                <div className="row">
                    <h3>Taxa de serviço:</h3> <input type="number" value={`${props.taxService}`} onChange={(e) => console.log(e.target.value)} />
                </div>
                <div className="row">
                    <h3>Total:</h3> <h3>R${!props.total ? String(0) : props.total}</h3>
                </div>
                <input className='submit-btn' type="submit" value="Finalizar venda"/>
            </form>
        </StyledCart>
    )
}

function mapStateToProps({ cart }) {
    return {
        cart
    }
}

export default connect(mapStateToProps)(Cart);