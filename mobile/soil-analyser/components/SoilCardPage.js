import { View, Text, StyleSheet, Dimensions, ImageBackground, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { DataTable, Provider as PaperProvider } from 'react-native-paper';
import { Avatar, Button, Card, TextInput, DefaultTheme } from 'react-native-paper';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    
      primary: '#0AA714', 
    },
  };
const SoilCardPage = () => {
    const LeftContent = props => <Avatar.Icon {...props} icon="form-select" />
    const [name, setName] = useState('')
    const logoURL = require('../assets/TN-logo-3.png')

    
    const [page, setPage] = React.useState(0);
    const [numberOfItemsPerPageList] = React.useState([4,5,6]);
    const [itemsPerPage, onItemsPerPageChange] = React.useState(
      numberOfItemsPerPageList[0]
    );

    const TABLE_HEAD1 = ["S.No", "Nutrient", "Units", "Tested Value", "Threshold Value", "Rating"];

    const TABLE_ROWS = [
    {
        nutrient:"Nitrogen (N)",
        units: "kg/Ha",
        testValue: "57",
        thresholdValue: "280-560",
        key: 'Nitrogen',
        thresholdLow: 280,
        thresholdHigh: 560
    },
    {
        nutrient:"Phosphorus (P)",
        units: "kg/Ha",
        testValue: "15.34",
        thresholdValue: "10-25",
        key: 'Phosporous',
        thresholdLow: 10,
        thresholdHigh: 25
    },
    {
        nutrient:"Potassium (K)",
        units: "kg/Ha",
        testValue: "243",
        thresholdValue: "108-280",
        key: 'Potassium',
        thresholdLow: 108,
        thresholdHigh: 280
    },
    {
        nutrient:"Calcium (Ca)",
        units: "mg/kg",
        testValue: "243",
        thresholdValue: "1000-2000",
        key: 'Calcium',
        thresholdLow: 1000,
        thresholdHigh: 2000
    },
    {
        nutrient:"Magnesium (Mg)",
        units: "mg/kg",
        testValue: "243",
        thresholdValue: "51-150",
        key: 'Magnesium',
        thresholdLow: 51,
        thresholdHigh: 150
    },
    {
        nutrient:"Sulfur (S)",
        units: "mg/kg",
        testValue: "243",
        thresholdValue: "10-20",
        key: 'Sulphur',
        thresholdLow: 10,
        thresholdHigh: 20
    },
    {
      nutrient:"Zinc (Zn)",
      units: "mg/kg",
      testValue: "243",
      thresholdValue: "0.6-1.2",
      key: 'Zinc',
      thresholdLow: 0.6,
      thresholdHigh: 1.2
    },
    {
      nutrient:"Manganese (Mn)",
      units: "mg/kg",
      testValue: "243",
      thresholdValue: "2-4",
      key: 'Manganese',
      thresholdLow: 2,
      thresholdHigh: 4
    },
    {
      nutrient:"Iron (Fe)",
      units: "mg/kg",
      testValue: "243",
      thresholdValue: "4.8-8.0",
      key: 'Iron',
      thresholdLow: 4.8,
      thresholdHigh: 8
    },
    {
      nutrient:"Copper (Cu)",
      units: "mg/kg",
      testValue: "243",
      thresholdValue: "0.2-0.4",
      key: 'Copper',
      thresholdLow: 0.2,
      thresholdHigh: 0.4
    },
    {
      nutrient:"Boron (B)",
      units: "mg/kg",
      testValue: "243",
      thresholdValue: "0.5-1",
      key: 'Boron',
      thresholdLow: 0.5,
      thresholdHigh: 1
    }
    ];
    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, TABLE_ROWS.length);
    const TABLE_ROWS2 = [
        {
          eNumber: "dummy",
          name: "dummy",
          sampleDate: "dummy",
          district: "dummy",
          taluk: "dummy",
          village: "dummy",
          surveyNo: "dummy",
          soilNumber:"dummy",
          geoPositionN: "dummy",
          geoPositionE: "dummy",
        },
      ];
  
    React.useEffect(() => {
      setPage(0);
    }, [itemsPerPage]);
  
  return (
    <ScrollView>
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
            
            <Card.Title title="Soil Health Card" left={LeftContent} titleStyle={{
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
                
                    <Text variant="titleMedium" style={{
                      textAlign:'center',
                      fontWeight: '700'
                    }}>Here are your details!</Text>
                    
                    <DataTable style={{
            marginTop: height/20,
            justifyContent:'center',
            alignItems:'center',
            alignContent:'center',
            width: width/1.2
        }}>
    
            <DataTable.Row key={0} style={{
                width:width/1.2
            }}>
                
                <DataTable.Cell style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center',
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor:'#F3F0EE'
                }}>Enquiry No</DataTable.Cell>
                <DataTable.Cell style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center',
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor:'#F3F0EE'
                }}>123456788</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row key={1} style={{
                width:width/1.2
            }}>
                
                <DataTable.Cell style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center',
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor:'#F3F0EE'
                }}>Name</DataTable.Cell>
                <DataTable.Cell style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center',
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor:'#F3F0EE'
                }}>Ramesh Kumar</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row key={2} style={{
                width:width/1.2
            }}>
                
                <DataTable.Cell style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center',
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor:'#F3F0EE'
                }}>District</DataTable.Cell>
                <DataTable.Cell style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center',
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor:'#F3F0EE'
                }}>District 1</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row key={3} style={{
                width:width/1.2
            }}>
                
                <DataTable.Cell style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center',
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor:'#F3F0EE'
                }}>Taluk</DataTable.Cell>
                <DataTable.Cell style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center',
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor:'#F3F0EE'
                }}>Taluk 1</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row key={4} style={{
                width:width/1.2
            }}>
                
                <DataTable.Cell style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center',
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor:'#F3F0EE'
                }}>Village</DataTable.Cell>
                <DataTable.Cell style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center',
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor:'#F3F0EE'
                }}>Village 1</DataTable.Cell>
            </DataTable.Row>
    
           
            
        </DataTable>
                    
        <Text variant="titleMedium" style={{
                      textAlign:'left',
                      fontWeight: '700',
                      paddingTop: height/20,
                      alignSelf:'flex-start',
                      fontSize: 15,
                      textDecorationLine:'underline'
                    }}>Test results</Text>
            
            <DataTable style={{
            marginTop: height/20,
            justifyContent:'center',
            alignItems:'center',
            alignContent:'center'
        }}>
            <DataTable.Header style={{
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#222',
                width:width/1.15,
                borderWidth: 1,
                borderColor: 'black',
            }}>
            <DataTable.Title style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center',
                color:'red'
                }}><Text style={{
                    color: 'white'
                }}>Nutrient</Text></DataTable.Title>
            <DataTable.Title style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center'
            }}
            numeric><Text style={{
                color: 'white'
            }}>Units</Text></DataTable.Title>
            <DataTable.Title numeric numberOfLines={2} style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center'
                }}><Text style={{
                    color: 'white'
                }}>Test Value</Text></DataTable.Title>
                <DataTable.Title numeric style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center'
                }}><Text style={{
                    color: 'white'
                }}>Rating</Text></DataTable.Title>
            </DataTable.Header>
    
            {TABLE_ROWS.slice(from, to).map((item) => (
            <DataTable.Row key={item.eNumber} style={{
                width:width/1.05
            }}>
                
                <DataTable.Cell style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center',
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor:'#F7DEC9'
                }}></DataTable.Cell>
                <DataTable.Cell style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center',
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor:'#F7DEC9'
                }}></DataTable.Cell>
                <DataTable.Cell style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center',
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor:'#F7DEC9'
                }}></DataTable.Cell>
                <DataTable.Cell style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center',
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor:'#F7DEC9'
                }}></DataTable.Cell>
            
            </DataTable.Row>
            ))}
    
            
        </DataTable>
            </Card.Content>
            </ImageBackground>
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            <Card.Actions style={{
                padding:20
            }}>
            <Button mode='contained' onPress={() => {
              navigator.navigate("soilcard")
            }}>Submit</Button>
            </Card.Actions>
            
        </Card>
        </PaperProvider>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      height: height,
      width: width,
    },
})
export default SoilCardPage