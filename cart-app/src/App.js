
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './Component/ProductList';
import CartPage from './Component/CartPage';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar/>
      
      <Routes>
        <Route path='/'element={<ProductList/>}></Route>
        <Route path="/cart" element={<CartPage/>}></Route>
      </Routes>
       
    </div>
  );
}

export default App;
