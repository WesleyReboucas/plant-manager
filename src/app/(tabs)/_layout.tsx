import { useRef } from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome5, Foundation, Ionicons } from '@expo/vector-icons'
import BottomSheet from '@gorhom/bottom-sheet'
import { theme } from '@/theme'
import Avatar from '@/components/Avatar'
import { Menu } from '@/components/Menu'
import { View } from 'react-native'

export default function TabLayout() {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand()
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.colors.green[500],
          tabBarInactiveTintColor: theme.colors.text[400],
          tabBarStyle: {
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.shape,
          },
        }}>
        <Tabs.Screen
          name='index'
          options={{
            tabBarIcon: ({ size, color }) => (
              <Foundation name='home' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='search'
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name='search' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='menu'
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome5 name='plus' size={size} color={color} />
            ),
          }}
          listeners={() => ({
            tabPress: (event) => {
              event.preventDefault()
              handleBottomSheetOpen()
            },
          })}
        />
        <Tabs.Screen
          name='plants'
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name='leaf' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            tabBarIcon: ({ color }) => (
              <Avatar
                selected={color == theme.colors.green[500]}
                source={{ uri: 'https://github.com/wesleyreboucas.png' }}
              />
            ),
          }}
        />
      </Tabs>

      <Menu ref={bottomSheetRef} onClose={handleBottomSheetClose} />
    </View>
  )
}
