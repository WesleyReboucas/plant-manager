import { Ionicons } from '@expo/vector-icons'

export type CardProps = {
  text: string
  statistic: number
  iconName: keyof typeof Ionicons.glyphMap
}
