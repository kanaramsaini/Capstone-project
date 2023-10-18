import { Fragment, useContext} from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { NavigationContainer, LogoContainer, LinksContainer } from "./navigation.styles";
import { NavLinks } from "./navigation.styles";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
// import './navigation.styles.scss';
import { ReactComponent as CrownLogo } from '../../components/assets/crown.svg';
import { CartContext } from "../../context/cart.context";
const Navigation = ()=>{
    const {currentUser,setCurrentUser} = useContext(UserContext)
    const {isCartOpen,setIsCartOpen} = useContext(CartContext)
    
    // const signHandler = async () =>{
    //     const res = await signOutUser();
    //     setCurrentUser(null) 
    // }
    

    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
            <CrownLogo className='logo'/>
                </LogoContainer>
                <LinksContainer>
                    <NavLinks to='/shop'>
                        Shop
                    </NavLinks>
                   { 
                   currentUser ? (<NavLinks as='span' onClick={signOutUser}>SIGN OUT</NavLinks>):(<NavLinks to='/auth'>
                      SIGN IN
                    </NavLinks>)}
                    <CartIcon />
                </LinksContainer>
               { isCartOpen && <CartDropdown />}
            </NavigationContainer>
             <Outlet />
        </Fragment>
        
    )
}
export default Navigation;