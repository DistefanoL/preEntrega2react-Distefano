import cart from './assets/cart.png'

const CartWidget =  () => {
    return(
        <div className='CartImg'>
            <img src={cart} alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget