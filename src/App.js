import './App.css';
import { BrowserRouter, Routes,  Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import ItemDetail from './components/ItemDetail'; */
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'; 
import CartProvider from './context/CartContext';
import React from 'react';



function App() {
  return (

    <> 
  <BrowserRouter> 
   <CartProvider>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/productos/:categoriaId' element={<ItemListContainer />}/>
      <Route path='/detail/:detailId' element={<ItemDetailContainer />}/>
      <Route path='/cart' element={<Cart />}/> 
    </Routes>
    </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
