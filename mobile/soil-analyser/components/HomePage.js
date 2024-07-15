import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Animated,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  Image,
  Keyboard, 
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable
} from 'react-native';
import { useFonts } from 'expo-font';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import { TextInput, Button } from 'react-native-paper';
// import { height } from '@mui/system';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AnimatedAntDesign = Animated.createAnimatedComponent(AntDesign);

const DURATION = 1000;
const TEXT_DURATION = DURATION * 0.8;


const quotes = [
  {
    quote:
      'For the things we have to learn before we can do them, we learn by doing them.',
    author: 'Aristotle, The Nicomachean Ethics',
  },
  {
    quote: 'The fastest way to build an app.',
    author: 'The Expo Team',
  },
];



const Circle = ({ onPress, index, quotes, animatedValue, animatedValue2, page }) => {
  
  const navigator = useNavigation()
  const imagebg  = require('../assets/TN-logo.png')
  const { initialBgColor, nextBgColor, bgColor } = colors[index];
  const inputRange = [0, 0.001, 0.5, 0.501, 1];
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const backgroundColor = animatedValue2.interpolate({
    inputRange,
    outputRange: [
      initialBgColor,
      initialBgColor,
      initialBgColor,
      bgColor,
      bgColor,
    ],
  });
  const dotBgColor = animatedValue2.interpolate({
    inputRange: [0, 0.001, 0.5, 0.501, 0.9, 1],
    outputRange: [
      bgColor,
      bgColor,
      bgColor,
      initialBgColor,
      initialBgColor,
      nextBgColor,
    ],
  });
  const ImageURL = require('../assets/cropped_image.png')
  
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        styles.container,
        { backgroundColor },
      ]}
    >
      {(()=>{
        // if(page===0){
        //   return(
        //     <>
        //       <View style={{
        //         paddingBottom: height/6,
        //         justifyContent: 'center',
        //         alignItems:'center',
        //       }}>
        //       <Image source={imagebg} style={{
        //         height: 170,
        //         width: 155,
        //       }}></Image>
        //       <Text style={{ 
        //         marginTop: height/12,
        //         fontWeight: 'bold',
        //         fontSize: 20,
        //         color: 'black',
        //         textAlign: 'center'

        //       }}>Soil Nutrient Analyser</Text>
        //       </View>
        //     </>
        //   );
        // }
          return(
            <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView 
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 0}
            enabled={Platform.OS === "ios" ? true : false}
            style={{
              flex: 1
            }}
            >
              <View style={{
                width: width/1.35,
                marginTop: height/5,
                justifyContent:'center',
                alignItems:'center'
              }}>
                <Text style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>Log in</Text>
                <TextInput
                  mode='outlined'
                  label="Email"
                  value={email}
                  onChangeText={text => setEmail(text)}
                  selectionColor='black'
                  cursorColor='black'
                  outlineColor='black'
                  style={{
                    width: "100%",
                    height: height/16,
                    marginTop: 30,
                  }}
                />
                <TextInput
                  mode='outlined'
                  label="Password"
                  value={password}
                  onChangeText={text => setPassword(text)}
                  selectionColor='black'
                  cursorColor='black'
                  outlineColor='black'
                  style={{
                    width: "100%",
                    height: height/16,
                    marginTop: 20
                  }}
                />
                <Button
                  mode="contained" 
                  onPress={() => {
                    navigator.navigate("profile")
                  }}
                  buttonColor='black'
                  textColor='white'
                  style={{
                    width: "75%",
                    marginTop: 30,
                    padding:0
                  }}
                >
                  Submit
                </Button>
                <Pressable onPress={() => {
                  navigator.navigate("signup")
                }}>
                <Text style={{
                  marginTop:height/25,
                  marginBottom:10,
                  fontSize:15,
                  fontWeight: '500'
                }}>Do not have an account?  <Text style={{
                  textDecorationLine:'underline',
                  color:'purple',
                  fontStyle: 'italic'
                }}>Signup</Text></Text></Pressable>
                <Pressable onPress={() => {
                  navigator.navigate("admin-login")
                }}>
                <Text style={{
                  marginTop:10,
                  fontSize:15,
                  fontWeight: '500'
                }}>Searching for admin login?  <Text style={{
                  textDecorationLine:'underline',
                  color:'purple',
                  fontStyle: 'italic'
                }}>Admin Login</Text></Text></Pressable>
              </View>
              </KeyboardAvoidingView>
              </TouchableWithoutFeedback>
            </>
          );
      })()}
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: "#DAA520",
            transform: [
              { perspective: 200 },
              {
                rotateY: animatedValue2.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['0deg', '-90deg', '-180deg'],
                }),
              },

              {
                scale: animatedValue2.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [1, 6, 1],
                }),
              },

              {
                translateX: animatedValue2.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [0, 20, 0],
                }),
              },
            ],
          },
        ]}
      >
        <TouchableOpacity onPress={onPress} style={{}}>
          <Animated.View
            style={[
              styles.button,
              {
                transform: [
                  {
                    scale: animatedValue.interpolate({
                      inputRange: [0, 0.05, 0.5, 1],
                      outputRange: [1, 0, 0, 1],
                      // extrapolate: "clamp"
                    }),
                  },
                  {
                    rotateY: animatedValue.interpolate({
                      inputRange: [0, 0.5, 0.9, 1],
                      outputRange: ['0deg', '180deg', '180deg', '180deg'],
                    }),
                  },
                ],
                opacity: animatedValue.interpolate({
                  inputRange: [0, 0.05, 0.9, 1],
                  outputRange: [1, 0, 0, 1],
                }),
              },
            ]}
          >
            <Image source={ImageURL} style={{
                                height: height/8,
                                width:width/4,
                            }}
                            />

            {/* <AnimatedAntDesign name='arrowright' size={28} color={'white'} style={{
              position: 'relative'
            }} /> */}
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

/* 
initialBgColor -> Big background of the element
bgColor -> initial circle bg color that will be the next slide initial BG Color
nextBgColor -> next circle bg color after we fully transition the circle and this will be small again
prev bgColor === next initialBgColor
prev nextBgColor === next bgColor
*/

const colors = [
  // {
  //   initialBgColor: '#F8F8F8',
  //   bgColor: '#222',
  //   nextBgColor: 'goldenrod',
  // },
  {
    initialBgColor: '#F8F8F8',
    bgColor: 'goldenrod',
    nextBgColor: 'black',
  },
  {
    initialBgColor: '#F8F8F8',
    bgColor: 'goldenrod',
    nextBgColor: 'black',
  },
  // {
  //   initialBgColor: '#AED0F1',
  //   bgColor: '#E8E8E4',
  //   nextBgColor: '#8AEC8A',
  // },
  // {
  //   initialBgColor: '#8AEC8A',
  //   bgColor: '#E8E8E4',
  //   nextBgColor: 'goldenrod',
  // },
];

export default function Homepage({ navigator }) {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const animatedValue2 = React.useRef(new Animated.Value(0)).current;
  const sliderAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const inputRange = [...Array(quotes.length).keys()];
  const [index, setIndex] = React.useState(0);
  const [fontsLoaded] = useFonts({
    'Arial': require('../assets/fonts/ArialTh.ttf'),
    'Helvetica' : require('../assets/fonts/Helvetica_CE_Bold.otf'),
  });
  const [page, setPage] = React.useState(0)
  const animate = (i) =>
    Animated.parallel([
      Animated.timing(sliderAnimatedValue, {
        toValue: i,
        duration: TEXT_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue2, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: false,
      }),
    ]);
  
  
  const onPress = () => {
    animatedValue.setValue(0);
    animatedValue2.setValue(0);
    animate((index + 1) % colors.length).start();
    setIndex((index + 1) % colors.length);
    setPage(page+1)
    console.log(page)
  };

  
  if(fontsLoaded){
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start', paddingTop: 100 }}>
        
        <StatusBar hidden />
        <Circle
          index={index}
          onPress={onPress}
          quotes={quotes}
          animatedValue={animatedValue}
          animatedValue2={animatedValue2}
          page={page}
        />
        <Animated.View
          style={{
            flexDirection: 'row',
            transform: [
              {
                translateX: sliderAnimatedValue.interpolate({
                  inputRange,
                  outputRange: quotes.map((_, i) => -i * width * 2),
                }),
              },
            ],
            opacity: sliderAnimatedValue.interpolate({
              inputRange: [...Array(quotes.length * 2 + 1).keys()].map(
                (i) => i / 2
              ),
              outputRange: [...Array(quotes.length * 2 + 1).keys()].map((i) =>
                i % 2 === 0 ? 1 : 0
              ),
            }),
          }}
        >
          
          {/* {quotes.slice(0, colors.length).map(({ quote, author }, i) => {
            return (
              <View style={{ paddingRight: width, width: width * 2 }} key={i}>
                <Text
                  style={[styles.paragraph, { color: colors[i].nextBgColor }]}
                >
                  {quote}
                </Text>
                <Text
                  style={[
                    styles.paragraph,
                    {
                      color: colors[i].nextBgColor,
                      fontSize: 10,
                      fontWeight: 'normal',
                      textAlign: 'right',
                      opacity: 0.8,
                    },
                  ]}
                >
                  ______ {author}
                </Text>
              </View>
            );
          })} */}
        </Animated.View>
      </View>
    );
  }
  else{
    return(
      <ActivityIndicator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    paddingBottom: 50,
  },
  paragraph: {
    margin: 12,
    fontSize: 24,
    // fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Arial',
    color: 'white',
  },
  button: {
    height: 75,
    width: 75,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#FFFFFF"
  },
  circle: {
    backgroundColor: 'turquoise',
    width: 75,
    height: 75,
    borderRadius: 50,
  },
});