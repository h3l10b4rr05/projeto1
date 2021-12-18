import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Inicio from './screen/Inicio';
import Chat from './screen/Chat';


const Stack = createStackNavigator();

export default function App(){
   return(
     <NavigationContainer>
       <Stack.Navigator>
       
       <Stack.Screen name= "Inicio" component = {Inicio} options = {{headerShown: false}}/>
       <Stack.Screen name= "Chat" component = {Chat} options = {{headerShown: false}}/>

       </Stack.Navigator>


     </NavigationContainer>


   );}
