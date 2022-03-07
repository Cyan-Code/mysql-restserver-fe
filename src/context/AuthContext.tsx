import { createContext } from 'react';
import { user } from '../interfaces/interface';

export type UserContextProps = {
  user: user,
  authDispatch: (type:'Login' | 'Logout', payload:user) => void;
}


export const AuthContext = createContext<UserContextProps>({} as UserContextProps);
