import './checkout-item.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckOutItem = () =>{
    const {cartItems,addItemToCart,removeItemFromCart} = useContext(CartContext)
    return(
        <div>
            <h1>hello I am the checkout page </h1>
            <div>
                {cartItems.map((cartItem)=>{
                    const {name, imageUrl, price, quantity} = cartItem;
                    return(
                        <div className="checkout-item-container"> 
                            <div className="image-container">
                                <img src={imageUrl} alt={`${name}`} />
                             </div>
                            <span className='name'>{name}</span>
                            <span onClick={()=>removeItemFromCart(cartItem)}>-</span>
                            <span className='price'>{price}</span>
                            <span onClick={()=>addItemToCart(cartItem)}>+</span>
                            <span className='quantity'>{quantity}</span>
                            <span className='remove-button'>&#10005;</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CheckOutItem;