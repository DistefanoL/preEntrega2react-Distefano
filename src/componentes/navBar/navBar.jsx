import CartWidget from "../cartWidget/cartWidget"
import './NavBar.css'
import { Link } from "react-router-dom"
  
const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to={'/'}>Ecommerce</Link>
            <div>
                <Link to={'/category/celular'}>Celulares</Link>
                <Link to={'/category/televisor'}>Televisiones</Link>
                <Link to={'/category/notebook'}>Notebooks</Link>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar