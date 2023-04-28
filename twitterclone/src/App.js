import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login';
import SignupPage from './Pages/Signuppage/Signuppage';
import { Provider } from 'react-redux';
import store from './Component/Redux/store';
import Home from './Pages/Home Page/Home';

function App() {
  return (
    <Provider store={store} >

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/signup' element={<SignupPage />}></Route>
        <Route path='/Home' element={<Home />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
