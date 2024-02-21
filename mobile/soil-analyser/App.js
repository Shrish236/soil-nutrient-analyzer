import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './components/HomePage';
import SignUp from './components/SignUp';
import { Pressable, Text } from 'react-native';
import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';
import ViewEnquiry from './components/ViewEnquiry';
import ProfilePage from './components/ProfilePage';
import SoilCardPage from './components/SoilCardPage';
import UserEnquiries from './components/UserEnquiries';
import AboutUs from './components/AboutUs';
import ConsultUs from './components/ConsultUs';
import Process from './components/Process';
import AdminLogin from './components/Admin/AdminLogin';
import AdminHome from './components/Admin/AdminHome';
import EditProfile from './components/EditProfile';
import AdminEnquiries from './components/Admin/AdminEnquiries';
import { useNavigation } from '@react-navigation/native';
import Logout from './components/Logout';
const Stack = createNativeStackNavigator()
AppRegistry.registerComponent("main", () => App);
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" component={Homepage} options={{ headerShown: false, headerBackTitle:false }}/>
        <Stack.Screen name="signup" component={SignUp} options={{ 
          title: 'Sign Up',
          headerStyle: {
            backgroundColor: '#1E1E1D',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }
          }/>
        <Stack.Screen name="profile" component={ProfilePage} options={{ 
          title: 'Home',
          headerStyle: {
            backgroundColor: '#1E1E1D',
            textAlign:'center'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: false,
          // headerRight: () => {
          //   return(
          //     <Pressable onPress={logout}>
          //       <Text style={{
          //         fontWeight:'bold',
          //         color:'white',
          //         fontSize:20
          //       }}>Logout</Text>
          //     </Pressable>
          //   )
          // }
        }
          }
          
          />
        <Stack.Screen name="enquiry" component={ViewEnquiry} options={{ 
          title: 'Enquiry',
          headerStyle: {
            backgroundColor: '#1E1E1D',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }
          }/>
          <Stack.Screen name="edit-profile" component={EditProfile} options={{ 
          title: 'Edit Profile',
          headerStyle: {
            backgroundColor: '#1E1E1D',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }
          }/>
          <Stack.Screen name="enquiries" component={UserEnquiries} options={{ 
          title: 'Your Enquiries',
          headerStyle: {
            backgroundColor: '#1E1E1D',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }
          }/>
          <Stack.Screen name="admin-login" component={AdminLogin} options={{ 
          title: 'Admin',
          headerStyle: {
            backgroundColor: '#1E1E1D',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }
          }/>
          <Stack.Screen name="admin-home" component={AdminHome} options={{ 
          title: 'Admin',
          headerStyle: {
            backgroundColor: '#1E1E1D',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: false,
        }
          }/>
          <Stack.Screen name="admin-enquiries" component={AdminEnquiries} options={{ 
          title: 'Enquiries',
          headerStyle: {
            backgroundColor: '#1E1E1D',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }
          }/>
          <Stack.Screen name="process" component={Process} options={{ 
          title: '3-step Process',
          headerStyle: {
            backgroundColor: '#1E1E1D',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }
          }/>
          <Stack.Screen name="about-us" component={AboutUs} options={{ 
          title: 'About Us',
          headerStyle: {
            backgroundColor: '#1E1E1D',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }
          }/>
          <Stack.Screen name="consult-us" component={ConsultUs} options={{ 
          title: 'Consult Us',
          headerStyle: {
            backgroundColor: '#1E1E1D',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }
          }/>
          <Stack.Screen name="soilcard" component={SoilCardPage} options={{ 
          title: 'Soil Card',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }
          }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
registerRootComponent(App);
