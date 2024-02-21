import { View, Alert, Pressable, StyleSheet, Dimensions, SafeAreaView, ScrollView, ImageBackground } from 'react-native'
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
const EnquiryForm = () => {
    const [taluk, setTaluk] = useState('')
    const [village, setVillage] = useState('')
    const [mobile, setMobile] = useState('')
    const [surveyNo, setSurveyNo] = useState('')
    const [district, setDistrict] = useState('')
    const [name, setName] = useState('')
    const LeftContent = props => <Avatar.Icon {...props} icon="form-select" />
    const logoURL = require('../assets/TN-logo-3.png')
    const BgURL = require('../assets/enquiryformbg.jpg')
  return (
    <ScrollView>
        <ImageBackground source={BgURL}>
      <View style={styles.container}>
      <PaperProvider theme={theme}>
        <Card
            elevation={5}
            style={{
                'width': width/1.1,
                backgroundColor:'#C7F2FF',
                marginTop:height/25,
                paddingBottom:height/30
            }}
        >
            
            <Card.Title title="Submit an Enquiry" left={LeftContent} titleStyle={{
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
                    <Text variant="titleMedium" style={{
                        textAlign:'center',
                        color:'#EB3A12',
                        padding:height/50
                    }}>*Refer Patta document of the land to enter the following details</Text>
                    <TextInput
                    mode='outlined'
                    label="District"
                    value={district}
                    onChangeText={text => setDistrict(text)}
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
                    label="Taluk"
                    value={taluk}
                    onChangeText={text => setTaluk(text)}
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
                    label="Village/Town"
                    value={village}
                    onChangeText={text => setVillage(text)}
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
                    label="Survey Number"
                    value={surveyNo}
                    onChangeText={text => setSurveyNo(text)}
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
            <Card.Actions style={{
                padding:20
            }}>
            <Button onPress={()=>{
                setDistrict('')
                setMobile('')
                setName('')
                setVillage('')
                setTaluk('')
                setSurveyNo('')
            }}>Reset</Button>
            <Button onPress={() => {
                Alert.alert('Enquiry', 'Enquiry submitted successfully!',[
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ])
            }}>Submit</Button>
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
      width: width,
      marginBottom:height/25,
    },
})
export default EnquiryForm