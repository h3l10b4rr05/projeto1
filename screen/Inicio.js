import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import {FontAwesome5, Ionicons} from '@expo/vector-icons';
import Constants from 'expo-constants';
import React, { useEffect, useState } from 'react';

export default function Inicio({navigation}) {

  const [email, setEmail] = useState([]);

  useEffect(function(){
    async function getData() {
      const response = await fetch('https://mobile.ect.ufrn.br:3002/emails');
      const emailServidor = await response.json();
      setEmail(emailServidor)
    }
  getData();

  }, [])

  function renderItem ({item}){

return <TouchableOpacity style = {styles.email} onPress ={() => navigation.navigate('Chat', {id: item})}>
<View style = {styles.img}>
<Image style = {styles.imgFoto} source = {{uri: item.picture}}/>
</View>
<View style = {styles.dados}>
 <Text style = {styles.nome}>{item.to}</Text>
 <Text style = {styles.titulo}>{item.tittle}</Text>
 <Text style = {styles.titulo}>{item.summary}</Text>
</View>

<View style = {styles.tempo}>
  <Text>{item.time}</Text>
  <Ionicons style = {styles.estrela}  name={item.star ? 'star' : 'star-outline'} size = {20} color = '#ffc222'  />  
</View>

</TouchableOpacity>


  }








  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style ={styles.caixaEntrada}>
      <FontAwesome5 name = "inbox" size = {30} color = '#ffc222'/>
        <Text style = {styles.cabecalho}>Helyu Mail!</Text>
      

      </View>
      

      <FlatList
        data = {email}
        renderItem = {renderItem}
        keyExtractor = {item => item.id}/>

      


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight,
  },
  caixaEntrada:{
   height: 60,
   width: 300,
   alignItems: 'center',
   justifyContent: 'center',
   borderBottomEndRadius: 30,
   borderBottomStartRadius: 30,
   flexDirection: 'row',
   backgroundColor: '#800080',

  },
  cabecalho:{
   fontSize: 25,
   fontWeight: 'bold',
   marginLeft: 10,
   color: '#fff'
  },
  email:{
    height: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 25
    
  },
  img:{
    height:100,
    width: 100,
   
    justifyContent: 'center',
    alignItems: 'center'

  },
  imgFoto:{
    height: 80,
    width: 80,
    borderRadius: 40
  },
  dados:{
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 200
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 15
  },
  tempo:{
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,
    height:100,
    width: 60
  }
});
