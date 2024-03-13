import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//Imported Screens
import SignScreen from './screens/SignScreen';
import HomeScreen from './screens/HomeScreen';
import HouseDetailsScreen from './screens/HouseDetailsScreen';
import DiscoverScreen from './screens/DiscoverScreen';
//

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={[{flex: 1}]}>
      <View style={[{flex: 1}]}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false, contentStyle: {backgroundColor: '#fff'}}}>
            <Stack.Screen name='Sign' component={SignScreen} />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='HouseDetails' component={HouseDetailsScreen} />
            <Stack.Screen name='Discover' component={DiscoverScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </GestureHandlerRootView>
  );
};