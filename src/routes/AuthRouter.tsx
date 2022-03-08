import React from 'react'
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';

export const AuthRouter = () => {
  return (
    <>
      <Login />
      <Register />
      <div>AuthRouter</div>
    </>
    )
}
