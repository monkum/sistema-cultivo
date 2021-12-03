import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from '../containers/Layout';
import Home from '../containers/Home';

const App = () => {
	return (
		<Layout>
			<Home />
		</Layout>
	);
}

export default App;
