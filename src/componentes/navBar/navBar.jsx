import CartWidget from "../cartWidget/cartWidget"
import './NavBar.css'
  
const NavBar = () => {
    return (
        <nav className="NavBar">
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