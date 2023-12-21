import CartWidget from "../cartWidget/cartWidget"

const NavBar = () => {
    return (
        <nav>
            <h2>Ecommerce</h2>
            <div>
                <button>Productos</button>
                <button>Sucursales</button>
                <button>Acerca de</button>
                <button>Contactanos</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar