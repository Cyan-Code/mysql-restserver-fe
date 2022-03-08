import { ShowTables } from "../ShowTables";

import "../home/Home.css";
import { useGetUsers } from "../../hooks/useGetUsers";
import { useEffect } from "react";

export const Principal = () => {

  useEffect(() => {
    
  }, [])
  
  return (
    <>
      <div className="row container">
        <div className="col-2" style={{height:"100vh"}}>
          <div className="row pt-5">
            <button className="btn-primary">  Crear Estudiante</button>
          </div>
          <div className="row pt-5">
            <button className="btn-primary">  Ver estudiantes</button>
          </div>
          <div className="row pt-5">
            <button className="btn-primary">  Reporte Usuarios</button>
          </div>
          <div className="row pt-5">
            <button className="btn-primary">  Reporte Auditoria</button>
          </div>
          <div className="row pt-5">
            <button className="btn-primary">  Reporte Estudiantes</button>
          </div>
          <div className="row pt-5">
            <button className="btn-primary">  Regresar</button>
          </div>
          <hr />
          <div className="row pt-5">
            <button className="btn-danger">  Salir</button>
          </div>
        </div>
        <div className="col">
          <ShowTables />
        </div>
      </div>
    </>
  );
};
