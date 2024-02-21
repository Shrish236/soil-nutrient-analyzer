import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
const Logout = () => {
    const navigator = useNavigation()
    useEffect(() => {
        alert("Logged Out")
        navigator.navigate('home')
    }, [])
  return (
    <></>
  )
}

export default Logout