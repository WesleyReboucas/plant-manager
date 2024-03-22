import { Feather } from '@expo/vector-icons'

export type ButtonProps = {
  iconName: keyof typeof Feather.glyphMap
  text: string
  displayOption: string
}
