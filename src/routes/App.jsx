import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import ResetPassword from '../containers/ResetPassword';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
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

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Layout>
					<Route path="/" element={<Home />} />
					<Route path='/login' element={<Login/>} />
					<Route path='/reset' element={<ResetPassword/>} />
					<Route path='/editarcultivo' element={<EditarCultivo/>} />
					<Route path='/programarfechas' element={<ProgramarFechas/>} />
					<Route path='/principal' element={<Principal/>} />
					<Route path='/usurios' element={<Usuarios/>} />
					<Route path='/registrousuarios' element={<RegistroUsuarios/>} />
					<Route path='/editarusuario' element={<EditarUsuarios/>} />
					<Route path='/registropredio' element={<RegistroPredio/>} />
					<Route path='/asignacionusuario' element={<AsignacionUsuario/>} />
					<Route path='/crearcultivo' element={<CrearCultivo/>} />
					<Route path='/nuevocultivo' element={<NuevoCultivo/>} />
					<Route path='/configurarcultivo' element={<ConfigurarCultivo/>} />
					<Route element={NotFound}/>
				</Layout>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
