import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    const handleOnAdd = (cantidad) => {
        const objProduct = {
            id,
            name,
            cantidad,
            price
        }
        
        console.log('Se agrego correctamente', objProduct)
    }



    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{width: 100}} />
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    stock: {stock}
                </p>
            </section>
            <footer>
                <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd}/>
            </footer>
        </article>
    )
}

export default ItemDetail