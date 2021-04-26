import 'react-native-gesture-handler';
import React from 'react';
import Globals from './common/Globals';
import Routes from './Routes';

const App = () => {
	const isLoggedIn = true;
	return (
		<>
			<Routes isLoggedIn={isLoggedIn} />
			<Globals />
		</>
	);
};

export default App;
