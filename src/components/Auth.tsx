import React from 'react';
import '../styles/Auth.css';
import { useForm } from '../hooks/useForm';

export const Auth = () => {

  const {formulario:login, onChange:onChangeLogin} = useForm({
    lPassword: '',
    lEmail: ''
  })
  const {lPassword, lEmail} = login;
  
  const {formulario:register, onChange:onChangeRegister} = useForm({
    rName:'',
    rPassword: '',
    rPasswordConf: '',
    rEmail: ''
  })
  const {rName, rPassword, rPasswordConf, rEmail} = register;

  const handleLogin = (e:React.FormEvent<HTMLFormElement>) => {
    localStorage.setItem('email', login.lEmail)
  }

  const handleRegister = (e:React.FormEvent<HTMLFormElement>) => {
    console.log(login);
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
                value={lEmail}
                onChange={({target})=>onChangeLogin(target.value, 'lEmail')}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                value={lPassword}
                onChange={({target})=>onChangeLogin(target.value, 'lPassword')}
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
                value={rName}
                onChange={({target})=>onChangeRegister(target.value, 'rName')}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                value={rEmail}
                onChange={({target})=>onChangeRegister(target.value, 'rEmail')}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                value={rPassword}
                onChange={({target})=>onChangeRegister(target.value, 'rPassword')}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                value={rPasswordConf}
                onChange={({target})=>onChangeRegister(target.value, 'rPasswordConf')}
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
