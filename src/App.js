import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Pages/Login/Login';
import SignupPage from './Pages/Signuppage/Signuppage';
import store from './Component/Redux/store';
import Home from './Pages/Home Page/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/signup' element={<SignupPage />}></Route>
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
