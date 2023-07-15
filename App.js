import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeComponent from './src/components/pages/Home';
import TestComponent from './src/components/pages/Test';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeComponent} />
        <Stack.Screen name="Test" component={TestComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}