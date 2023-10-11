import { Fragment, useContext} from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import './navigation.styles.scss';
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
            <div className="navigation">
                <Link className="logo-container" to='/'>
            <CrownLogo className='logo'/>
                </Link>
                <div className="links-container">
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                   { 
                   currentUser ? (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>):(<Link className="nav-link" to='/auth'>
                      SIGN IN
                    </Link>)}
                    <CartIcon />
                </div>
               { isCartOpen && <CartDropdown />}
            </div>
             <Outlet />
        </Fragment>
        
    )
}
export default Navigation;