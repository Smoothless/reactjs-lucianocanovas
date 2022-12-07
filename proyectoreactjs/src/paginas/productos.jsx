import React from "react"
import BotonProducto from "../props/boton"
import Imagen1 from "../recursos/imagen1.jpg"
import Imagen2 from "../recursos/imagen2.jpg"
import Imagen3 from "../recursos/imagen3.jpg"
import Imagen4 from "../recursos/imagen4.jpg"
import Imagen5 from "../recursos/imagen5.jpg"
import Imagen6 from "../recursos/imagen6.jpg"
import Imagen7 from "../recursos/imagen7.jpg"
import Imagen8 from "../recursos/imagen8.jpg"
import Imagen9 from "../recursos/imagen9.jpg"

function Productos () {
    return (
        <div className="listaProductos">
            <div className="producto div1">
                <img src={ Imagen1 } className="imagenProducto"></img>
                <h1 className="tituloProducto">Nike Air Force 1 Blanco y Negro</h1>
                <BotonProducto n="1"/>
            </div>
            <div className="producto div2">
                <img src={ Imagen2 } className="imagenProducto"></img>
                <h1 className="tituloProducto">Nike Air Force 1 Blanco</h1>
                <BotonProducto n="2"/>
            </div>
            <div className="producto div3">
                <img src={ Imagen3 } className="imagenProducto"></img>
                <h1 className="tituloProducto">Nike Air Force 1 Blanco y Rojo</h1>
                <BotonProducto n="3"/>
            </div>
            <div className="producto div4">
                <img src={ Imagen4 } className="imagenProducto"></img>
                <h1 className="tituloProducto">Nike Air Force 1 Negro</h1>
                <BotonProducto n="4"/>
            </div>
            <div className="producto div5">
                <img src={ Imagen5 } className="imagenProducto"></img>
                <h1 className="tituloProducto">Nike Air Force 1 High Blanco</h1>
                <BotonProducto n="5"/>
            </div>
            <div className="producto div6">
                <img src={ Imagen6 } className="imagenProducto"></img>
                <h1 className="tituloProducto">Nike Air Force 1 Pastel</h1>
                <BotonProducto n="6"/>
            </div>
            <div className="producto div7">
                <img src={ Imagen7 } className="imagenProducto"></img>
                <h1 className="tituloProducto">Nike Air Force 1 Blanco y Rosa</h1>
                <BotonProducto n="7"/>
            </div>
            <div className="producto div8">
                <img src={ Imagen8 } className="imagenProducto"></img>
                <h1 className="tituloProducto">Nike Air Force 1 Negro y Rojo</h1>
                <BotonProducto n="8"/>
            </div>
            <div className="producto div9">
                <img src={ Imagen9 } className="imagenProducto"></img>
                <h1 className="tituloProducto">Nike Air Force 1 Negro y Rosa</h1>
                <BotonProducto n="9"/>
            </div>
        </div>
    )
}

export default Productos