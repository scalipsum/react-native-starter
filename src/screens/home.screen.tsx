import React from 'react';
import { Text, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import Wrapper from '../common/components/elements/Wrapper';

const styles = {
	container: [t.hFull, t.justifyCenter, t.itemsCenter],
	textContainer: [t.bgYellow400, t.p4],
	text: [t.fontBold, t.uppercase],
};

const HomeScreen = () => {
	return (
		<Wrapper type="fullScreenView" style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.text}>Chelsea Apps Project Starter</Text>
			</View>
		</Wrapper>
	);
};

export default HomeScreen;
