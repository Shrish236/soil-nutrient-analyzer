import { View, Text, StyleSheet, Dimensions, ImageBackground, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { DataTable, Provider as PaperProvider } from 'react-native-paper';
import { Avatar, Button, Card, TextInput, DefaultTheme } from 'react-native-paper';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ViewEnquiry = () => {
    const LeftContent = props => <Avatar.Icon {...props} icon="pencil-outline" />
    const logoURL = require('../assets/background-2.jpg')
  return (
    <ImageBackground source={logoURL}>
    <View style={styles.container}>
      <PaperProvider>
      <Card
            style={{
                'width': width/1.1,
                backgroundColor:'#C7F2FF',
            }}
        >
            
            <Card.Title title="Enquiry Details" left={LeftContent} titleStyle={{
                fontWeight:'bold',
                fontSize: 20,
                textAlign: 'center',
                paddingTop: (height+width)/width
            }}
            />
           
            <Card.Content style={{
                padding: 0,
                justifyContent: 'center',
                width: '90%',
                alignItems:'center',
                alignSelf:'center'
            }}>
                <Text variant="titleMedium" style={{ textAlign: 'justify'}}>{"\t\t"}The details for the enquiry are as follows</Text>
                <View style={{

                    justifyContent:'flex-start',
                    alignItems:'flex-start',
                    alignSelf:'flex-start',
                    paddingTop:20,
                    textAlign:'left',
                }}>
                    <Text variant="titleMedium" style={{
                        fontWeight:'bold',
                        textAlign:'left',
                        marginBottom:5
                    }}>
                        Enquiry Number: <Text style={{ fontStyle:'italic', textAlign:'left'}}>1234567891</Text>
                    </Text>
                    <Text variant="titleMedium" style={{
                        fontWeight:'bold',
                        textAlign:'left',
                        marginBottom:5
                    }}>
                        Name: <Text style={{ fontStyle:'italic', textAlign:'left'}}>Ramesh Kumar</Text>
                    </Text>
                    <Text variant="titleMedium" style={{
                        fontWeight:'bold',
                        textAlign:'left',
                        marginBottom:5
                    }}>
                        Mobile: <Text style={{ fontStyle:'italic', textAlign:'left'}}>9876543210</Text>
                    </Text>
                    <Text variant="titleMedium" style={{
                        fontWeight:'bold',
                        textAlign:'left',
                        marginBottom:5
                    }}>
                        District: <Text style={{ fontStyle:'italic', textAlign:'left'}}>District 1</Text>
                    </Text>
                    <Text variant="titleMedium" style={{
                        fontWeight:'bold',
                        textAlign:'left',
                        marginBottom:5
                    }}>
                        Taluk: <Text style={{ fontStyle:'italic', textAlign:'left'}}>Taluk 1</Text>
                    </Text>
                    <Text variant="titleMedium" style={{
                        fontWeight:'bold',
                        textAlign:'left',
                        marginBottom:5
                    }}>
                        Village: <Text style={{ fontStyle:'italic', textAlign:'left'}}>Village 1</Text>
                    </Text>
                    <Text variant="titleMedium" style={{
                        fontWeight:'bold',
                        textAlign:'left',
                        marginBottom:5
                    }}>
                        Survey No: <Text style={{ fontStyle:'italic', textAlign:'left'}}>224/2A</Text>
                    </Text>
                    <Text variant="titleMedium" style={{
                        fontWeight:'bold',
                        textAlign:'left',
                        marginBottom:5
                    }}>
                        Status: <Text style={{ fontStyle:'italic', textAlign:'left', color:'red'}}>In Progress</Text>
                    </Text>
                </View>
            </Card.Content>
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            
        </Card>
      </PaperProvider>
      
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      alignSelf:'center',
      justifyContent: 'center',
      height: height,
      width: width/1.5,
      paddingTop:height/5,
    },
})
export default ViewEnquiry