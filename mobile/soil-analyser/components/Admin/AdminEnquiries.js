import { View, Text, StyleSheet, Dimensions, ImageBackground, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { DataTable, Provider as PaperProvider } from 'react-native-paper';
import { Avatar, Button, Card, TextInput, DefaultTheme } from 'react-native-paper';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import { useNavigation } from '@react-navigation/native';

const AdminEnquiries = () => {

    const navigator = useNavigation()
    const TABLE_HEAD = ["Enquiry No", "Name", "District", "Taluk", "Village", "Survey No", "Status"];
    
    const TABLE_HEAD2 = ["Enquiry No", "District", "Taluk", "Village", "Survey No", "Soil Sample No"];
    
    const TABLE_ROWS = [
        {
            name: "John Michael",
            district: "Chennai",
            taluk: "Maduravoyal",
            village: "Virugambakkam",
            surveyNo: "224/2A",
            date: "24/12/2023",
            status: "In progress",
            eNumber: "1234567891",
            soilNo: null
        },
        {
            name: "John Micheal",
            district: "Chennai",
            taluk: "Maduravoyal",
            village: "Virugambakkam",
            surveyNo: "224/2A",
            date: "24/12/2023",
            status: "In progress",
            eNumber: "1234567892",
            soilNo: null
        },
        {
            name: "John Michael",
            district: "Chennai",
            taluk: "Maduravoyal",
            village: "Virugambakkam",
            surveyNo: "224/2A",
            date: "24/12/2023",
            status: "Completed",
            soilNo:"123456",
            eNumber: "1234567893"
        },
        {
            name: "John Michael",
            district: "Chennai",
            taluk: "Maduravoyal",
            village: "Virugambakkam",
            surveyNo: "224/2A",
            date: "24/12/2023",
            status: "In progress",
            eNumber: "1234567894",
            soilNo: null
        },
        {
          name: "John Michael",
          district: "Chennai",
          taluk: "Maduravoyal",
          village: "Virugambakkam",
          surveyNo: "224/2A",
          date: "24/12/2023",
          status: "In progress",
          eNumber: "1234567895",
          soilNo: null   
        },
        {
            name: "John Michael",
            district: "Chennai",
            taluk: "Maduravoyal",
            village: "Virugambakkam",
            surveyNo: "224/2A",
            date: "24/12/2023",
            status: "In progress",
            eNumber: "1234567891",
            soilNo: null
        },
        {
            name: "John Michael",
            district: "Chennai",
            taluk: "Maduravoyal",
            village: "Virugambakkam",
            surveyNo: "224/2A",
            date: "24/12/2023",
            status: "In progress",
            eNumber: "1234567895",
            soilNo: null   
          },
          {
            name: "John Michael",
            district: "Chennai",
            taluk: "Maduravoyal",
            village: "Virugambakkam",
            surveyNo: "224/2A",
            date: "24/12/2023",
            status: "Completed",
            soilNo:"123456",
            eNumber: "1234567893"
        }
        ];
    
    const logoURL = require('../../assets/background.jpg')
    const [page, setPage] = React.useState(0);
    const [numberOfItemsPerPageList] = React.useState([4,5,6]);
    const [itemsPerPage, onItemsPerPageChange] = React.useState(
      numberOfItemsPerPageList[0]
    );
  
    const [items] = React.useState([
     {
       key: 1,
       name: 'Cupcake',
       calories: 356,
       fat: 16,
     },
     {
       key: 2,
       name: 'Eclair',
       calories: 262,
       fat: 16,
     },
     {
       key: 3,
       name: 'Frozen yogurt',
       calories: 159,
       fat: 6,
     },
     {
       key: 4,
       name: 'Gingerbread',
       calories: 305,
       fat: 3.7,
     },
    ]);
  
    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, TABLE_ROWS.length);
  
    React.useEffect(() => {
      setPage(0);
    }, [itemsPerPage]);
  
    const LeftContent = props => <Avatar.Icon {...props} icon="alert-circle" />
    return (
    <ScrollView contentContainerStyle={{
        height: height
    }}>
    <ImageBackground source={logoURL}>
    <View style={styles.container}>
        {/* <Text style={{
            padding: 15,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: 24, 
            marginTop: height/25,

        }}>Welcome Ramesh!</Text> */}
    <PaperProvider>
    <Card
            style={{
                'width': width/1.1,
                backgroundColor:'#C7F2FF',
            }}
        >
            
            {/* <Card.Title title="Alert!" titleStyle={{
                fontSize: 20,
                textAlign: 'center',
                paddingTop: (height+width)/width
            }}
            /> */}
           
            <Card.Content style={{
                padding: 0,
                justifyContent: 'center',
                width: '90%',
                alignItems:'center',
                alignSelf:'center'
            }}>
                <Text variant="titleMedium" style={{ textAlign: 'justify', lineHeight:22}}>{"\t\t"}The following table contains information about the enquiries raised in your locality and their current status.
                <Text variant="titleMedium" style={
                    {fontWeight: '700',}
                }>Tap the enquiry numbers to view more information!</Text></Text>
                
            </Card.Content>
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            
        </Card>
        <View style={{
            width: width/1.2,
            justifyContent:'center',
            alignItems:'center',
            alignContent:'center',
            alignSelf:'center',
            marginTop:height/15
        }}>
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
                }}>Enquiry No</Text></DataTable.Title>
            <DataTable.Title style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center'
            }}
            numeric><Text style={{
                color: 'white'
            }}>Status</Text></DataTable.Title>
            <DataTable.Title numeric style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center'
                }}><Text style={{
                    color: 'white'
                }}>Soil Sample No</Text></DataTable.Title>
            </DataTable.Header>
    
            {TABLE_ROWS.slice(from, to).map((item) => (
            <DataTable.Row key={item.eNumber} style={{
                width:width/1.1
            }}>
                
                <DataTable.Cell style={{
                textAlign: 'center',
                justifyContent:'center',
                alignContent:'center',
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor:'#F7DEC9'
                }}><Pressable onPress={() => {
                    navigator.navigate("enquiry")
                }}><Text style={{ textDecorationLine:'underline'}}>{item.eNumber}</Text></Pressable></DataTable.Cell>
                {(() =>{
                    if(item.soilNo === null){
                        return(
                        <>
                            <DataTable.Cell style={{
                                textAlign: 'center',
                                justifyContent:'center',
                                alignContent:'center',
                                backgroundColor:'white',
                                borderWidth: 1,
                                borderColor: 'black',
                                
                            }}><Text style={{ color:'red'}}>{item.status}</Text></DataTable.Cell>
                            <DataTable.Cell style={{
                                textAlign: 'center',
                                justifyContent:'center',
                                alignContent:'center',
                                borderWidth: 1,
                                borderColor: 'black',
                                backgroundColor:'#F7DEC9'
                            }}>--</DataTable.Cell>
                        </>  
                        );
                    }
                    else{
                        return(
                            <>
                            <DataTable.Cell style={{
                                textAlign: 'center',
                                justifyContent:'center',
                                alignContent:'center',
                                backgroundColor:'white',
                                borderWidth: 1,
                                borderColor: 'black',
                            }}><Text style={{ color:'green'}}>{item.status}</Text></DataTable.Cell>
                            <DataTable.Cell style={{
                                textAlign: 'center',
                                justifyContent:'center',
                                alignContent:'center',
                                borderWidth: 1,
                                borderColor: 'black',
                                backgroundColor:'#F7DEC9'
                            }}>{item.soilNo}</DataTable.Cell>
                            </>
                        );
                    }
                })()}
            </DataTable.Row>
            ))}
    
            <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(TABLE_ROWS.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${TABLE_ROWS.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel={'Rows per page'}
            />
            
        </DataTable>
        </View>
      {/* <Card
            style={{
                'width': width/1.1,
                backgroundColor:'#C7F2FF',
            }}
        >
{/*             
            <Card.Title title="Alert!" left={LeftContent} titleStyle={{
                fontSize: 20,
                textAlign: 'center',
                paddingTop: (height+width)/width
            }}
            /> */}
           
            {/* <Card.Content style={{
                padding: 0,
                justifyContent: 'center',
                width: '90%',
                alignItems:'center',
                alignSelf:'center'
            }}>
                {/* <Text variant="titleMedium" style={{ textAlign: 'justify', fontStyle:'italic'}}>{"\t\t"}Want to test your soil and get a soil health card? Go to the 
                <Text variant="titleMedium" style={
                    {fontWeight: '700', fontStyle:'italic'}
                }> enquiry</Text> section and submit an enquiry!</Text> */}
                
            {/* </Card.Content> */}
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            
        {/* </Card> */} 
      </PaperProvider>
      </View>
      </ImageBackground>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:height/12,
      alignItems: 'center',
      justifyContent: 'center',
      height: height,
      width: width,
      marginBottom:height/25,
    },
})
export default AdminEnquiries