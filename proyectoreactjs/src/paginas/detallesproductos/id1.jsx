import Imagen1 from "../../recursos/imagen1.jpg"

function Id1 () {
    return (
        <div className="detalles">
            <img className="imagenDetalle" src={ Imagen1 }></img>
            <h1 className="tituloDetalle">Nike Air Force 1 Blanco y Negro</h1>
            <h2 className="precioDetalle">$100</h2>
            <button className="botonDetalle">Agregar al Carrito</button>
        </div>
    )
}

export default Id1