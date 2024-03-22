import { theme } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 30,
    paddingBottom: 20,
  },
  content: {
    gap: 24,
  },
  list: {
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontFamily: theme.fontFamily.heading,
    color: theme.colors.text[600],
    fontSize: 22,
  },
})
