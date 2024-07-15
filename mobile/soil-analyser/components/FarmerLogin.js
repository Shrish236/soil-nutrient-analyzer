import { View, Text, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const FarmerLogin = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigator = useNavigation();
  return (
    <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',
        backgroundColor:'#DFF5D4'
    }}>
        <View style={{
                width: width/1.35,
                justifyContent:'center',
                alignItems:'center',
                
              }}>
                <Text style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>Log in</Text>
                <Text style={{
                  fontSize: 12,
                  fontWeight: '400',
                  fontStyle:'italic',
                  textAlign: 'center',
                  marginTop:15
                }}>Kindly enter your credentials</Text>
                <TextInput
                  mode='outlined'
                  label="Email"
                  value={email}
                  onChangeText={text => setEmail(text)}
                  selectionColor='black'
                  cursorColor='black'
                  outlineColor='black'
                  style={{
                    width: "100%",
                    height: height/16,
                    marginTop: 15,
                  }}
                />
                <TextInput
                  mode='outlined'
                  label="Password"
                  value={password}
                  onChangeText={text => setPassword(text)}
                  selectionColor='black'
                  cursorColor='black'
                  outlineColor='black'
                  style={{
                    width: "100%",
                    height: height/16,
                    marginTop: 20
                  }}
                />
                <Button
                  mode="contained" 
                  onPress={() => {
                    navigator.navigate("profile")
                  }}
                  buttonColor='black'
                  textColor='white'
                  style={{
                    width: "75%",
                    marginTop: 30,
                    padding:0
                  }}
                >
                  Submit
                </Button>
              </View>
      
    </View>
  )
}

export default FarmerLogin