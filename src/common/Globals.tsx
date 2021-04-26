import React from 'react';
import { StatusBar } from 'react-native';
// import Toast from 'react-native-toast-message';

/**
 * Place to add all the global components that are meant to be included in the App.js file, outside of the navigators
 */
const Globals = () => {
	return (
		<>
			<StatusBar
				translucent
				backgroundColor="transparent"
				barStyle="light-content"
			/>
			{/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
		</>
	);
};

export default Globals;
