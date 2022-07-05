import React from "react";

import CartItem from "../components/CartItem";
import PageTitle from '../components/PageTitle';

function Cart() {
    return (
        <div className="cart">
            <div className="cart__heading">
                <PageTitle Title="Корзина" className="cart-title"/>
                <button className="cart__delete">Очистить корзину</button>
            </div>
            <div className="cart__items">
                <CartItem/>
            </div>
        </div>
    );
}

export default Cart;