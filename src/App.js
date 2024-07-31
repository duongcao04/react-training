import { Route, Routes } from 'react-router-dom';
import BT1 from './bt1/bt1';
import BT4 from './bt4/BT4';
import Home from './bt4/pages/Home';
import About from './bt4/pages/About';
import Product from './bt4/pages/Product';
import Login from './bt4/pages/Login';
import Signup from './bt4/pages/Signup';
import BT5 from './bt5/BT5';
import Cart from './bt5/pages/Cart';

function App() {
  return (
    <Routes>
      <Route path='/bt1' element={<BT1 />} />
      <Route path='/bt4' element={<BT4 />}>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='product' element={<Product />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>
      <Route path='/bt5' element={<BT5 />}>
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
