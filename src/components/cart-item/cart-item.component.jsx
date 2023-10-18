import './cart-item.styles.jsx';
import { CartItemContainer, Image, Name, ItemDetails } from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
    const { name, quantity,imageUrl,price, } = cartItem;
    return (
        <CartItemContainer>
            <Image src={imageUrl} alt={`${name}`} />

            <ItemDetails>
                <Name as='span'>{name}</Name>
                <span className='price'>{quantity} X ${price}</span>
            </ItemDetails>
            
        </CartItemContainer>
    )
}


export default CartItem;