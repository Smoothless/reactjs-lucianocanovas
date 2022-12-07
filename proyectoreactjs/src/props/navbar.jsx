import Carrito from "./cartwidget"

function Navbar () {
    return (
        <header className="navegacion">
            <a href="/" className="titulo"><h2>EPICSNEAKERS</h2></a>
            <ul>    
                <a href="/">Inicio</a>
                <a href="/productos">Productos</a>
                <a href="/contacto">Contacto</a>
            </ul>
            <Carrito/>
        </header>
    )
}

export default Navbar