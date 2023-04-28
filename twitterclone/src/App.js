import './App.css';
import Nav from './Component/Navbar/Nav';
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login';
import SignupPage from './Pages/Signuppage/Signuppage';
import { Provider } from 'react-redux';
import store from './Component/Redux/store';
import Feed from './Component/FeedComponent/Feed';
function App() {
  return (
    <Provider store={store} >
      <Feed />
      {/* <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<SignupPage />}></Route>
      </Routes>
      <Nav></Nav> */}
    </Provider>
  );
}

export default App;
