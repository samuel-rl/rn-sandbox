import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ChanelScrollScreen } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            header: () => null
          }}
        />
        <Stack.Screen
          name={'ChanelScroll'}
          component={ChanelScrollScreen}
          options={{
            header: () => null
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}