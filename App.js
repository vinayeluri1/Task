
import React, { Component } from 'react';
import { View, TextInput, ScrollView, StyleSheet,Text,TouchableOpacity } from 'react-native';

import TextFields from './TextFields';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textInput : [],
      inputData : [],
      text:'',
      email:'',
      security:true
    }
  }

  //function to add TextInput dynamically
  addTextInput = (index) => {
    let textInput = this.state.textInput;
    textInput.push(
        <View>
            <View style={{width:"100%",height:1,backgroundColor:'#000',top:10}}></View>
            <Text style={{color:'#000',margin: 20}}>Employe Form {index+1}</Text>
            <TextFields />
        </View>
    );
    this.setState({ textInput });
  }
  removeTextInput = () => {
    let textInput = this.state.textInput;
    let inputData = this.state.inputData;
    textInput.pop();
    inputData.pop();
    this.setState({ textInput,inputData });
  }


  getValues = (text,email) => {
      if(text == ''){
          errorEmail='Not Valid Email'
      }else{
          errorEmail='Valid Email'
      }

    console.log('Data',text,email);
  }


  render(){
    return(
      <View style={{backgroundColor:'#fff'}}>
        <View style= {styles.row}>
          <View style={{margin: 10}}>
            <TouchableOpacity style={{backgroundColor:'#000',width:40,justifyContent:'center',alignItems:'center',borderRadius:35}} onPress={() => this.removeTextInput()}>
              <Text style={{fontSize:30,color:'#fff',bottom:3}}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={{margin: 10, position: 'absolute', right: 0}}>
            <TouchableOpacity style={{backgroundColor:'#000',width:40,justifyContent:'center',alignItems:'center',borderRadius:35}} onPress={() => this.addTextInput(this.state.textInput.length)}>
              <Text style={{fontSize:30,color:'#fff',bottom:3}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={{height:'90%'}}>
        {this.state.textInput.map((value) => {
          return value
        })}
       </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonView: {
  flexDirection: 'row'
  },
  textInput: {
  height: 40,
  borderColor: 'black', 
  color:'black',
  borderWidth: 1,
  margin: 20
},
row:{
  flexDirection: 'row',
  marginLeft:10,
  marginRight:10,
  top:10
  },
});

export default App;