import React from 'react'
import { useGetUsers } from '../hooks/useGetUsers';

export const Principal = () => {
  const usuarios = useGetUsers();
  return (
    <>
    <div className="container">
      <div className="d-flex bd-highlight mb-3">
        <div className="me-auto p-2 bd-highlight">Users</div>
      </div>
      
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
            </tr>
          </thead>
          <tbody id="mytable">
            {
              usuarios?.usuarios.map((user)=>(
                <tr key = {user.email}>
                  <td>{user.nombre}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  </>
  )
}