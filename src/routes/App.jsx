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
import Assignment from '../pages/production/Assignment';
import Crops from '../pages/production/CreateCrops';
import DeleteCrops from '../pages/production/DeleteCrops';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path='/login' element={<Home />} />
					<Route exact path='/dashboard' element={<Dashboard/>} />
					<Route exact path='/admin/usermenu' element={<UserMenu/>} />
					<Route exact path='/admin/register' element={<RegisterUser/>} />
					<Route exact path='/admin/edit' element={<EditUser/>} />
					<Route exact path='/admin/reset' element={<Reset/>} />
					<Route exact path='/production/register' element={<RegisterLand/>} />
					<Route exact path='/production/create' element={<CreateFarm/>} />
					<Route exact path='/production/inputcost' element={<InputCost/>} />
					<Route exact path='/production/assignment' element={<Assignment/>} />
					<Route exact path='/production/crops' element={<Crops/>} />
					<Route exact path='/production/delete' element={<DeleteCrops/>} />
					<Route exact path='*' element={<NotFound/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
