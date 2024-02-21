import { View, Text,ScrollView, ImageBackground, Dimensions, Image, Pressable, Linking, FlatList } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, TextInput, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const logoURL = require('../assets/TN-logo-3.png')
const BgURL = require('../assets/processbg.jpg')
const processImage = require('../assets/3stepimage.png')


const Process = () => {
  return (
    <ScrollView>
        <ImageBackground source={BgURL} style={{
            height:'100%'
        }}>
        <View style={{
            flex:1, 
            justifyContent:'center',
            alignItems: 'center',
            marginBottom:20, 
            height:height
        }}>
        <View style={{
                flexDirection:'row',
                justifyContent:'center'
            }}>
        <Card
            elevation={5}
            style={{
                'width': width/1.1,
                backgroundColor:'#FFE18B',
                marginTop:height/25,
            }}
        >
            
            <Card.Title title="The 3-Step process for Soil-Testing" titleStyle={{
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: 'center',
                paddingTop: 20
            }}/>
            {/* <ImageBackground source={logoURL} resizeMode="center" imageStyle={{ justifyContent:'center', alignItems:'center'}}> */}
            <Card.Content style={{
                padding: 10,
                justifyContent: 'center',
                alignItems:'center',
                alignSelf:'center'
            }}>
            <View>
                <Text style={{
                    lineHeight:20,
                    padding:10
                }}><Text style={{
                    fontWeight:700
                }}>Step 1:</Text> Create an account in the Soil Nutrient Testing App</Text>
                <Text style={{
                    lineHeight:20, 
                    padding:10
                }}><Text style={{
                    fontWeight:700
                }}>Step 2:</Text> To test your soil, submit an enquiry by filling appropriate details</Text>
                <Text style={{
                    lineHeight:20,
                    padding:10
                }}><Text style={{
                    fontWeight:700
                }}>Step 3:</Text> Our team will reach out to you, test your soil and provide your soil health card</Text>
                <Text style={{
                    lineHeight:20,
                    padding:10
                }}>Past enquiries, their statuses, and soil health cards can be viewed through the Soil Nutrient Testing App whenever you want!</Text>
                <Text style={{
                    fontWeight:700,
                    padding:10,
                    fontStyle:'italic',
                    textAlign:'center',

                }}>Yes, it's that easy!</Text>
            </View>
            {/* <Pressable onPress={()=>{
                Linking.openURL("https://annauniv.edu")
                .catch(err => console.error('An error occurred', err));
            }}>
                <Text style={{
                    color:'purple',
                    textDecorationLine:'underline',

                }}>Read More</Text>
            </Pressable> */}
            
            </Card.Content>
            
            {/* </ImageBackground> */}
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            
        </Card>
        </View>
        </View>
        </ImageBackground>
    </ScrollView>
  )
}

export default Process