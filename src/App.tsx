import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import ElevatedCards from '../components/ElevatedCards';

const App = () => {

  useEffect(()=>{
    if (Platform.OS==='android' && SplashScreen) SplashScreen.hide();
  },[]);

  return (
    <SafeAreaView>
      <ScrollView>
        <ElevatedCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})

