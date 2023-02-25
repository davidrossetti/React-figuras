
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './NavBar.js/NavBar';
function App() {
  return (
      
     <BrowserRouter>
    
     <NavBar/>
    
       <Routes>
           <Route path="/" element={<ItemListContainer/>}/>
           <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
           <Route path="/item/:producto" element={<ItemDetailContainer/>}/>
    //       {/* <Route path="*" element={<PaginaInexistente/>}> */}

       </Routes>
     </BrowserRouter>

  );
}

export default App;
