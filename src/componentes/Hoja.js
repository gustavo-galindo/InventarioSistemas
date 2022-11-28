import React from 'react'
import { Link } from 'react-router-dom';

export const Hoja =() => {
  return (
<div>      
                
        <div className="container justify-content-center col-lg-6" >
            {/* Formulario Agregar Orden Inicio*/}
            <div className="card mb-3  ">
                <h3 className="text-center mt-5">REGISTRAR HOJA DE VIDA </h3>
                <div className="card-body ">
                
                <form id="addForm" action="#" method="" className="needs-validation" novalidate autocomplete="off">
                    <div className="form-row">                   
                        <div className="form-group col-lg-4">
                            <label htmlFor="inputDate">Nombre</label>
                            <input type="text" className="form-control" id="inputDate" name="date" required />
                            
                        </div>
                
                        <div className="form-group col-lg-8">
                            <label>Disponibilidad Horaria</label>
                            <div className="d-flex flex-row justify-content-between align-items-center">
                            <input type="time" className="form-control" id="inputHora" name="hora" required />
                            <span> - </span>
                            <input type="time" className="form-control" id="inputHora" name="hora" required />
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-row">

                        <div className="form-group col-lg-6">
                        <label htmlFor="inputName">Ciudad de Recogida</label>
                        <input type="text" className="form-control" id="inputCrecogida" name="crecogida" placeholder="Municipio-Departamento" required />
                        </div>
                        
                        <div className="form-group col-lg-6">
                        <label htmlFor="inputName">Direccion</label>
                        <input type="text" className="form-control" id="inputDir" name="dir" placeholder="Calle 00 # 00-00 " required />
                        </div>

                        
                    </div>
                    <hr />
                    <div className="form-row">

                        <div className="form-group col-lg-2">
                            <label>Alto(cm)</label>
                            <input type="number" max="200.00" min="1.00" step="1" className="form-control" id="inputAlto" placeholder="1"name="peso" required />
                        </div>
                        <div className="form-group col-lg-2">
                            <label>Largo(cm)</label>
                            <input type="number" max="200.00" min="1.00" step="1" className="form-control" id="inputLargo" placeholder="1"name="peso" required />
                        </div>
                        <div className="form-group col-lg-2">
                            <label>Acho(cm)</label>
                            <input type="number" max="200.00" min="1.00" step="1" className="form-control" id="inputAncho" placeholder="1"name="peso" required />
                        </div>
                        <div className="form-group col-lg-2 ml-5">
                            <label>Peso(Kg)</label>
                            <input type="number" max="40.00" min="1.00" step="0.5" className="form-control " id="inputPeso" placeholder="1"name="peso" required />
                        </div>
                    </div>
                    <div className="form-group ml-3">
                    <legend className="col-form-label  pt-0">Es mercancia delicada?</legend>
                    <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" id="inlineRadioType1" name="roomType" value="type1" required />
                        <label className="form-check-label" htmlFor="inlineRadioType1">Si</label>
                    </div>
                    <div className="form-check form-check-inline ml-3">
                        <input type="radio" className="form-check-input" id="inlineRadioType2" name="roomType" value="type2" required />
                        <label className="form-check-label" htmlFor="inlineRadioType2">No</label>
                    </div>
                    
                    </div>
                    <hr />
                    <div className="form-row">

                        <div className="form-group col-lg-6">
                        <label htmlFor="inputName">Ciudad de destino</label>
                        <input type="text" className="form-control" id="inputCrecogida" name="crecogida" placeholder="Municipio-Departamento" required />
                        </div>
                        
                        <div className="form-group col-lg-6">
                        <label htmlFor="inputName">Direccion</label>
                        <input type="text" className="form-control" id="inputDir" name="dir" placeholder="Calle 00 # 00-00 " required />
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