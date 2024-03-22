import { Ionicons } from '@expo/vector-icons'

export type WeatherProps = {
  hour: string
  weatherCondition: keyof typeof Ionicons.glyphMap
  temperature: number
}
