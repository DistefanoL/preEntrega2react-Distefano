import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { getProductByCategory, getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductByCategory : getProducts
        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    },  [categoryId])



    return (
        <div className='ItemListContainer'> 
            <ItemList products={products}/>
        </div>
    )
}


export default ItemListContainer

