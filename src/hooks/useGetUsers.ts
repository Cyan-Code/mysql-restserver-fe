import { useEffect, useState } from "react";

export interface Users {users: user[] |[];}


interface user {
  name: string;
  level: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  nameAdmin?: string;
  idAdmin?: string;
  idStudent?: string;
  program?: string;
  password?: string;
}

type paths = | 'users' | 'students' | 'students/audit';

export const useGetUsers = (path:paths) => {
  
  const [users, setUser] = useState<Users>()
  
  useEffect(() => {
    fetch(`http://localhost:8000/api/${path}`, {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(resp => setUser(resp))
  }, [path])
  
  return users;
}
