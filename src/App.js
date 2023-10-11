import { Routes, Route } from 'react-router-dom';
import Home from './router/Home/home.component';
import Navigation from './router/Navigation/navigation.component';
import Authentication from './router/authentication/authentication.component';
import Shop from './router/shop/shop.component';
import CheckOut from './router/checkout/checkout.component';
const App = () => {

  return(
    <Routes>
         <Route path = '/' element = {<Navigation />}>
        <Route path = 'shop' element = {<Shop />}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<CheckOut/>}/>
      </Route>
    </Routes>
  )
}

export default App;
