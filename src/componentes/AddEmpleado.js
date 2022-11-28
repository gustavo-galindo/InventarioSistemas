import React from 'react'
import { Link } from 'react-router-dom';

export const AddEmpleado =() => {
  return (
    <div>                     
        <div className="container justify-content-center col-lg-6" >
            {/* Formulario Agregar Orden Inicio*/}
            <div className="card mb-3  ">
                <h3 className="text-center mt-5">REGISTRAR EMPLEADO </h3>
                <div className="card-body ">
                
                    <form id="addForm" action="#" method="" className="needs-validation" novalidate autocomplete="off">
                        <div className="form-row">             
                            <div className="form-group col-lg-8">
                                <label>Nombre Del Usuario</label>
                                <div className="d-flex flex-row justify-content-between align-items-center">                      
                                    <input type="text" className="form-control" id="nombre_usuario" name="nombre_usuario" required />
                                </div>
                            </div>
                        </div>
                        
                        <div className="form-row">

                            <div className="form-group col-lg-6">
                                <label htmlFor="inputName">Cargo</label>
                                <input type="text" className="form-control" id="Cargo" name="cargo" placeholder="Cargo del Empleado" required />
                            </div>                        
                        </div>

                        <div className="form-row">

                            <div className="form-group col-lg-6">
                                <label htmlFor="inputName">Cedula</label>
                                <input type="text" className="form-control" id="Cedula" name="cedula" placeholder="Cedula del Empleado" required />
                            </div>                           
                            
                        </div>
                        
                        <hr />
                        
                            
                        <div className="form-row">
                            <button className="btn btn-primary bg-instaya btn-block col-lg-4 mt-5" type="submit">Registrar</button>
                            
                            <Link to="/Home" relative="/" className="btn btn-primary bg-dark btn-block col-lg-4 mt-5 ml-5"> 
                                
                                    Cancelar
                                
                            </Link>
                        </div>
                    </form>                
                </div>
            </div>
            
        </div>
    </div>

)
};