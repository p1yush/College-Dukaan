import './App.css';
import { Login } from './account/Login';
import { Register } from './account/Register';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './main/HomePage';



function App() {
  return (
  <>
     <Routes> 
      <Route exact path="/"  element={ <HomePage />}/> 
      <Route exact path="/login" element={ <Login />}/>
      <Route exact path="/register" element={ <Register />}/> 
    </Routes> 
  </>
  );
}

export default App;
