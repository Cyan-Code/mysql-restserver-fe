import { useEffect, useState } from "react";

interface Users {
  users: user[] |[]
}

interface user {
  name: string;
  level: string;
  password: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export const useGetUsers = () => {
  
  const [users, setUser] = useState<Users>()
  
  useEffect(() => {
    fetch('http://localhost:8000/api/users/', {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(resp => setUser(resp))
  }, [])
  
  return users;
}
