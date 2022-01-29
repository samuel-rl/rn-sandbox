import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

const routes = [
  {
    name: 'Home',
    component: HomeScreen,
    option: { headerShown: false }
  },
]

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {routes.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={route.option}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}