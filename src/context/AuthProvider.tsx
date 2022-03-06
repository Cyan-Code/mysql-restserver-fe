import React from 'react'
import { AuthContext } from './AuthContext'

interface AuthProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const AuthProvider = ({children}:AuthProviderProps) => {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}
