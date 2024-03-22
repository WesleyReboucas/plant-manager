import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { CardProps } from './rewards-card'
import { styles } from './styles'

export default function RewardsCard() {
  return (
    <View style={styles.container}>
      <Ionicons name='trophy' style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}> Regador nato!</Text>
        <Text style={styles.text}> Regou suas plantas por 1 mês</Text>
      </View>
    </View>
  )
}
