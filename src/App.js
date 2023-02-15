import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import MyRouter from './components/MyRouter';
// import Page from './components/Login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import UserContext from './components/UserContext';
import ChildForm from './components/ChildForm'
function App() {
  return (
    
      <div >
  
         <BrowserRouter>
         <MyRouter/>
     
     </BrowserRouter>
      </div>
    );
}

export default App;
