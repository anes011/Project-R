import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Imported Screens
import SignScreen from './screens/SignScreen';
import HomeScreen from './screens/HomeScreen';
//

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={[{flex: 1}]}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false, contentStyle: {backgroundColor: '#fff'}}}>
          <Stack.Screen name='Sign' component={SignScreen} />
          <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};