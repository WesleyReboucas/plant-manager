import { theme } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  pressable: {},
  pressableSelected: {
    borderBottomWidth: 4,
    borderBottomColor: theme.colors.green[500],
  },
  text: {
    color: theme.colors.text[500],
    fontSize: 20,
    fontFamily: theme.fontFamily.complement,
  },
})
