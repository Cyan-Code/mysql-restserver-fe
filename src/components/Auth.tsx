import React from 'react';
import '../styles/Auth.css';
import { useForm } from '../hooks/useForm';
import { handleFetch } from '../helpers/handleFetch';

export const Auth = () => {

  const {formulario:login, onChange:onChangeLogin} = useForm({
    password: '',
    email: ''
  })
  
  const {formulario:register, onChange:onChangeRegister} = useForm({
    nombre:'',
    password: '',
    passwordConf: '',
    email: ''
  })

  const handleLogin = (e:React.FormEvent<HTMLFormElement>) => {
    localStorage.setItem('email', login.email)
  }

  const handleRegister = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleFetch({method:'POST'}, register)
    localStorage.setItem('email', register.email)
  }

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                value={login.email}
                onChange={({target})=>onChangeLogin(target.value, 'email')}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                value={login.password}
                onChange={({target})=>onChangeLogin(target.value, 'password')}
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={(e)=>handleRegister(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                value={register.nombre}
                onChange={({target})=>onChangeRegister(target.value, 'nombre')}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                value={register.email}
                onChange={({target})=>onChangeRegister(target.value, 'email')}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                value={register.password}
                onChange={({target})=>onChangeRegister(target.value, 'password')}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                value={register.passwordConf}
                onChange={({target})=>onChangeRegister(target.value, 'passwordConf')}
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
