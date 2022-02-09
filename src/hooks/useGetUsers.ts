import { useEffect, useState } from "react";

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

export const useGetUsers = () => {
  
  const [usuarios, setUser] = useState<Usuarios>()
  
  useEffect(() => {
    fetch('http://localhost:8000/api/usuarios/', {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(resp => setUser(resp))
  }, [])
  
  return usuarios;

}
