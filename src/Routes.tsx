import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import HomeScreen from './screens/home.screen';
import LoginScreen from './screens/login.screen';

type RoutesProps = {
	isLoggedIn: boolean;
};

const Routes = ({ isLoggedIn }: RoutesProps) => {
	return (
		<View style={[t.flex1, t.bgBlue100]}>
			<NavigationContainer
				theme={{ colors: { background: color.blue100 } }}
			>
				{isLoggedIn ? <HomeScreen /> : <LoginScreen />}
			</NavigationContainer>
		</View>
	);
};

export default Routes;
