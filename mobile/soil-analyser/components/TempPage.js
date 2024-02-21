import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'
const SignUp = () => {
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    useEffect(() => {
        const timer1 = setTimeout(() => {
            setCheck1(true);
        }, 1000);
        const timer2 = setTimeout(() => {
            setCheck2(true);
        }, 2000);
        const timer3 = setTimeout(() => {
            setCheck3(true);
        }, 3000);

        return (() => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        })
    }, [])

    // const handleCheckboxPress = () => {
    //   setChecked(prev => {
    //     return !prev
    //   })
    // }
  
    return (
      <View style={styles.container}>
        <View>
            <AnimatedCheckbox
                checked={check1}
                highlightColor="white"
                checkmarkColor="white"
                boxOutlineColor="white"
            />
        </View>
          
          <AnimatedCheckbox
            checked={check2}
            highlightColor="white"
            checkmarkColor="white"
            boxOutlineColor="white"
          />
          <AnimatedCheckbox
            checked={check3}
            highlightColor="white"
            checkmarkColor="white"
            boxOutlineColor="white"
          />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"black"
    },
    checkbox: {
      width: 64,
      height: 64,
    }
})

export default SignUp