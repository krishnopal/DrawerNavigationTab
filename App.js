import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import About from './component/About';
import Profile from './component/Profile';
import DrawerContain from './pages/DrawerContain';
const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}

//Drawer Navigation
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContain {...props} />}  >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen
          name="About"
          component={About} />
        <Drawer.Screen
          name="Profile"
          component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;