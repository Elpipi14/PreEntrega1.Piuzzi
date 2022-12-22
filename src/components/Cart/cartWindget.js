import { BoxIconElement } from "boxicons";
import React from "react";
import './cart.css'


export const CartWindget = () => {
    return (
        <>
            <div className="cart__navbar">
                <box-icon name="cart"></box-icon>
                <span id="contador" className="item__total">0</span>
            </div>
        </>
    );
}
