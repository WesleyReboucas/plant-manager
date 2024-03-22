import { Slot } from 'expo-router'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import * as SplashScreen from 'expo-splash-screen'

import {
  useFonts,
  Jost_600SemiBold,
  Jost_400Regular,
} from '@expo-google-fonts/jost'

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_400Regular,
  })

  if (fontsLoaded) {
    SplashScreen.hideAsync()
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar />
      {fontsLoaded && <Slot />}
    </GestureHandlerRootView>
  )
}
