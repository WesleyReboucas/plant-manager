import { Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { ButtonProps } from './button'
import { theme } from '@/theme'
import { styles } from './styles'

export default function Button({ iconName, text, displayOption }: ButtonProps) {
  return (
    <RectButton style={styles.container}>
      {displayOption !== 'text' && (
        <Feather name={iconName} size={24} color={theme.colors.white} />
      )}
      {displayOption !== 'icon' && <Text style={styles.text}>{text}</Text>}
    </RectButton>
  )
}
