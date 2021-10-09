import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Common views
import Home from 'screens/Home';
const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
};
export default AppNavigator;