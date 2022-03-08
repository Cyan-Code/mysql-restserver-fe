import { Users } from '../hooks/useGetUsers';

export const ShowTables = (props: {users:(Users|undefined)}) => {
  
  return (
    <div className="container">
      <div className="d-flex bd-highlight mb-3">
        <div className="me-auto p-2 bd-highlight">Users</div>
      </div>
      
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">id</th>
              <th scope="col">Programa</th>
              <th scope="col">idStudent</th>
              <th scope="col">Admin</th>
              <th scope="col">id Admin</th>
              <th scope="col">level</th>
              <th scope="col">Creado</th>
            </tr>
          </thead>
          <tbody id="mytable">
            {
              props.users?.users.map((user)=>(
                <tr key = {user.id}>
                  <td>{user.name}</td>
                  <td>{user.id}</td>
                  <td>{user.program}</td>
                  <td>{user.idStudent}</td>
                  <td>{user.nameAdmin}</td>
                  <td>{user.idAdmin}</td>
                  <td>{user.level}</td>
                  <td>{user.createdAt}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
