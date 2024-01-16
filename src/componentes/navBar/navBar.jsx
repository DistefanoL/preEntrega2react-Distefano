import CartWidget from "../cartWidget/cartWidget"

const NavBar = () => {
    return (
        <nav>
            <h2>Ecommerce</h2>
            <div>
                <button>Celulares</button>
                <button>Televisiones</button>
                <button>Notebooks</button>
                <button>Acerca de</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar