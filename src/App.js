import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import CartProvider from './context/CartProvider';
import NavBar from './NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  return (
      
     <BrowserRouter>
      <CartProvider>
      <CartWidget/>
      <NavBar/>
       <Routes>
           <Route path="/" element={<ItemListContainer/>}/>
           <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
           <Route path="/item/:producto" element={<ItemDetailContainer/>}/>
           <Route path="/cart" element={<Cart/>}/>
    //       {/* <Route path="*" element={<PaginaInexistente/>}> */}

       </Routes>
       </CartProvider>
     </BrowserRouter>

  );
}

export default App;
