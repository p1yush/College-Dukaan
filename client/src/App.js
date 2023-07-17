import './App.css';
import { Login } from './account/Login';
import { Register } from './account/Register';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './main/HomePage';
import { useState } from 'react';


function App() {
  const [user, setLoginUser] = useState({});
  const location = useLocation();
  return (
  <>
  <Routes location={location} key={location.pathname}>
      <Route exact path="/"  element={user && user._id ? <HomePage/>: <Login setLoginUser={setLoginUser}/> }/>
      <Route exact path="/login" element={ <Login setLoginUser={setLoginUser}/>}/>
      <Route exact path="/register" element={ <Register />}/> 
    </Routes> 
  </>
  );
}

export default App;
