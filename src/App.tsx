import { useEffect, useState } from 'react';
import './App.css';

interface Usuarios {
  usuarios: Usuario[] | []
}

interface Usuario {
  nombre: string;
  email: string;
  password: string;
  estado: boolean;
  createdAt: string;
  updatedAt: string;
}

function App () {
  
  const [usuarios, setUser] = useState<Usuarios>()
  
  useEffect(() => {
    fetch('http://localhost:8000/api/usuarios/', {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(resp => setUser(resp))
  }, [])

  return (
    <>
    <div className="container">
      <div className="d-flex bd-highlight mb-3">
        <div className="me-auto p-2 bd-highlight">Users</div>
        <div className="p-2 bd-highlight">
          <button type="button" className="btn btn-secondary">Create</button>
        </div>
      </div>
      
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody id="mytable">
            <tr>
              <td>he</td>
              <td>hi</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> 
    </>
  );
}

export default App;
