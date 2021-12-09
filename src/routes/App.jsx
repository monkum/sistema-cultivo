import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from '../pages/Home';
import Dashboard from '../pages/dashboard/Dashboard';
import UserMenu from '../pages/user/DashboardUser';
import RegisterUser from '../pages/user/RegisterUser';
import EditUser from '../pages/user/EditUser';
import Reset from '../pages/user/Reset';
import RegisterLand from '../pages/production/RegisterLand';
import CreateFarm from '../pages/production/CreateFarm';
import InputCost from '../pages/production/InputCost';
import NotFound from '../pages/NotFound';
import EditarCultivo from '../containers/EditarCultivo';
import ProgramarFechas from '../containers/ProgramarFechas';

import AsignacionUsuario from '../containers/AsignacionUsuario';

import NuevoCultivo from '../containers/NuevoCultivo';

import '../styles/global.css';


const App = () => {
	return (
		<BrowserRouter>
			<Routes>
					<Route path="/" element={<Home />} />
					<Route path='/login' element={<Home />} />
					<Route path='/dashboard' element={<Dashboard/>} />
					<Route path='/admin/usermenu' element={<UserMenu/>} />
					<Route path='/admin/register' element={<RegisterUser/>} />
					<Route path='/admin/edit' element={<EditUser/>} />
					<Route path='/admin/reset' element={<Reset/>} />
					<Route path='/production/register' element={<RegisterLand/>} />
					<Route path='/production/create' element={<CreateFarm/>} />
					<Route path='/production/inputcost' element={<InputCost/>} />

					<Route path='/asignacionusuario' element={<AsignacionUsuario/>} />
					<Route path='/editarcultivo' element={<EditarCultivo/>} />
					<Route path='/programarfechas' element={<ProgramarFechas/>} />
					<Route path='/nuevocultivo' element={<NuevoCultivo/>} />
					<Route path='*' element={NotFound} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
