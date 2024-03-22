import { theme } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  image: {
    borderRadius: 22,
  },
  name: {
    fontSize: 14,
    fontFamily: theme.fontFamily.heading,
    color: theme.colors.text[600],
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
})
