// import logo from './logo.svg';
import './App.css';
import UserContext from './UserContext';
import MyRouter from './components/MyRouter';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function App() {
    const navigate=useNavigate()
  return (
    <div className="App" >
      <UserContext >

        <nav className="navbar navbar-dark bg-dark fixed-top" >
          <div className="container-fluid justify-content-end" style={{backgroundColor:" rgb(22, 248, 233)"}}>
            <label className="navbar-brand" style={{color:"black"}}>להנחיות</label>
            <button className="navbar-toggler" style={{color:"black"}} onClick={()=>{navigate('/guidence')}}>
              <span className="navbar-toggler-icon" ></span>
            </button>
          </div>
        </nav>   

        <MyRouter/>

        <Button variant="text" size="medium" style={{bottom: "10%",position:"absolute",right:"3%",borderRadius:"45%"}} onClick={()=>{navigate('/guidence')}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-question-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z"/>
</svg>
          
        </Button>
        <Button variant="text" size="medium" style={{bottom: "20%",position:"absolute",right:"3%",borderRadius:"45%"}} >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
</svg>
          
        </Button>
      </UserContext>
    </div>
  );
}

export default App;
