import { Ionicons } from '@expo/vector-icons'

export type MenuButtonProps = {
  title: string
  icon: keyof typeof Ionicons.glyphMap
}
