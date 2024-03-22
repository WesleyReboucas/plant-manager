import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { MenuButtonProps } from './menu-button'
import { styles } from './styles'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { theme } from '@/theme'

export default function MenuButton({ title, icon }: MenuButtonProps) {
  return (
    <Pressable style={styles.container}>
      <Ionicons
        name={icon}
        size={32}
        color={theme.colors.green[500]}
        style={styles.icon}
      />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}
