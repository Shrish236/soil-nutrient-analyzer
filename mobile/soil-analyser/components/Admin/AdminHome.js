import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, ImageBackground, Alert, Pressable } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SoilHealthCardForm from '../SoilHealthCardForm';
import UserEnquiries from '../UserEnquiries';
import EnquiryForm from '../EnquiryForm';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import UserHome from '../UserHome';
import AdminFirstPage from './AdminFirstPage';
import AdminLinkSoilNumber from './AdminLinkSoilNumber';
import AdminSoilCardForm from './AdminSoilCardForm';
import { Avatar, Button, Card, TextInput, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const BgURL = require('../../assets/profilepagebg.jpg')
const Tab = createBottomTabNavigator();

export default function AdminHome() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          style={{
            backgroundColor:'#EAD9F6'
          }}
          activeIndicatorStyle={{
            backgroundColor:'#D7A7F9'
          }}
          navigationState={state}
         safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
             navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={AdminFirstPage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Link"
        component={AdminLinkSoilNumber}
        options={{
          tabBarLabel: 'Link Enquiry',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="link-variant" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Soil Card"
        component={AdminSoilCardForm}
        options={{
          tabBarLabel: 'Soil Card',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="sprout" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="account-circle" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  const navigator = useNavigation()
  return (
    <ScrollView>
        <ImageBackground source={BgURL} style={{
            height:'100%'
        }}>
        <View style={{
            flex:1, 
            justifyContent:'center',
            alignItems: 'center',
            height:height/1.2
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
            
            <Card.Title title="Your Profile" titleStyle={{
                fontWeight: 'bold',
                fontSize: 22,
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
                    fontWeight:700,
                    textAlign:'center',
                    fontSize:18,
                    padding:10
                }}>Admin 1</Text>
                <Text style={{
                    lineHeight:20,
                    textAlign:'center',
                    padding:5
                }}> Designation 1</Text>
                <Text style={{
                    lineHeight:20,
                    textAlign:'center',
                    padding:5
                }}> admin123@gmail.com</Text>
                <Text style={{
                    lineHeight:20,
                    textAlign:'center',
                    padding:5
                }}>9962642645</Text>
            </View>
            <View style={{
              flexDirection:'row',
              justifyContent: 'center',
              padding:10,
              gap: width/5
            }}>
                <FAB
                    icon="logout"
                    style={{
                      backgroundColor:'black'
                    }}
                    onPress={() => {
                        console.log('Pressed')
                        Alert.alert('Account', 'Logged out successfully',[
                          {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ])
                        navigator.navigate("home")
                    }}
                    size='small'
                    color='white'
                    label='Logout'
                />
            </View>
            {/* <View>
            <Pressable style={{
                  marginTop:2
                }}
                
                onPress={()=>{
                  console.log("Complaint")
                }}>
            <Text style={{
                  textAlign: 'center',
                  padding:2,
                  fontStyle: 'italic'
                }}>Have complaints?  <Text style={{
                  fontWeight: '700',
                  fontStyle: 'italic',
                  textDecorationLine: 'underline',
                }}>Click Here</Text></Text></Pressable>
            </View> */}
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
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Settings!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});