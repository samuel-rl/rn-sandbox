import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import { HomeScreen, ChanelScrollScreen, SvgAnimation } from './screens';

const Stack = createNativeStackNavigator();

const isIos = Platform.OS === 'ios';


const screenOptions = isIos ? {
  headerBackTitle: 'Back',
  headerTransparent: true,
  headerTintColor: 'black',
  headerTitle: '',
} : {
  header: () => null,
}

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
          options={screenOptions}
        />
        <Stack.Screen
          name={'SvgAnimation'}
          component={SvgAnimation}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}