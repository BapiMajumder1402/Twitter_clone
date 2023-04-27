import './App.css';
import Nav from './Component/Navbar/Nav';
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login';
import SignupPage from './Pages/Signuppage/Signuppage';
import Left from './Component/Left component/Left';
import FeedTop from './Component/Feed Top/FeedTop';

function App() {
  return (

    <div className="App">
      <Left/>
      <FeedTop/>
      {/* <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<SignupPage />}></Route>
      </Routes> */}
      {/* <Nav></Nav> */}
    </div>
  );
}

export default App;
