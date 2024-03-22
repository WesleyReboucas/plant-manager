import { StyleSheet } from 'react-native'
import { theme } from '@/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 16,
    backgroundColor: theme.colors.green[500],
  },
  text: {
    fontSize: 20,
    marginLeft: 5,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.heading,
  },
})
