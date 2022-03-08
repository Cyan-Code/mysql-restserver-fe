import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext';
import { AuthRouter } from './AuthRouter';
import { PrincipalRoute } from './PrincipalRoute';

export const AppRoute = () => {
  const {user} = useContext(AuthContext)
  
  useEffect(() => {
    
  }, [user])
  

  return (
    <>
    {
      (user.id.length !== 0)
        ? <PrincipalRoute/>
        : <AuthRouter/>
    }
    </>
  )
}
