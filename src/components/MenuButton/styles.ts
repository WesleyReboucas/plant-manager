import { theme } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color: theme.colors.text[500],
    fontFamily: theme.fontFamily.complement,
  },
  icon: {
    padding: 24,
    marginBottom: 10,
    backgroundColor: theme.colors.green[400],
    borderRadius: 22,
    overflow: 'hidden',
  },
})
