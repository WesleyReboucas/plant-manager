import { theme } from '@/theme'
import { StyleSheet } from 'react-native'
import { Platform } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 5,
    backgroundColor: theme.colors.shape,
  },
  image: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  title: {
    fontFamily: theme.fontFamily.heading,
    fontSize: 17,
    color: theme.colors.text[600],
  },
  details: {
    alignItems: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  timeLabel: {
    fontSize: 16,
    fontFamily: theme.fontFamily.text,
    color: theme.colors.text[400],
  },
  time: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: theme.fontFamily.heading,
    color: theme.colors.text[500],
  },
  buttonRemove: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: 120,
    height: 105,
    backgroundColor: theme.colors.red,
    marginTop: 5,
    borderRadius: 20,
    paddingLeft: 30,
    right: 30,
  },
})
