import './App.css';
import { Login } from './account/Login';
import { Register } from './account/Register';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './main/HomePage';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';



function App() {
  return (
  <>
     <GlobalStyle/>
    <Routes> 
      <Route exact path="/"  element={ <HomePage />}/> 
      <Route exact path="/Login" element={ <Login />}/> 
      <Route exact path="/Register" element={ <Register />}/> 
    </Routes> 
  </>
  );
}

export default App;
