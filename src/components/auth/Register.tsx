import React from 'react'
import { swAlert } from '../../helpers/handleAlerts';
import { handleFetch } from '../../helpers/handleFetch';
import { useForm } from '../../hooks/useForm'
import { useValidationRegister } from '../../hooks/useForm-validation';
import '../../styles/Auth.css';

export const Register = () => {
  
  const {formulario:register, onChange:onChangeRegister} = useForm({
    name:'',
    password: '',
    passwordConf: '',
    id: '',
    level:''
  });

  const returnRegister = useValidationRegister(register);

  const handleRegister = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (returnRegister) {
      await handleFetch({
        method:'POST',
        path: '/users'
      }, register)
      .then(resp => {
        if (resp.state !== 'ok') {
          const passing = {icon: 'error', msg: resp.msg, title: 'Error en el registro', timer: 5000}
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
      <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={(e)=>handleRegister(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={register.name}
                onChange={({target})=>onChangeRegister(target.value, 'name')}
              />
            </div>
            <div className="form-group">
              <input
                type="id"
                className="form-control"
                placeholder="id"
                value={register.id}
                onChange={({target})=>onChangeRegister(target.value, 'id')}
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
              <input
                type="level"
                className="form-control"
                value={register.level}
                onChange={({target})=>onChangeRegister(target.value, 'level')}
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
            
            <div className="form-group">
              <input type='button' className="btnSubmit" value="Regresar" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )

}
