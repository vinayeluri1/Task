


import React, {useState, useEffect} from 'react'
import { Text, View, Button,StyleSheet,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

function FormList() {
  const [name , setName] =useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nameError, setNameError ] =useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [text, setText] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);
const handleSubmit = () => {
  var nameValid = false;
  if(name.length == 0){
      setNameError("Invalid Name");
  }        
  else if(name.length < 1){
      setNameError("Invalid Name");
  }      
   
  else{
      setNameError("")
      nameValid = true
  }
        var emailValid = false;
        if(email.length == 0){
            setEmailError("Invalid Email");
        }        
        else if(email.length < 6){
            setEmailError("Invalid Email");
        }      
        else if(email.indexOf(' ') >= 0){        
            setEmailError('Invalid Email');                          
        }    
        else{
            setEmailError("")
            emailValid = true
            
        }
    
        var passwordValid = false;
        if(password.length == 0 || password == ""){
            setPasswordError("Invalid Name");
            
        }        
        else if(password.length < 6){
            setPasswordError("Password should be minimum 6 characters");
            
        }      
        else if(password.indexOf(' ') >= 0){        
            setPasswordError('Password cannot contain spaces'); 
                                    
        }    
        else{
            setPasswordError("")
            passwordValid = true
            
        }        
    
        if(emailValid && passwordValid && nameValid){            
           // alert('Email: ' + email + '\nPassword: ' + password + '\nname:' + name); 
           setName(name);
            setEmail(email);
            setPassword(password);
        }        
    
      }
    
      useEffect(() => {
        if(name == ""){
          setNameError("Invalid Name");
         
      }   else{
        setNameError("");
      }
      if(email == ""){
        setEmailError("Invalid Email");
       
    }   else{
      setEmailError("");
    }
        if(password == ""){
          setPasswordError("Invalid Password");
         
      }   else{
        setPasswordError("");
      }
      
      }, [])
      
    return (
        <View style={{bottom:25}}>

            <View>
            <View>
                    <TextInput
                     style={styles.textInput} 
                     placeholder="Enter Nmae" 
                     placeholderTextColor='#000'
                     
                     onChangeText={text => setName(text)} value={name} />
                </View>
                {nameError.length > 0 &&
                  <Text style={{color:'red',marginLeft:25,bottom:15}}>{nameError}</Text> || <Text style={{color:'green',marginLeft:25,bottom:15}}>Valid Name</Text>
                }
                <View>
                    <TextInput
                     style={styles.textInput} 
                     placeholder="Enter Email" 
                     placeholderTextColor='#000'
                     onChangeText={text => setEmail(text)} value={email} />
                </View>
                {emailError.length > 0 &&
                  <Text style={{color:'red',marginLeft:25,bottom:15}}>{emailError}</Text> || <Text style={{color:'green',marginLeft:25,bottom:15}}>Valid Email</Text>
                }
                <View>
                 <TextInput 
                 style={styles.textInput}
                placeholder="Enter Password" 
                placeholderTextColor='#000'
                secureTextEntry={passwordVisible}
                onChangeText={text => setPassword(text)} value={password} 
                right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}/>                  
                </View>
                {passwordError.length > 0 &&
                  <Text style={{color:'red',marginLeft:25,bottom:15}}>{passwordError}</Text> || <Text style={{color:'green',marginLeft:25,bottom:15}}>Valid Password</Text>
                }
                <TouchableOpacity style={{backgroundColor:'red',alignItems:'center',marginLeft:20,marginRight:20,borderRadius:15}} onPress={handleSubmit}  >
                  <Text/>
                  <Text>submit</Text>
                  <Text/>
                </TouchableOpacity>
</View>

            
        </View>
    )
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
  height: 55,
  borderColor: 'black', 
  color:'black',
  borderWidth: 1,
  margin: 20,
  borderRadius:10,
  backgroundColor:'#fff',

},
row:{
  flexDirection: 'row',
  marginLeft:10,
  marginRight:10,
  top:10
  },
});
export default FormList