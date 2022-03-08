import { ShowTables } from "../ShowTables";

import "../home/Home.css";
import { useGetUsers } from "../../hooks/useGetUsers";
import { useContext, useState } from 'react';
import { AuthContext } from "../../context/AuthContext";

import { useEffect } from "react";

export const Principal = () => {
  const {user} = useContext(AuthContext)
  
  const [path, setPath] = useState('students');
  
  const users = useGetUsers(path);
  useEffect(() => {
    
  }, [path])
  

  return (
    <>
      <div className="row container">
        <div className="col-2" style={{height:"100vh"}}>
          {
            (user.level === 'admin')
            ? (
              <div className="row pt-5">
                <button className="btn-primary">  Crear Estudiante</button>
              </div>
              )
            : <div></div>
          }
          {/*  */}
          <div className="row pt-5">
            <button 
                className="btn-primary"
                onClick={()=>setPath('students')}
              >
                Ver estudiantes</button>
          </div>
          <div className="row pt-5">
            <button 
                className="btn-primary"
                onClick={()=>setPath('users')}
              >
                Reporte Usuarios</button>
          </div>
          <div className="row pt-5">
            <button 
                className="btn-primary"
                onClick={()=>setPath('students/audit')}
              >
                Reporte Auditoria</button>
          </div>
          {/*  */}
          <div className="row pt-5">
            <button className="btn-primary">  Regresar</button>
          </div>
          <hr />
          <div className="row pt-5">
            <button className="btn-danger">  Salir</button>
          </div>
        </div>
        <div className="col">
          <ShowTables users={users}/>
        </div>
      </div>
    </>
  );
};
