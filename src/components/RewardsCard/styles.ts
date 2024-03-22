import { StyleSheet } from 'react-native'
import { theme } from '@/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 0.2,
    borderColor: theme.colors.green[500],
    backgroundColor: theme.colors.shape,
    width: '100%',
  },
  textContainer: {
    flexWrap: 'wrap',
  },
  icon: {
    color: theme.colors.green[500],
    fontSize: 50,
    marginTop: 4,
  },
  title: {
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
