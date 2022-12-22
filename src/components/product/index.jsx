import React from "react";
import './product.css'
import Top10 from "../../img/img10.jpg"

export const Products = () => {
    return (
        <>
            <section>
                <div className="title">
                    <h1>Productos</h1>
                </div>

                <div class='container-fluid'>
                    <div class="card mx-auto col-md-3 col-10 mt-5">
                        <img class='mx-auto img-thumbnail'
                            src={Top10}
                            width="auto" height="auto" />
                        <div class="card-body text-center mx-auto">
                            <div class='cvp'>
                                <h5 class="card-title font-weight-bold">Jordan AJ1</h5>
                                <p class="card-text">$25.000</p>
                                <a href="#" class="btn details px-auto">Ver Producto</a><br />
                                <a href="#" class="btn cart px-auto">Agregar al Carrito</a>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
}