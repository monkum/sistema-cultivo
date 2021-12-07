import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from '../containers/Home';
import ResetPassword from '../containers/ResetPassword';
import NotFound from '../pages/NotFound';
import EditarCultivo from '../containers/EditarCultivo';
import ProgramarFechas from '../containers/ProgramarFechas';
import Principal from '../containers/Principal';
import Usuarios from '../containers/Usuarios';
import RegistroUsuarios from '../containers/RegistroUsuarios';
import EditarUsuarios from '../containers/EditarUsuarios';
import RegistroPredio from '../containers/RegistroPredio';
import AsignacionUsuario from '../containers/AsignacionUsuario';
import CrearCultivo from '../containers/CrearCultivo';
import NuevoCultivo from '../containers/NuevoCultivo';
import ConfigurarCultivo from '../containers/ConfigurarCultivo';
import DashboardConfiguracion from '../containers/DashboardConfiguracion';
import '../styles/global.css';


const App = () => {
	return (
		<BrowserRouter>
			<Routes>
					<Route path="/" element={<Home />} />
					<Route path='/login' element={<Home />} />
					<Route path='/reset' element={<ResetPassword/>} />
					<Route path='/editarcultivo' element={<EditarCultivo/>} />
					<Route path='/programarfechas' element={<ProgramarFechas/>} />
					<Route path='/principal' element={<Principal/>} />
					<Route path='/usuarios' element={<Usuarios/>} />
					<Route path='/registrousuarios' element={<RegistroUsuarios/>} />
					<Route path='/editarusuario' element={<EditarUsuarios/>} />
					<Route path='/registropredio' element={<RegistroPredio/>} />
					<Route path='/asignacionusuario' element={<AsignacionUsuario/>} />
					<Route path='/crearcultivo' element={<CrearCultivo/>} />
					<Route path='/nuevocultivo' element={<NuevoCultivo/>} />
					<Route path='/configurarcultivo' element={<ConfigurarCultivo/>} />
					<Route path='/dashboardconfiguracion' element={<DashboardConfiguracion/>} />
					<Route path='*' element={NotFound} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
