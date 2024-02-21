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
const AdminLinkSoilNumber = () => {
    const [soilNo, setSoilNo] = useState('')
    const [enquiryNo, setEnquiryNo] = useState('')
    const LeftContent = props => <Avatar.Icon {...props} icon="form-select" />
    const logoURL = require('../../assets/TN-logo-3.png')
    const BgURL = require('../../assets/enquiryformbg.jpg')
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
                marginTop:height/5,
                paddingBottom:height/30
            }}
        >
            
            <Card.Title title="Link Soil Sample Number" left={LeftContent} titleStyle={{
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
                    label="Enquiry Number"
                    value={enquiryNo}
                    onChangeText={text => setEnquiryNo(text)}
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
                    label="Soil Sample Number"
                    value={soilNo}
                    onChangeText={text => setSoilNo(text)}
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
                setEnquiryNo('')
                setSoilNo('')
            }}>Reset</Button>
            <Button onPress={() => {
                Alert.alert('Enquiry', 'Enquiry and Soil sample number successfully!',[
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
export default AdminLinkSoilNumber