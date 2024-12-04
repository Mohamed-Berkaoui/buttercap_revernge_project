import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
     
     <Nav/>
     <Routes>
        <Route path='/products' element={<Products/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
