import React, {useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAvoidingViewBase, StyleSheet, Text, View,TextInput, Button } from 'react-native'
import { KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function RegisterScreen() {
    const [email, setEmail] =useState('')
    const [password, setpassword] =useState('')
    const navigation = useNavigation();


    const handleSignup = ()=>{
            
        createUserWithEmailAndPassword(auth,email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log("registered",user.email);
        })
        .catch(error => alert(error.message))
        
    }

  return (
    <SafeAreaView style={{ flex: 1}}> 
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style = {styles.inputContainer}>
                <TextInput
                
                placeholder='Email'
                value={email}
                onChangeText = {text => setEmail(text)}
                style = {styles.input}

                />

                <TextInput
                
                placeholder='Password'
                value={password}
                onChangeText = {text =>setpassword(text) }
                style = {styles.input}
                secureTextEntry

                />
            </View>    
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                    onPress={() => handleSignup()}
                    style= {styles.button}
                    >                                   
            
                    <Text style = {styles.buttonText}> Register</Text>
            
                    </TouchableOpacity>
                <TouchableOpacity
                        onPress = {() => navigation.navigate("Login")}
                        style= {[styles.button, styles.buttonOutline]}               
                        >
                <Text style = {styles.buttonOutlineText}> Login</Text>
                </TouchableOpacity>         
                
            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'brown'
    },

    inputContainer:{
        width: '80%'
    },
     input:{
         backgroundColor:"green",
         paddingHorizontal:15,
         paddingVertical:10,
         borderRadius:10,
         marginTop:5,
         color:'white'
     },
     buttonContainer:{
         width: '60%',
         justifyContent:'center',
         alignItems:'center',
         marginTop:25

     },
     button:{
         backgroundColor: "brown",
         width:'100%',
         padding: 15,
         borderRadius:10,
         alignItems:'center'

     },
     buttonText:{
         color:'white',
         fontWeight:'700',
         fontSize:16

     },
     buttonOutline:{
         marginTop: 5,
         backgroundColor:'white',
         borderColor:'black',
         borderWidth:2


     },
     buttonOutlineText:{

     },
     pic:{
        width: "100%",
        height:"100%",
        resizeMode: "cover",
        position:'absolute'
     }


});

