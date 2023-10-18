import Button from '../button/button.component'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, EmptyMessage, CartItems  } from './cart-dropdown.styles.jsx';
import { CartContext } from '../../context/cart.context';
import './cart-dropdown.styles.jsx'

const CartDropdown = () =>{
    const {cartItems,isCartOpen ,setIsCartOpen} =useContext(CartContext);

    const navigate = useNavigate()

    const goTOCheckOutPage = () =>{
        navigate('/checkout')
        setIsCartOpen(!isCartOpen);

    }
    return(
        <CartDropdownContainer >
       
            <CartItems>
            {cartItems.length ?(cartItems.map(
                (item) => <CartItem key={item.id} cartItem={item}/>)):
            (<EmptyMessage>Your cart is empty</EmptyMessage>)
            
          }
            </CartItems>
            <Button onClick={goTOCheckOutPage}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;