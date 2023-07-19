import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { store } from './src/redux';

const Stack = createNativeStackNavigator();

import HomeComponent from './src/components/pages/Home';
import TestComponent from './src/components/pages/Test';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeComponent} />
          <Stack.Screen 
            name="Test"
            component={TestComponent}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}