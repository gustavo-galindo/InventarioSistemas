import React from 'react'
import { Link } from 'react-router-dom';

export const AddEquipo =() => {
  return (
    <div>      
                
        <div className="container justify-content-center col-lg-6" >
            {/* Formulario Agregar Orden Inicio*/}
            <div className="card mb-3  ">
                <h3 className="text-center mt-5">REGISTRAR EQUIPO </h3>
                <div className="card-body ">
                
                <form id="addForm" action="#" method="" className="needs-validation" novalidate autocomplete="off">
                    <div className="form-row">                   
                        
                
                        <div className="form-group col-lg-8">
                            <label>Nombre Del Equipo</label>
                            <div className="d-flex flex-row justify-content-between align-items-center">                      
                                <input type="text" className="form-control" id="nombre_equipo" name="nombre_equipo" required />
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-row">

                        <div className="form-group col-lg-6">
                            <label htmlFor="inputName">Modelo</label>
                            <input type="text" className="form-control" id="modelo" name="modelo" placeholder="Modelo del Equipo" required />
                        </div>
                        
                        <div className="form-group col-lg-6">
                            <label htmlFor="inputName">Serial</label>
                            <input type="text" className="form-control" id="inputDir" name="dir" placeholder="Serial O Service tag" required />
                        </div>                        
                    </div>
                    <hr />

                    <div className="form-row">

                        <div className="form-group col-lg-6">
                            <label htmlFor="inputName">Id Contable</label>
                            <input type="text" className="form-control" id="id_contable" name="id_contable" placeholder="Numero de activo" required />
                        </div>
                        
                        <div className="form-group col-lg-6">
                            <label htmlFor="inputName">Fecha de compra</label>
                            <input type="date" className="form-control" id="fecha_compra" name="fecha_compra" required />
                        </div>                        
                    </div>
                    
                    <div className="form-group ml-3">
                    <legend className="col-form-label  pt-0">Estado</legend>
                    <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" id="inlineRadioType1" name="roomType" value="type1" required />
                        <label className="form-check-label" htmlFor="inlineRadioType1">Activo</label>
                    </div>
                    <div className="form-check form-check-inline ml-3">
                        <input type="radio" className="form-check-input" id="inlineRadioType2" name="roomType" value="type2" required />
                        <label className="form-check-label" htmlFor="inlineRadioType2">Inactivo</label>
                    </div>
                    
                    </div>
                    <hr />
                    <div className="form-row">

                        <div className="form-group col-lg-6">
                        <label htmlFor="inputName">Asignado A: </label>
                        <input type="text" className="form-control" id="usuario" name="usuario" placeholder="Nombre Usuario equipo" required />
                        </div>
                        
                        <div className="form-group col-lg-6">
                        <label htmlFor="inputName">Lugar</label>
                        <input type="text" className="form-control" id="lugar" name="lugar" placeholder="Lugar donde esta el equipo " required />
                        </div>

                        
                    </div>
                        
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