import { View, Text, Image, StyleSheet, ImageBackground, Linking, Share } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Avatar, Button, Card, TextInput, DefaultTheme } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const UserHome = () => {
    const navigator = useNavigation()
    const LeftContent = props => <Avatar.Icon {...props} icon="alert-circle" />
    const ImageURL = require('../assets/soil-testing.jpg')
    const BgURL = require('../assets/userhome.jpg')
    const WebsiteUri = 'http://stackoverflow.com/questions/35531679/react-native-open-links-in-browser';
    const url = "https://google.com";
    const title = "Soil Nutrient Analyser";
    const message = "Soil Testing made easy | Try the Soil Nutrient Analyser App now! \nApp Link: https://google.com";
    
    const options = {
      title,
      url,
      message,
    };
    const onShare = async (customOptions = options) => {
        try {
            const result = await Share.share({
             title: title,
        message: message, 
        url: url
            });
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error) {
            alert(error.message);
          }
      };
  return (
    
        
        <View style={{
            flex: 1,
            paddingBottom:height/2
        }}>
            <ImageBackground source={BgURL} style={{
                height:height
            }}>
            <View style={{
                padding: height/24,
                
            }}>
                <Text style={{
                    textAlign: 'center',
                    color: "black",
                    fontSize: 20,
                    fontWeight: 700
                }}>Welcome Ramesh</Text>
            </View>
            <View style={{
                justifyContent:'center',
                flexDirection:'row'
            }}>
    
            <Card
                    style={{
                        'width': width/1.1,
                        backgroundColor:'#C7F2FF',
                        padding: width/32
                        
                    }}
                >
                    
                    <Card.Title title="Get Started :-)" titleStyle={{
                        fontSize: 18,
                        textAlign: 'left',
                        paddingTop: (height+width)/width
                    }}
                    />
                
                    <Card.Content style={{
                        padding: 0,
                        
                    }}>
                       <View style={{
                        flexDirection:'row',
                        gap: 10
                       }}>
                        <View style={{
                            width:'65%'
                        }}>
                        <Text style={{
                            textAlign:'left',
                            lineHeight:22,
                            fontSize:14
                        }}>
                            Soil Testing has been made easy like never before. Test your soil and obtain your Soil Health Card in just <Text style={{ fontStyle:'italic', fontWeight:'600'}}>3 steps! </Text>
                        </Text>
                        </View>
                        <View style={{
                            width:'40%',
                            
                        }}>
                            <Image source={ImageURL} style={{
                                height: height/8,
                                width:width/4,
                                borderRadius: 5
                            }}
                            />
                        </View>
                       </View>
                        
                    </Card.Content>
                    {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                    
                </Card>
          
            </View>
            <View style={{
                gap:height/22
            }}>
            <View style={{
                flexDirection: 'row', 
                justifyContent:'center',
                gap:width/10,
                paddingTop:height/15
            }}>
                <View>
                <FAB
                    icon="card-bulleted-outline"
                    style={styles.fab}
                    onPress={() => {
                        console.log('Pressed')
                        navigator.navigate("enquiries")
                    }}
                    customSize={75}
                    color='black'
                />
                <Text style={{
                    textAlign:'center',
                    fontSize:13,
                    marginTop:10,
                    fontWeight:400
                }}>Enquiries</Text>
                </View>
                <View>
                <FAB
                    icon="nfc-tap"
                    style={styles.fab}
                    onPress={() => {
                        navigator.navigate('process')
                        console.log('Pressed')
                    }}
                    customSize={75}
                    color='black'
                />
                <Text style={{
                    textAlign:'center',
                    fontSize:13,
                    marginTop:10,
                    fontWeight:400
                }}>Process</Text>
                </View>
                <View>
                <FAB
                    icon="earth-plus"
                    style={styles.fab}
                    onPress={() => {
                        console.log('Pressed')
                        Linking.openURL(WebsiteUri)
                        .catch(err => console.error('An error occurred', err));
                    }}
                    customSize={75}
                    color='black'
                />
                <Text style={{
                    textAlign:'center',
                    fontSize:13,
                    marginTop:10,
                    fontWeight:400
                }}>Website</Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row', 
                justifyContent:'center',
                gap:width/10,
            }}>
                <View>
                <FAB
                    icon="account-multiple-outline"
                    style={styles.fab}
                    onPress={() => {
                        console.log('Pressed')
                        navigator.navigate('about-us')
                    }}
                    customSize={75}
                    color='black'
                    
                />
                <Text style={{
                    textAlign:'center',
                    fontSize:13,
                    marginTop:10,
                    fontWeight:400
                }}>About Us</Text>
                </View>
                <View>
                <FAB
                    icon="share-all"
                    style={styles.fab}
                    onPress={async () => {
                        await onShare();
                    }}
                    customSize={75}
                    color='black'
                />
                <Text style={{
                    textAlign:'center',
                    fontSize:13,
                    marginTop:10,
                    fontWeight:400
                }}>Share</Text>
                </View>
                <View style={{
                }}>
                <FAB
                    icon="comment-search-outline"
                    style={styles.fab}
                    onPress={() => {
                        console.log('Pressed')
                        navigator.navigate('consult-us')
                    }}
                    customSize={75}
                    color='black'
                />
                <Text style={{
                    textAlign:'center',
                    fontSize:13,
                    marginTop:10,
                    fontWeight:400
                }}>Consult Us</Text>
                </View>
            </View>
            </View>
            </ImageBackground>
        </View>
    
  )
}

const styles = StyleSheet.create({
    fab: {
      right: 0,
      bottom: 0,
      backgroundColor:'#F0BB3A',
    },
})
export default UserHome