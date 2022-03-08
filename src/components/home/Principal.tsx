import { ShowTables } from "../ShowTables";

import "../home/Home.css";
import { useGetUsers } from "../../hooks/useGetUsers";
import { useContext, useState } from 'react';
import { AuthContext } from "../../context/AuthContext";

import { useEffect } from "react";
import { CreateStudents } from "../auth/CreateStudents";

export const Principal = () => {
  const {user, authDispatch} = useContext(AuthContext);
  const [path, setPath] = useState('students');
  const users = useGetUsers(path);
  useEffect(() => {}, [path]);
  
  const [createStudent, setcreateStudent] = useState(false);
  
  return (
    <>
      <div className="row container">
        <div className="col-2" style={{height:"100vh"}}>
          {
            (user.level === 'admin')
            ? (
              <div className="row pt-5">
                <button
                  className="btn-primary"
                  onClick={()=> setcreateStudent(prev => !prev)}
                >  {(createStudent)?`Volver`:`Crear Estudiante`}</button>
              </div>
              )
            : <div></div>
          }
          {/*  */}
          { (!createStudent)
              ? (<>
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
                </>
              ): <div></div>
              }
          <hr />
          <div className="row pt-5">
            <button className="btn-danger" onClick={()=>authDispatch('Logout', user)}>  Salir</button>
          </div>
        </div>
        <div className="col">
          {
            (createStudent)
              ?<CreateStudents />
              :<ShowTables users={users}/>
          }
        </div>
      </div>
    </>
  );
};
