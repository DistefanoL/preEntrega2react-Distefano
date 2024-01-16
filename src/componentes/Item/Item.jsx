import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {
    return (
        <article className='CardItem'>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture className='ItemImg'>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer>
                <Link to={`/detail/${id}`}>Ver Detalle</Link>
            </footer>
        </article>
    )
}

export default Item