import { theme } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 44,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.green[500],
    fontFamily: theme.fontFamily.text,
  },
  button: {
    height: 46,
    width: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: theme.colors.green[500],
    fontSize: 24,
  },
})
