import { createContext ,useState, useEffect} from "react"


const addCartItem = (cartItems,productToAdd) =>{
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )

    if(existingCartItem){
        return cartItems.map((cartItem)=>cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity+1}:cartItem)
    }

    return [...cartItems,{...productToAdd, quantity:1}]
}

const CartItemRemove= (cartItems,cartItemsToRemove)=>{
    const existingCartItem = cartItems.find(
        (cartItem)=>cartItem.id === cartItemsToRemove.id
        )

        if(existingCartItem.quantity === 1){
            return cartItems.filter(cartItem  => cartItem.id !== cartItemsToRemove.id )
        }

        return cartItems.map((cartItem)=>
        cartItem.id === cartItemsToRemove.id ? {...cartItem, quantity:cartItem.quantity -1}:cartItem
        )
}

export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen: () =>{},
    cartItems:[],
    addItemToCart: () =>{},
    removeItemFromCart: ()=>{},
    cartCount:0
});



export const CartProvider = ({children}) =>{
        const [isCartOpen, setIsCartOpen] = useState(false);
        const [cartItems, setCartItems] = useState([])
        const [cartCount, setCartCount] = useState(0)
      

        useEffect(()=>{
            const newCartCoundt = cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0);
            setCartCount(newCartCoundt)
        },[cartItems])
        const addItemToCart = (productToAdd) =>{
            setCartItems(addCartItem(cartItems,productToAdd))
        }
        const removeItemFromCart = (cartItemsToRemove) =>{
            setCartItems(CartItemRemove(cartItems,cartItemsToRemove))
        }
        const value = {isCartOpen, setIsCartOpen,cartItems,addItemToCart,cartCount,removeItemFromCart}

        return(
            <CartContext.Provider value={value}>{children}</CartContext.Provider>
        )
}