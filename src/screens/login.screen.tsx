import React from 'react';
import { Text, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import Wrapper from '../common/components/elements/Wrapper';

const styles = {
	container: [t.hFull, t.justifyCenter, t.itemsCenter],
	textContainer: [t.bgYellow400, t.p4],
	text: [t.fontBold, t.uppercase],
};

const LoginScreen = () => {
	return (
		<Wrapper type="fullScreenView" style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.text}>Login</Text>
			</View>
		</Wrapper>
	);
};

export default LoginScreen;
