import './App.css';
import Nav from './Component/Navbar/Nav';
import {Route, Routes} from 'react-router-dom'
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Login' element={<Login/>}></Route>
        <Route></Route>
      </Routes>
      <Nav></Nav>
    </div>
  );
}

export default App;
