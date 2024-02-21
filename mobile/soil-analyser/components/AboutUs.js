import { View, Text,ScrollView, ImageBackground, Dimensions, Image, Pressable, Linking } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, TextInput, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const logoURL = require('../assets/TN-logo-3.png')
const BgURL = require('../assets/aboutusbg.jpg')
const AUImage = require('../assets/AnnaUniversity-Front.jpg')
const CIoTImage = require('../assets/Ciot-1.jpeg')
const AboutUs = () => {
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
                backgroundColor:'#C7F2FF',
                marginTop:height/25,
            }}
        >
            
            <Card.Title title="About Anna University" titleStyle={{
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'center',
                paddingTop: 20
            }}/>
            <ImageBackground source={logoURL} resizeMode="center" imageStyle={{ justifyContent:'center', alignItems:'center'}}>
            <Card.Content style={{
                padding: 10,
                justifyContent: 'center',
                alignItems:'center',
                alignSelf:'center'
            }}>
            <Image source={AUImage} style={{
                height:height/4,
                width:2*width/3,
                borderRadius:5
            }}></Image>
            <Text style={{
                textAlign: 'justify',
                lineHeight:22,
                paddingTop:10,
                paddingHorizontal:10
            }}>
               &nbsp;&nbsp;&nbsp;&nbsp;Anna University, established in 1978 in Chennai, has emerged as a leading educational institution, rooted in a rich history of integration and evolution. Born as a unitary university, it amalgamated four prestigious technical institutions—College of Engineering, Alagappa College of Technology, Madras Institute of Technology, and School of Architecture & Planning. The university's expansive footprint spans multiple campuses, including the main campus, Madras Institute of Technology, and Taramani, collectively serving diverse academic needs. Over the years, Anna University transitioned between unitary and affiliating models, striving for consistent engineering education quality across Tamil Nadu. Its extensive network encompasses 4 University Department Campuses, 13 Constituent Colleges, 3 Regional Campuses, and 593 Affiliated Colleges.           
            </Text>
            <Pressable onPress={()=>{
                Linking.openURL("https://annauniv.edu")
                .catch(err => console.error('An error occurred', err));
            }}>
                <Text style={{
                    color:'purple',
                    textDecorationLine:'underline',

                }}>Read More</Text>
            </Pressable>
            
            </Card.Content>
            
            </ImageBackground>
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            
        </Card>
        </View>
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
            
            <Card.Title title="About Center for Internet of Things" titleStyle={{
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: 'center',
                paddingTop: 20
            }}/>
            <ImageBackground source={logoURL} resizeMode="center" imageStyle={{ justifyContent:'center', alignItems:'center'}}>
            <Card.Content style={{
                padding: 10,
                justifyContent: 'center',
                alignItems:'center',
                alignSelf:'center'
            }}>
            <Image source={CIoTImage} style={{
                height:height/4,
                width:2*width/3,
                borderRadius:5
            }}></Image>
            <Text style={{
                textAlign: 'justify',
                lineHeight:22,
                paddingTop:10,
                paddingHorizontal:10
            }}>
            &nbsp;&nbsp;&nbsp;&nbsp;The Centre for Internet of Things (CIoT) aims to promote the Internet of Things (IoT) based ecosystem that can open up numerous avenues in terms of knowledge enhancement, employability, entrepreneurship, institute-industry collaboration, indigenous product development and global recognition. The centre has been officially approved by the syndicate of Anna University with full fledged autonomous status on 28th February 2022. 
                The centre has commenced its functioning from 27th of April 2022. The major thrust areas include agriculture, smart cities, smart campus, healthcare, animal husbandry, fisheries, electric vehicles, industrial IoT, E-learning etc. The Centre for Internet of Things (CIoT) is located at Madras Institute of Technology Campus, Chrompet, Chennai - 600044.
            </Text>
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
            
            </ImageBackground>
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            
        </Card>
        </View>
        </View>
        </ImageBackground>
    </ScrollView>
  )
}

export default AboutUs