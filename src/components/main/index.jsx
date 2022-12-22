import React from "react";
import './start.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Inicio from '../../img/inicio.jpg';
import Top1 from '../../img/img06.jpg';
import Top2 from '../../img/img08.jpg';
import Top3 from '../../img/img09.jpg';
import { Greeting } from "../greetings/itemListContainer";


export const PortBanner = () => {
    return (
        <>
            <Greeting infoUser="User Bienvenido Mc Sneakers Ecommerce" />
            <section>
                <a><img src={Inicio} className="logo__banner" /></a>
                <div className="title">
                    <h1>Productos Seleccionados 2023</h1>
                </div>

                <div className="promo">

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Top1} />
                        <Card.Body>
                            <Card.Title>Jordan AJ1</Card.Title>
                            <Card.Text>
                                Mantén tu estilo con las AJ1. Hemos conservado todo lo que te gusta del diseño clásico
                            </Card.Text>
                            <Button variant="primary" href="index.js">Ir a comprar</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Top2} />
                        <Card.Body>
                            <Card.Title>Air Force 1</Card.Title>
                            <Card.Text>
                                Brilla con satén, mantén el estilo clásico en lona u opta por el lujo con piel.
                            </Card.Text>
                            <Button variant="primary" href="index.js">Ir a Comprar</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Top3} />
                        <Card.Body>
                            <Card.Title>Air Max</Card.Title>
                            <Card.Text>
                                Dicen que para lucir hay que sufrir. Pero eso no es así con las Air. Combinan líneas de diseño elegantes con la última tecnología
                            </Card.Text>
                            <Button variant="primary" href="index.js">Ir a comprar</Button>
                        </Card.Body>
                    </Card>

                </div>

            </section>

        </>
    );
}

