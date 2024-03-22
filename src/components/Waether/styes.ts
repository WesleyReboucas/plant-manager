import { theme } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  title: {
    fontSize: 44,
    fontFamily: theme.fontFamily.heading,
    color: theme.colors.text[600],
  },
  subtitle: {
    fontSize: 20,
    fontFamily: theme.fontFamily.text,
    color: theme.colors.text[600],
  },
  text: {
    fontSize: 18,
    fontFamily: theme.fontFamily.text,
    color: theme.colors.text[600],
  },
  weather: {},
  weatherResume: {
    alignItems: 'flex-end',
  },
  weatherByHour: {
    marginVertical: 4,

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWeatherByHour: {
    gap: 24,
    paddingHorizontal: 8,
  },
  icon: {
    fontSize: 20,
    marginVertical: 4,
    color: theme.colors.green[500],
  },
})
