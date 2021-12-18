import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import {FontAwesome5, Ionicons} from '@expo/vector-icons';
import { WebView } from 'react-native-webview';








export default function Chat({route}){

    const {id} = route.params;
    const [chat, setChat] = useState([]);

    useEffect (() => {

        async function getData(){
            const response = await fetch(`https://mobile.ect.ufrn.br:3002/emails/${id.id}`);
            const chat = await response.json();
            setChat(chat);
            console.log(chat);
        }
        getData();
      

    }, [] );




   return(
    <View style={styles.container}>
      
    <StatusBar style="auto" />
    <View style ={styles.tittle}>
     <Text style ={styles.textTittle}>{chat.tittle}</Text>
     <Ionicons style = {styles.estrela}  name={chat.star ? 'star' : 'star-outline'} size = {30} color = '#ffc222'  />  

    </View>
    <View style = {styles.dados}>
        <View style = {styles.foto}>
        <Image style = {styles.imagem} source = {{uri: chat.picture}}/>
        </View>
      
      <View style = {styles.envio}>
       <Text style = {styles.fonteFrom}>{chat.from}</Text>
       <Text style = {styles.fonteTo}>para {chat.to}</Text>
      </View>
      <View style ={styles.tempo}>
        <Text  style = {styles.time}>{chat.time}</Text>
      </View>
    </View>
    <WebView
      
      
      source={{ html: `<div style="font-size: 40px; margin: 30;">${chat.body}</div>`} }
      style = {{margin: 10, borderRadius: 20,}}
      
      />
      
    </View>

   );}


   const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: Constants.statusBarHeight,
      justifyContent: 'center',
    }, 
   tittle:{
       height: 100,
       backgroundColor: '#fff',
       flexDirection: 'row'
   },
   textTittle:{
       fontSize: 30,
       fontWeight: '500',
       margin: 15

   },
   dados:{
       height: 80,
       backgroundColor: '#800080',
      
       flexDirection: 'row',
       
       width: 400,
       borderRadius: 30,
       alignItems: 'center',
       margin: 6
   },
   foto:{
    height:70,
    width: 70,
    
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
   },
   imagem:{
       height: 60,
       width: 60,
       borderRadius: 30,
   },
   envio:{
       width: 250,
       backgroundColor: '#800080',
       justifyContent: 'center',
       marginLeft: 5
   },
   fonteFrom: {
       fontSize: 24,
       fontWeight: '600',
       color: 'white'
   },
   fonteTo: {
       fontWeight: '600',
       color: 'white'
   },
   tempo:{
       justifyContent: 'center',
     
   },
   time:{
       color: 'white'
   },
   estrela:{
       margin: 20,
       marginLeft: 120,
   }
})