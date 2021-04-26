import React from 'react';
import { Text, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import Wrapper from './common/components/elements/Wrapper';
import Globals from './common/Globals';

const styles = {
	container: [t.hFull, t.justifyCenter, t.itemsCenter],
	textContainer: [t.bgYellow400, t.p4],
	text: [t.fontBold, t.uppercase],
};

const App = () => {
	return (
		<Wrapper type="fullScreenView" style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.text}>Chelsea Apps Project Starter</Text>
			</View>
			<Globals />
		</Wrapper>
	);
};

export default App;
