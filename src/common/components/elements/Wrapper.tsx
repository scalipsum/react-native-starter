import React from 'react';
import {
	ScrollView,
	ScrollViewProps,
	View,
	Platform,
	KeyboardAvoidingView,
} from 'react-native';
import { t } from 'react-native-tailwindcss';

interface WrapperProps extends ScrollViewProps {
	children: React.ReactNode;
	type?: 'scrollView' | 'list' | 'fullScreenView';
	fixed?: boolean;
	keyboardVerticalOffset?: number;
}

const Wrapper = ({
	children,
	style,
	contentContainerStyle,
	type,
	fixed,
	keyboardVerticalOffset,
	...props
}: WrapperProps) => {
	const styles = {
		defaultContainer: [t.bgWhite, fixed && t.flex1],
		defaultContent: [t.pX4, t.pT4, t.pB8],
		fullScreenView: [t.bgWhite, t.flex1],
	};

	return !type || type === 'scrollView' ? (
		<ScrollView
			style={[styles.defaultContainer, style]}
			contentContainerStyle={[
				styles.defaultContent,
				contentContainerStyle,
			]}
			showsVerticalScrollIndicator={false}
			{...props}
		>
			{children}
		</ScrollView>
	) : type === 'list' ? (
		<View style={[styles.defaultContainer, t.flex1, style]} {...props}>
			<View style={[t.pX4]}>{children}</View>
		</View>
	) : type === 'fullScreenView' ? (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={[styles.fullScreenView, style]}
			keyboardVerticalOffset={keyboardVerticalOffset ?? 80}
			{...props}
		>
			{children}
		</KeyboardAvoidingView>
	) : (
		<></>
	);
};

export default Wrapper;
