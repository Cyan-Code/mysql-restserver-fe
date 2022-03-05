import './App.css';
//import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Principal } from './components/home/Principal';


function App () {
  
  return (
    <>
    {
      (!localStorage.getItem('token'))
        ? <Register></Register>
        : <Principal></Principal>  
    }
    </>
  );
}

export default App;
