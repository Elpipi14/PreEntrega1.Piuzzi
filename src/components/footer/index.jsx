import React from "react";
import './footer.css'


export const Footer = () => {
    return (
        <>
            <section className="footer">
                <footer class="footer">
                    <div class="footer-left col-md-4 col-sm-6">
                        <p class="about">
                            <span> Sobre La Empresa </span>© MC 2022 - 2023 . Todos los derechos reservados. Conoce nuestra Política de privacidad.</p>
                        <div class="icons">
                            <a href="#"><box-icon name='facebook-circle' type='logo' ></box-icon></a>
                            <a href="#"><box-icon name='instagram-alt' type='logo' ></box-icon></a>
                            <a href="#"><box-icon name='twitter' type='logo' ></box-icon></a>
                            <a href="#"><box-icon name='whatsapp' type='logo' ></box-icon></a>
                        </div>
                    </div>
                    <div class="footer-center col-md-4 col-sm-6">
                        <div>
                            <i class="fa fa-map-marker"></i>
                            <p><span> Calle Argentina 2022</span> San Nicolas, Argentina</p>
                        </div>
                        <div>
                            <i class="fa fa-phone"></i>
                            <p> (+54) 336 420 3387</p>
                        </div>
                        <div>
                            <i class="fa fa-envelope"></i>
                            <p><a href="#"> officeMc@company.com</a></p>
                        </div>
                    </div>
                    <div class="footer-right col-md-4 col-sm-6">
                        <h2> Company<span> MC</span></h2>
                        <p class="menu"> |
                            <a href="#"> Inicio </a> |
                            <a href="#"> Nosotros </a> |
                            <a href="#"> Productos </a>
                        </p>
                        <p class="name"> Mc Sneakers &copy; 2023</p>
                    </div>
                </footer>
            </section>
        </>
    );
}