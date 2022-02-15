import './App.css';
import { Auth } from './components/Auth';
import { Principal } from './components/Principal';


function App () {
  const email = localStorage;  
  return (
    <>
    {
      (!email.getItem('email'))
        ? <Auth></Auth>
        : <Principal></Principal>  
    }
    </>
  );
}

export default App;
