import './ItemCount.css'
import { useState } from 'react'


const ItemCount = ({stock, inicial, onAdd}) => {
    const [cantidad, setCantidad] = useState(inicial)

    const incremento = () => {
        if (cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }

    const decremeto = () => {
        if(cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return(
        <div>
            <div className='ItemCount'>
                <button className='Boton' onClick={decremeto}>-</button>
                <h3 className='Numero'>{cantidad}</h3>
                <button className='Boton' onClick={incremento}>+</button>
            </div>
            <div>
                <button className='Boton' onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar al Carrito</button>
            </div>
        </div>
    )
}


export default ItemCount