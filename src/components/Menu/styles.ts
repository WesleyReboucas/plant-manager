import { theme } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.shape,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 21,
  },
  header: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    fontSize: 18,
    color: theme.colors.text[600],
    fontFamily: theme.fontFamily.heading,
    textAlign: 'center',
    marginLeft: 24,
  },
  options: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 18,
  },
})
