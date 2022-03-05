import React from 'react';
import { useForm } from '../../hooks/useForm';
import { handleFetch } from '../../helpers/handleFetch';
import '../../styles/Auth.css';
import { useValidationLogin } from '../../hooks/useForm-validation';
import { swAlert } from '../../helpers/handleAlerts';

export const Login = () => {

  const {formulario:login, onChange:onChangeLogin} = useForm({
    password: '',
    id: ''
  })

  const returnLogin = useValidationLogin(login);

  const handleLogin = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (returnLogin) {
      await handleFetch({
        method:'POST',
        path: '/auth/login'
      }, login)
      .then(resp => {
        if (resp.msg !== 'ok') {
          const passing = {icon: 'error', msg: resp.msg, title: 'Error en la autenticacion', timer: 5000}
          swAlert(passing);
        } else {
          const passing = {icon: 'success', msg: resp.msg, title: 'Autenticado', timer: 1000}
          swAlert(passing);
          localStorage.setItem('token', resp.token);
        }
      })
    } else {
      const passing = {icon:'error' , title: 'Credenciales no validas', text: 'Revisa tus credenciales'}
      await swAlert(passing)
    }
  }

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="id"
                className="form-control"
                placeholder="id"
                value={login.id}
                onChange={({target})=>onChangeLogin(target.value, 'id')}
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
      </div>
    </div>
  )
}
