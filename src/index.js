import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Login } from './componentes/Login';
import { Equipos} from './componentes/Equipos';
import { Hoja} from './componentes/Hoja';
import { Empleado } from './componentes/Empleado';
import { AddEmpleado } from './componentes/AddEmpleado';
import { AddEquipo } from './componentes/AddEquipo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<App />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Equipos' element={<Equipos />}/>
        <Route path='/Hoja' element={<Hoja />}/>
        <Route path='/Empleado' element={<Empleado />}/>
        <Route path='/AddEmpleado' element={<AddEmpleado />}/>
        <Route path='/AddEquipo' element={<AddEquipo />}/>
      </Routes>
    </Router>
   
  </React.StrictMode>

  
);


