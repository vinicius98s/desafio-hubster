import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CartProduct from './CartProduct';
import { setDiscount, setTaxService, setInitialCart } from '../actions/cart';

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
        background: white;

        span {
            font-size: 12px;
        }
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
        outline: none;
    }

    .row {
        display: flex;
        justify-content: space-between;
    }

    .row input {
        width: 30%;
    }

    @media(max-width: 1024px) {
        min-height: unset;
        position: unset;
        form {
            position: relative;
        }
    }
`

const StyledCartProduct = styled.div`
    overflow-y: auto;
    height: 575px;

    @media(max-width: 1024px) {
        height: 100%;
        overflow-y: unset;
    }
`

const Cart = (props) => {
    const handleDiscount = (discount, max) => {
        return discount > max ? false : props.dispatch(setDiscount(Number(discount)))
    }

    const handleTax = (tax, max) => {
        return tax > max ? false : props.dispatch(setTaxService(Number(tax)))
    }

    const handleCheckout = (e) => {
        e.preventDefault();
        props.dispatch(setInitialCart());
        alert('Obrigado pela compra!')
    }

    return (
        <StyledCart>
            <StyledCartProduct>
                {props.cart.cartProducts.map(product => (
                    <CartProduct
                        key={product.id}
                        id={product.id}
                        photo={product.photo}
                        salePrice={product.salePrice}
                        name={product.name}
                        productQuantity={product.productQuantity} />
                ))}
            </StyledCartProduct>
            <form className="cart-info" onSubmit={(e) => handleCheckout(e)}>
                <div className='row'>
                    <h3>Subtotal:</h3>
                    <h3>R${!props.cart.subTotal ? String(0) : props.cart.subTotal.toFixed(2)}</h3>
                </div>
                <div className="row">
                    <h3>Desconto<span>(%)</span>:</h3>
                    <input type="number" min={0} max={100} value={`${props.cart.discount}`} onChange={(e) => handleDiscount(e.target.value, 100)} />
                </div>
                <div className="row">
                    <h3>Taxa de serviço<span>(%)</span>:</h3>
                    <input type="number" min={0} max={15} value={`${props.cart.taxService}`} onChange={(e) => handleTax(e.target.value, 15)} />
                </div>
                <div className="row">
                    <h3>Total:</h3>
                    <h3>R${!props.cart.total ? String(0) : props.cart.total.toFixed(2)}</h3>
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