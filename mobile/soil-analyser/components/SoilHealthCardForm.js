import { View, Pressable, StyleSheet, Dimensions, SafeAreaView, ScrollView, ImageBackground, ActivityIndicator, Linking } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Avatar, Button, Card, Text, TextInput, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Link, useNavigation } from '@react-navigation/native';
import * as Print from 'expo-print';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import { WebView } from 'react-native-webview';
import { Platform } from 'react-native';
import { shareAsync } from 'expo-sharing';
// import ActivityIndicator from 'react-native-paper';
import axios from 'axios';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    
      primary: '#0AA714', 
    },
  };
const SoilHealthCardForm = () => {
  const [isready, setIsready] = useState(0)
  const [uriLink, setUriLink] = useState('')
  const [loading, setLoading] = useState(false);
  const navigator = useNavigation()
  const [password, setPassword] = useState('')
    const [responseData, setResponseData] = useState({})
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [name, setName] = useState('')

    const LeftContent = props => <Avatar.Icon {...props} icon="form-select" />
    const logoURL = require('../assets/TN-logo-3.png')
    const bgURL = require('../assets/background-3.jpg')
    const convertFileToBase64 = async (filePath) => {
      try {
          // Read the file as a binary string
          const fileContent = await FileSystem.readAsStringAsync(filePath, { encoding: FileSystem.EncodingType.Base64 });
          setUriLink(fileContent)
      } catch (error) {
          console.error('Error converting file to Base64:', error);
          return null;
      }
    };
    const createTemplate = async() => {
      let template = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Soil Health Card</title>
          <!-- Latest compiled and minified CSS -->
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
      
          <!-- jQuery library -->
          <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
      
          <!-- Popper JS -->
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
      
          <!-- Latest compiled JavaScript -->
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
          <style>
              table, td {
                border: 1px solid;
                text-align: center;
                padding: 5px;
              }
      
              th {
                border: 1px solid;
                text-align: center;
                padding: 10px;
                background-color: rgb(234, 159, 48);
                color: rgb(5, 6, 7);
              }
              
              table {
                width: 100%;
                border-collapse: collapse;
              }
              body {
                  /* background-image: url("../assets/TN-logo-3.png"); 
                  background-position: center; 
                  background-repeat: no-repeat;  */
              }
              </style>
      </head>
      <body>
          <div class="d-flex flex-column">
          <div class="d-flex h-25 justify-content-between p-1 align-items-center">
              <img src="au-logo.png" alt="logo" style="height: 80px;"/>
              <div class="d-flex flex-column align-self-center">
                  <span class="text-center font-weight-bold text-dark">Soil Testing Research and Development Laboratory</span>
                  <span class="text-center text-secondary">Government of Tamil Nadu</span>
              </div>
              <img src="WhatsApp Image 2024-02-18 at 2.14.31 PM (1).png" 
              alt="logo" style="height: 80px;"/>
          </div>
          <div style="height: 20px;" class="bg-success mb-2"></div>
          <div class="w-100 h-1 justify-content-center">
          <div class="d-flex mt-auto ml-auto mr-auto mb-auto w-50 justify-content-between p-4">
              <span class="text-center font-weight-bold text-dark">Your details:</span>
              <span class="text-center text-secondary" style="text-decoration: underline; color: rgb(190, 140, 45);"><a href=" https://www.google.com/maps/search/?api=1&query={{data.Latitude}},{{data.Longitude}}">Sample Location</a></span>
          </div>
          <div class="mt-auto ml-auto mr-auto mb-auto w-50">
              <table>
                  <tr>
                      <td><span class="font-weight-bold">Sample Collection Number</span></td>
                      <td>{{data.Soil_Sample_Number}}</td>
                  </tr>
                  <tr>
                    <td><span class="font-weight-bold">Date of Sample Collection</span></td>
                    <td>{{data.Date_of_Sample_Collection}}</td>
                  </tr>
                  <tr>
                    <td><span class="font-weight-bold">Name</span></td>
                    <td>{{data.Name}}</td>
                  </tr>
                  <tr>
                      <td><span class="font-weight-bold">Village</span></td>
                      <td>{{data.Village}}</td>
                  </tr>
                  <tr>
                      <td><span class="font-weight-bold">Taluk</span></td>
                      <td>{{data.Taluk}}</td>
                  </tr>
                  <tr>
                      <td><span class="font-weight-bold">District</span></td>
                      <td>{{data.District}}</td>
                  </tr>
                  <tr>
                      <td><span class="font-weight-bold">Survey Number</span></td>
                      <td>{{data.Survey_No}}</td>
                  </tr>
                  <tr>
                      <td><span class="font-weight-bold">Geo Position</span></td>
                      <td>{{data.Latitude}}, {{data.Longitude}}</td>
                  </tr>
                </table>
          </div>
          </div>
          
          <div class="p-4 mt-5 text-center">
              <span class="text-center font-weight-bold text-dark">Your soil test results</span>
          </div>
          <div class="mt-auto ml-auto mr-auto mb-auto w-75">
              <table>
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Nutrients</th>
                      <th scope="col">Units</th>
                      <th scope="col">Tested Value</th>
                      <th scope="col">Threshold Value</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">1.</td>
                      <td>Nitrogen (N)</td>
                      <td>Kg/Ha</td>
                      <td>{{data.Nitrogen}}</td>
                      <td>280-560</td>
                    </tr>
                    <tr>
                      <td scope="row">2.</td>
                      <td>Phosporous (P)</td>
                      <td>Kg/Ha</td>
                      <td>{{data.Phosporous}}</td>
                      <td>10-25</td>
                    </tr>
                    <tr>
                      <td scope="row">3.</td>
                      <td>Potassium (K)</td>
                      <td>Kg/Ha</td>
                      <td>{{data.Potassium}}</td>
                      <td>108-280</td>
                    </tr>
                    <tr>
                      <td scope="row">4.</td>
                      <td>Calcium (Ca)</td>
                      <td>mg/Kg</td>
                      <td>{{data.Calcium}}</td>
                      <td>1000-2000</td>
                    </tr>
                    <tr>
                      <td scope="row">5.</td>
                      <td>Magnesium (Mg)</td>
                      <td>mg/Kg</td>
                      <td>{{data.Magnesium}}</td>
                      <td>51-150</td>
                    </tr>
                    <tr>
                      <td scope="row">6.</td>
                      <td>Sulfur (S)</td>
                      <td>mg/Kg</td>
                      <td>{{data.Sulphur}}</td>
                      <td>10-20</td>
                    </tr>
                    <tr>
                      <td scope="row">7.</td>
                      <td>Zinc (Zn)</td>
                      <td>mg/Kg</td>
                      <td>{{data.Zinc}}</td>
                      <td>0.6-1.2</td>
                    </tr>
                    <tr>
                      <td scope="row">8.</td>
                      <td>Manganese (Mn)</td>
                      <td>mg/Kg</td>
                      <td>{{data.Manganese}}</td>
                      <td>2-4</td>
                    </tr>
                    <tr>
                      <td scope="row">9.</td>
                      <td>Iron (Fe)</td>
                      <td>mg/Kg</td>
                      <td>{{data.Iron}}</td>
                      <td>4.8 - 8.0</td>
                    </tr>
                    <tr>
                      <td scope="row">10.</td>
                      <td>Copper (Cu)</td>
                      <td>mg/Kg</td>
                      <td>{{data.Copper}}</td>
                      <td>0.2-0.4</td>
                    </tr>
                    <tr>
                      <td scope="row">11.</td>
                      <td>Boron (B)</td>
                      <td>mg/Kg</td>
                      <td>{{data.Boron}}</td>
                      <td>0.5 - 1.0</td>
                    </tr>
                  </tbody>
                </table>
          </div>
          <div class="p-4 mt-5 w-1/3 text-center" style="border: 1px dashed; border-radius: 5px;">
            <h4>Your soil pH is 7.2</h4>
          </div>
          <div class="p-5 w-1/3 text-center">
            <span>Visit the <a href=" https://www.google.com/maps/search/?api=1&query=12.948747,80.140158">Center for Internet of Things</a> or <a href="www.google.com">Contact Us</a> for more information on soil management practices!</span>
          </div>
          <div style="height: 1px;" class="bg-dark mb-2 mt-3"></div>
          <div class="d-flex flex-column p-2 text-center">
              <span class="text-center text-dark font-weight-medium">Tested & Verified by:</span>
              <span class="text-center text-muted"><i>Soil Testing R&D Laboratory, CIoT</i></span>
          </div>
          <div style="height: 10px;" class="bg-dark"></div>
      </div>
      <script>
      var nitrogenValue = {{data.Nitrogen}};

      if (nitrogenValue < 280) {
          document.getElementById('nitrogenRating').innerText = 'Low';
      } else if (nitrogenValue > 560) {
          document.getElementById('nitrogenRating').innerText = 'High';
      } else {
          document.getElementById('nitrogenRating').innerText = 'Medium';
      }

      var phosporousValue = {{data.Phosporous}};

      if (phosporousValue < 10) {
          document.getElementById('phosporousRating').innerText = 'Low';
      } else if (phosporousValu > 25) {
          document.getElementById('phosporousRating').innerText = 'High';
      } else {
          document.getElementById('phosporousRating').innerText = 'Medium';
      }

      var potassiumValue = +{{data.Potassium}};

      if (potassiumValue < 108) {
          document.getElementById('potassiumRating').innerText = 'Low';
      } else if (potassiumValue > 280) {
          document.getElementById('potassiumRating').innerText = 'High';
      } else {
          document.getElementById('potassiumRating').innerText = 'Medium';
      }

      var calciumValue = {{data.Calcium}};

      if (calciumValue < 1000) {
          document.getElementById('calciumRating').innerText = 'Insufficient';
      } else if (calciumValue > 2000) {
          document.getElementById('calciumRating').innerText = 'Excessive';
      } else {
          document.getElementById('calciumRating').innerText = 'Sufficient';
      }

      var magnesiumValue = {{data.Magnesium}};

      if (magnesiumValue < 51) {
          document.getElementById('magnesiumRating').innerText = 'Insufficient';
      } else if (magnesiumValue > 150) {
          document.getElementById('magnesiumRating').innerText = 'Excessive';
      } else {
          document.getElementById('magnesiumRating').innerText = 'Sufficient';
      }

      var sulfurValue = {{data.Sulphur}};

      if (sulfurValue < 10) {
          document.getElementById('sulphurRating').innerText = 'Low';
      } else if (sulfurValue > 20) {
          document.getElementById('sulphurRating').innerText = 'High';
      } else {
          document.getElementById('sulphurRating').innerText = 'Medium';
      }

      var manganeseValue = {{data.Manganese}};

      if (manganeseValue < 2) {
          document.getElementById('manganeseRating').innerText = 'Low';
      } else if (manganeseValue > 4) {
          document.getElementById('manganeseRating').innerText = 'High';
      } else {
          document.getElementById('manganeseRating').innerText = 'Medium';
      }

      var ironValue = {{data.Iron}};

      if (ironValue < 4.8) {
          document.getElementById('ironRating').innerText = 'Low';
      } else if (ironValue > 8.0) {
          document.getElementById('ironRating').innerText = 'High';
      } else {
          document.getElementById('ironRating').innerText = 'Medium';
      }

      
      var copperValue = {{data.Copper}};

      if (copperValue < 0.2) {
          document.getElementById('copperRating').innerText = 'Low';
      } else if (copperValue > 0.4) {
          document.getElementById('copperRating').innerText = 'High';
      } else {
          document.getElementById('copperRating').innerText = 'Medium';
      }

      var boronValue = {{data.Boron}};

      if (boronValue < 0.5) {
          document.getElementById('boronRating').innerText = 'Low';
      } else if (boronValue > 1) {
          document.getElementById('boronRating').innerText = 'High';
      } else {
          document.getElementById('boronRating').innerText = 'Medium';
      }

      var zincValue = {{data.Zinc}};

      if (zincValue < 0.6) {
          document.getElementById('zincRating').innerText = 'Low';
      } else if (zincValue > 1.2) {
          document.getElementById('zincRating').innerText = 'High';
      } else {
          document.getElementById('zincRating').innerText = 'Medium';
      }
      

  </script>
      </body>
      </html>
      `;

      
      const name = responseData['Name']; 
      template = template.replace(/{{data.Name}}/g, name);

      const date = responseData['Date_of_Sample_Collection']; 
      template = template.replace(/{{data.Date_of_Sample_Collection}}/g, date);

      // Soil Sample Number
      const soilSampleNumber = responseData['Soil_Sample_Number'];
      template = template.replace(/{{data.Soil_Sample_Number}}/g, soilSampleNumber);

      // Village
      const village = responseData['Village'];
      template = template.replace(/{{data.Village}}/g, village);

      // Taluk
      const taluk = responseData['Taluk'];
      template = template.replace(/{{data.Taluk}}/g, taluk);

      // District
      const district = responseData['District'];
      template = template.replace(/{{data.District}}/g, district);

      const survey = responseData['Survey_No'];
      template = template.replace(/{{data.Survey_No}}/g, survey);

      // Latitude
      const latitude = responseData['Latitude'];
      template = template.replace(/{{data.Latitude}}/g, latitude);

      // Longitude
      const longitude = responseData['Longitude'];
      template = template.replace(/{{data.Longitude}}/g, longitude);

      // Nitrogen
      const nitrogen = responseData['Nitrogen'];
      template = template.replace(/{{data.Nitrogen}}/g, nitrogen);

      // Phosphorous
      const phosphorous = responseData['Phosporous'];
      template = template.replace(/{{data.Phosporous}}/g, phosphorous);

      const potassium = responseData['Potassium'];
      template = template.replace(/{{data.Potassium}}/g, potassium);

      // Calcium
      const calcium = responseData['Calcium'];
      template = template.replace(/{{data.Calcium}}/g, calcium);

      // Magnesium
      const magnesium = responseData['Magnesium'];
      template = template.replace(/{{data.Magnesium}}/g, magnesium);

      // Sulphur
      const sulphur = responseData['Sulphur'];
      template = template.replace(/{{data.Sulphur}}/g, sulphur);

      // Zinc
      const zinc = responseData['Zinc'];
      template = template.replace(/{{data.Zinc}}/g, zinc);

      // Manganese
      const manganese = responseData['Manganese'];
      template = template.replace(/{{data.Manganese}}/g, manganese);

      // Iron
      const iron = responseData['Iron'];
      template = template.replace(/{{data.Iron}}/g, iron);

      // Copper
      const copper = responseData['Copper'];
      template = template.replace(/{{data.Copper}}/g, copper);

      // Boron
      const boron = responseData['Boron'];
      template = template.replace(/{{data.Boron}}/g, boron);

      return template
    }
    const printPDF = async() =>{
      const template = await createTemplate();
      try {
        // Generate PDF from HTML content
        const { uri } = await Print.printToFileAsync({ html: template });
        console.log('hello')
        console.log(responseData)
        console.log(uri)
        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
        // await convertFileToBase64(uri);
        setIsready(1)

      }
      catch (error) {
            console.error('Error generating or saving PDF:', error);
      }
    //     // Request permission to save PDF
    //     const { status } = await MediaLibrary.requestPermissionsAsync();
 
    //     if (status === 'granted') {
    //         // Save PDF to the local file system
    //         const pdfUri = `${FileSystem.documentDirectory}soil_report.pdf`;
    //         await FileSystem.copyAsync({ from: uri, to: pdfUri });
 
    //         // Display the saved PDF
    //         if (Platform.OS === 'ios') {
    //             await MediaLibrary.saveToLibraryAsync(pdfUri);
    //         } else {
    //             await MediaLibrary.createAssetAsync(pdfUri);
    //         }
    //         alert('PDF saved successfully!');
    //     } else {
    //         alert('Permission to save PDF was denied.');
    //     }
    // } catch (error) {
    //     console.error('Error generating or saving PDF:', error);
    // }
    }
    
  
    const downloadPDF = async () => {
     
      setLoading(true);
      try {
        const response = await axios.post('http://192.168.0.177:80/api/soilcard/', {
          soil_sample_no : name
        });
  
        if (response.status === 200) {
          // alert(` You have created: ${JSON.stringify(response.data)}`);
          setResponseData(response.data)
          setLoading(false);



          // console.log(response.data)
        } 
      } catch (error) {
        console.log(error)
        alert("An error has occurred");
        setLoading(false);
      }
    };

    React.useEffect(() => {
      const funcCall = async() => {
        await printPDF();
      }
      if(responseData['Name']!==undefined){
        funcCall();
      }
    }, [responseData])
  return (
    <ImageBackground source={bgURL}>
    <ScrollView contentContainerStyle={{
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center'
    }}>
      <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
      <PaperProvider theme={theme}>
        <Card
            elevation={5}
            style={{
                'width': width/1.1,
                backgroundColor:'#C7F2FF',
                paddingBottom:height/25
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
                      textAlign:'center'
                    }}>Generate soil health card by entering your soil sample number</Text>
                    <TextInput
                    mode='outlined'
                    label="Soil Sample Number"
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
                
                    

            </Card.Content>
            </ImageBackground>
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            <Card.Actions style={{
                padding:20
            }}>
            <Button mode='contained' onPress={downloadPDF}>Submit</Button>
            </Card.Actions>
        </Card>
        </PaperProvider>
      )}
      {/* {(() => {
              if(isready===1){
                return(

                  <View style={{
                    width:width/1.1,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical:height/20
                  }}>
                  <WebView
            style={{
              width:width/1.1,
              height: height
            }}
            useWebKit={true}
            originWhitelist={['*']}
            scrollEnabled={true}
            mediaPlaybackRequiresUserAction={true}
            source={{
                html: `
            <html>
            <object data="data:application/pdf;base64,${uriLink}" type="application/pdf">
                <embed 
                    scrollbar="1" 
                    src="data:application/pdf;base64,${uriLink}" 
                    type="application/pdf" 
                   
                />
            </object>
            </html>
            ` }}
        />
                </View>

              )
              }
            })()} */}
      </View>
      </ScrollView>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight:height,
    paddingTop: height/5,
  },
})
export default SoilHealthCardForm