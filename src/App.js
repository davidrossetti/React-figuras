
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import IntemListContainer from './pages/ItemListContainer/IntemListContainer';
import NavBar from './NavBar.js/NavBar';

function App() {
  return (
    
    <BrowserRouter>
    
    <NavBar/>
    <IntemListContainer greeting="hola"/>
      <Routes>
          <Route path="/" element={<IntemListContainer/>}/>
          <Route path="/category/:categoryId" element={<IntemListContainer/>}/>
          <Route path="/item:id" element={<ItemDetailContainer/>}/>
          {/* <Route path="*" element={<PaginaInexistente/>}> */}

      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <p>hola</p>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
