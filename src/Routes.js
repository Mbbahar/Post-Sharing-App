import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import {SignIn, SignUp} from './pages/auth';
import {Feed, Saved} from './pages/sharing';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const hasSession = auth().currentUser;

function SharingStack() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => setIcon(focused, color, route),
        tabBarLabel: () => null,
      })}
      tabBarOptions={{
        activeTintColor: '#ea8331',
        inactiveTintColor: 'gray',
      }}
      initialRouteName="Feed">
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Saved" component={Saved} />
    </Tab.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{header: () => null}}
        initialRouteName={hasSession ? 'SharingStack' : 'SignIn'}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SharingStack" component={SharingStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;

function setIcon(focused, color, route) {
  let iconName;

  switch (route.name) {
    case 'Feed':
      iconName = focused ? 'view-list' : 'view-list-outline';
      break;
    case 'Saved':
      iconName = focused ? 'heart' : 'heart-outline';
      break;

    default:
      break;
  }
  return <Icon name={iconName} color={color} size={40} />;
}
