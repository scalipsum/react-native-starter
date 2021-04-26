import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { t } from 'react-native-tailwindcss';

const styles = {
	container: [t.hFull, t.justifyCenter, t.itemsCenter],
	textContainer: [t.bgYellow400, t.p4],
	text: [t.fontBold, t.uppercase],
};

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.text}>Chelsea Apps Project Starter</Text>
			</View>
		</SafeAreaView>
	);
};

export default App;
