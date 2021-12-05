import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Header from '../containers/Header';
import GestionUsuario from '../containers/GestionUsuario';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home/>}/>
					<Route exact path="/gestionuser" element={<GestionUsuario/>}/>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
