import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from 'AppNavigator';
import { Text, View } from 'react-native';

const App: React.FC = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer >
				<AppNavigator />
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default App;
