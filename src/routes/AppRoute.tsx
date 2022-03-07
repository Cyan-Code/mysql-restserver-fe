import { useContext, useEffect } from 'react'
import { Register } from '../components/auth/Register';
import { AuthContext } from '../context/AuthContext';
//import { Login } from './components/auth/Login';
import { Principal } from '../components/home/Principal';

export const AppRoute = () => {
  const {user} = useContext(AuthContext)
  
  useEffect(() => {
    
  }, [user])
  

  return (
    <>
    {
      (user.id.length !== 0)
        ? <Principal/>
        : <Register/>
    }
    </>
  )
}
