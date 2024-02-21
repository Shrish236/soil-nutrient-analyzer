import { View, Pressable, StyleSheet, Dimensions, SafeAreaView, ScrollView, ImageBackground, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Avatar, Button, Card, Text, TextInput, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    
      primary: '#0AA714', 
    },
  };
const EditProfile = () => {
    const [password, setPassword] = useState('Hello@123')
    const [email, setEmail] = useState('ramesh123@gmail.com')
    const [mobile, setMobile] = useState('9978912352')
    const [address, setAddress] = useState('No. 2/7, Gandhi Street, Amman Nagar, Chennai')
    const [name, setName] = useState('Ramesh')
    const LeftContent = props => <Avatar.Icon {...props} icon="account" />
    const logoURL = require('../assets/TN-logo-3.png')
    const BgURL = require('../assets/editprofilebg.jpg')
    return (
    <ScrollView>
    <ImageBackground source={BgURL} >
      <View style={styles.container}>
      <PaperProvider theme={theme}>
        <Card
            elevation={5}
            style={{
                'width': width/1.1,
                'height' : height/1.3,
                backgroundColor:'#C7F2FF',
                marginTop:height/12
            }}
        >
            
            <Card.Title title="Edit Profile" left={LeftContent} titleStyle={{
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'center',
                paddingTop: (height+width)/width
            }}/>
            <ImageBackground source={logoURL} resizeMode="center" imageStyle={{ justifyContent:'center', alignItems:'center'}}>
            <Card.Content style={{
                padding: 10,
                justifyContent: 'center',
                width: '90%',
                alignItems:'center',
                alignSelf:'center'
            }}>
                
                    <Text variant="titleMedium">Enter the following details:</Text>
                    <TextInput
                    mode='outlined'
                    label="Name"
                    value={name}
                    onChangeText={text => setName(text)}
                    selectionColor='black'
                    cursorColor='black'
                    outlineColor='black'
                    style={{
                        width: "100%",
                        height: height/16,
                        marginTop: 20,
                        borderRadius: 20
                    }}
                    />
                    <TextInput
                    mode='outlined'
                    disabled
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    selectionColor='black'
                    cursorColor='black'
                    outlineColor='black'
                    style={{
                        width: "100%",
                        height: height/16,
                        marginTop: 20
                    }}
                    />
                    <TextInput
                    mode='outlined'
                    label="Mobile"
                    value={mobile}
                    onChangeText={text => setMobile(text)}
                    selectionColor='black'
                    cursorColor='black'
                    outlineColor='black'
                    style={{
                        width: "100%",
                        height: height/16,
                        marginTop: 20
                    }}
                    />
                    <TextInput
                    mode='outlined'
                    label="Address"
                    value={address}
                    onChangeText={text => setAddress(text)}
                    selectionColor='black'
                    cursorColor='black'
                    outlineColor='black'
                    style={{
                        width: "100%",
                        height: height/16,
                        marginTop: 20
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
                

            </Card.Content>
            </ImageBackground>
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            <Card.Actions>
            <Button onPress={()=>{
                Alert.alert('Account', 'Profile edited successfully!',[
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ])
            }} variant="contained">Submit</Button>
            </Card.Actions>
            
        </Card>
        </PaperProvider>
      </View>
      </ImageBackground>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      height: height,
      width: width
    },
})

export default EditProfile