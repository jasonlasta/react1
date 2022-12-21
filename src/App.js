import './App.css';
import { BrowserRouter, Routes,  Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'; 


function App() {
  return (

    <> 
    <BrowserRouter> 
    
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/productos/:categoriaId' element={<ItemListContainer />}/>
    
      <Route path='/detail/:detailId' element={<ItemDetailContainer />}/>
      <Route path='/cart' element={<Cart />}/> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
