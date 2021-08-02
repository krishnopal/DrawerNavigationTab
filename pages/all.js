import React from 'react';
import { View,Text, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
//image button toggler
const NavigationDrawerStructure = (props)=> {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        <Icon name={'bars'} size={30} color="white" style={{marginLeft:15}} />
        {/* <Image
          source={require('./image/drawer.png')}
          style={{width: 30,height: 25,marginLeft: 15,}}
        /> */}
      </TouchableOpacity>
    </View>
  );
}
//Right button
const RightButtonCart = (props) =>{
  const toggleRightButton = () =>{
    alert('this is shuvo');
    console.warn(props.navigationProps);
  }
  return(
    <View>
      <TouchableOpacity onPress={()=> toggleRightButton()}>
          <Icon name={'home'} size={30} color="white" style={{marginRight:15}} />
          {/* <Text style={{backgroundColor:'blue',fontSize:15, padding:10, marginRight:10,color:'#fff'}}>Info</Text> */}
      </TouchableOpacity>
    </View>
  );
}
//first Screen Stack
function firstScreenStack({ navigation }) {
  return (
      <Stack.Navigator >
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            title: 'First Page',
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} /> ,
            headerStyle: {
              backgroundColor: 'green', 
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => <RightButtonCart navigationProps={navigation} />,
          }}
        />
      </Stack.Navigator>
  );
}
//second Screen Stack
function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Second Page', 
          headerLeft:()=> <NavigationDrawerStructure navigationProps={navigation} />,
          headerTitleStyle:{
            fontWeight:'bold'
          },
          headerStyle:{
            backgroundColor:'green'
          },
          headerTintColor:'#fff'
        }}/>
    </Stack.Navigator>
  );
}
//Drawer Navigation

const HomeIcon = <Icon name={'home'} size={20} color="white" style={{marginRight:15}} />
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: 'green',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'First page Option' }}
          component={firstScreenStack} />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Second page Option' }}
          component={secondScreenStack} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;