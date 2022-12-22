import { BoxIconElement } from "boxicons";
import React from "react";
import './navbar.css';
import { CartWindget } from '../Cart/cartWindget'
import logo from "../../img/logo.jpg"



export const Navbar = () => {
    return (
        <>
            <header className="header">
                <nav className="container">
                    <a><img src={logo} className="logo" /></a>
                    <ul className="nav">
                        <li ><a href="#">Inicio</a></li>
                        <li ><a href="#">Productos</a>
                            <ul className="nav__sub">
                                <li ><a href="#">Temporada 2022</a></li>
                                <li ><a href="#">Temporada 2023</a></li>
                            </ul>
                        </li>
                    </ul>
                    <CartWindget />
                </nav>
            </header>

        </>
    );
}


