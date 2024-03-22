import { StyleSheet } from 'react-native'
import { theme } from '@/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 0.2,
    borderColor: theme.colors.green[500],
    backgroundColor: theme.colors.shape,
    width: 165,
  },
  icon: {
    color: theme.colors.green[500],
    fontSize: 20,
    marginTop: 4,
  },
  number: {
    fontSize: 20,
    marginLeft: 5,
    color: theme.colors.text[600],
    fontFamily: theme.fontFamily.heading,
  },
  text: {
    fontSize: 18,
    marginLeft: 5,
    color: theme.colors.text[400],
    fontFamily: theme.fontFamily.complement,
  },
})
