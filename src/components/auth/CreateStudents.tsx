import React from 'react'
import { swAlert } from '../../helpers/handleAlerts';
import { handleFetch } from '../../helpers/handleFetch';
import { useForm } from '../../hooks/useForm';

export const CreateStudents = () => {

  const {formulario:register, onChange:onChangeRegister} = useForm({
    name:'',
    id: '',
    program:''
  });

  const evaluate = () => {
    const {id,name,program} = register
    if (id.length === 0 || name.length === 0 || program.length === 0) {
      return false
    } else {
      return true
    }
  }

  const handleRegister = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (evaluate()) {
      await handleFetch({
        method:'POST',
        path: '/students'
      }, register)
      .then(resp => {
        if (resp.state !== 'ok') {
          const passing = {icon: 'error', msg: resp.msg, title: 'Error en el registro', timer: 5000}
          swAlert(passing);
        } else {
          const passing = {icon: 'success', msg: resp.msg, title: 'Autenticado', timer: 1000}
          swAlert(passing);
        }
      })
    } else {
      const passing = {icon: 'error', msg: 'revisa las credenciales', title: '', timer: 5000}
      swAlert(passing);
    }
  }

  return (
    <div className="container login-container">
      <div className="row">
      <div className="col login-form-2">
          <h3>Crear Estudiante</h3>
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
                type="text"
                className="form-control"
                placeholder="Programa"
                value={register.program}
                onChange={({target})=>onChangeRegister(target.value, 'program')}
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Crear estudiante" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
