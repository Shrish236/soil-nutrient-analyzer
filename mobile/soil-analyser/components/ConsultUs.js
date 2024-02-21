import { View, Text,ScrollView, ImageBackground, Dimensions, Image, Pressable, Linking } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, TextInput, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import MapView, {
    PROVIDER_GOOGLE,
    MAP_TYPES,
    PROVIDER_DEFAULT,
    UrlTile,
    Marker,
  } from "react-native-maps";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const logoURL = require('../assets/TN-logo-3.png')
const BgURL = require('../assets/consultusbg.jpg')
const AUImage = require('../assets/AnnaUniversity-Front.jpg')
const CIoTImage = require('../assets/Ciot-1.jpeg')
const ConsultUs = () => {
    let location = {
        latitude: 12.948747,
        longitude: 80.140158,
      };
  return (
    <ScrollView>
        <ImageBackground source={BgURL} style={{
            height:'100%'
        }}>
        <View style={{
            flex:1, 
            justifyContent:'center',
            alignItems: 'center',
            marginBottom:20
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
            <Card.Title title="Having doubts?" titleStyle={{
                        fontSize: 18,
                        fontStyle:'italic',
                        fontWeight:'700',
                        textAlign: 'center',
                        paddingTop: 20
                    }}
                    />
            <Card.Content style={{
                padding: 10,
                justifyContent: 'center',
                alignItems:'center',
                alignSelf:'center'
            }}>
            <Text style={{
                textAlign: 'justify',
                lineHeight:22,
                paddingTop:10,
                paddingHorizontal:10
            }}>
            &nbsp;&nbsp;&nbsp;&nbsp;Consult us to obtain more information on your soil health and learn about soil health management practices!
             </Text>
             <View>
                <View>
                    <Text style={{
                        fontSize: 18,
                        fontStyle:'italic',
                        fontWeight:'700',
                        textAlign: 'center',
                        paddingVertical: 20
                    }}>Contact Us!</Text>
                </View>
                <View style={{
                    borderWidth:1,
                    borderStyle: 'dashed',
                    borderRadius:5,
                    padding:20
                }}>
                    <Text style={{
                        fontSize:14,
                        fontWeight:500
                    }}>
                        Dr. P.T.V.Bhuvaneshwari
                        </Text>
                        <Text >
                        &nbsp;&nbsp;Director, CIoT.
                        </Text>
                        <Text>
                        &nbsp;&nbsp;9884697694
                        </Text>
                        <Text>
                        &nbsp;&nbsp;dir.ciot.au.gmail.com
                        </Text> 
                </View>
                <View style={{
                    borderWidth:1,
                    borderStyle: 'dashed',
                    borderRadius:5,
                    padding:20,
                    marginVertical:10
                }}>
                    <Text style={{
                        fontSize:14,
                        fontWeight:500
                    }}>
                        Dr. S.Meyyappan
                        </Text>
                        <Text >
                        &nbsp;&nbsp;Deputy Director, CIoT.
                        </Text>
                        <Text>
                        &nbsp;&nbsp;9865682065
                        </Text>
                        <Text>
                        &nbsp;&nbsp;ddir.ciot.au.gmail.com
                        </Text> 
                </View>
                <View style={{
                    borderWidth:1,
                    borderStyle: 'dashed',
                    borderRadius:5,
                    padding:20,
                    marginVertical:1
                }}>
                    <Text style={{
                        fontSize:14,
                        fontWeight:500
                    }}>
                        Address:
                        </Text>
                        <Text>
                        &nbsp;&nbsp;&nbsp;&nbsp;Centre for Internet of Things (CIoT), Madras Institute of Technology Campus, Anna University, Chennai, 600044.
                        
                        </Text>
                         
                </View>
                <View style={{
                    height:height/2,
                    marginVertical:10
                }}>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 12.9,
                        longitude: 80.1,
                        latitudeDelta: 0.9,
                        longitudeDelta: 0.9,
                    }}
                    showsUserLocation
                    PROVIDER_GOOGLE
                    MAP_TYPES="STANDARD"
                    >
                    <Marker
                        title="CIoT"
                        coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        }}
                    />
                    </MapView>
                </View>
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
            
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            
        </Card>
        </View>
        </View>
        </ImageBackground>
    </ScrollView>
  )
}

export default ConsultUs