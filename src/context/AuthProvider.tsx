import { useReducer } from 'react';
import { user } from '../interfaces/interface';
import { authReducer } from '../reducers/authReducer';
import { AuthContext } from './AuthContext'

const init = () => {
  return {
    name: '',
    id: '',
    level: '' 
  }
};

interface AuthProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const AuthProvider = ({children}:AuthProviderProps) => {

  const [user, dispatch] = useReducer(authReducer, {} as never, init as never);
  const authDispatch = (typeAct:'Login' | 'Logout', token:user):void => {
    dispatch({type:typeAct, payload:token});
  }

  return (
    <AuthContext.Provider value={{
      user,
      authDispatch
    }}>
      {children}
    </AuthContext.Provider>
  )
}
