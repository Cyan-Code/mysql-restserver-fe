import { useGetUsers } from "../hooks/useGetUsers";
//import { user } from "../interfaces/interface"

export const ShowTables = () => {
  const users = useGetUsers();
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
              <th scope="col">level</th>
              <th scope="col">id</th>
            </tr>
          </thead>
          <tbody id="mytable">
            {
              users?.users.map((user)=>(
                <tr key = {user.id}>
                  <td>{user.name}</td>
                  <td>{user.level}</td>
                  <td>{user.id}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
