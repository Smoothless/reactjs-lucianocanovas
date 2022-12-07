function botonProducto (props) {
    return(
            <a href={"/productos/id"+props.n} id="boton" className="botonProducto">Ver Detalles</a>
    )
}

export default botonProducto