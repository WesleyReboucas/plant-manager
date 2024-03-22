import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { CardProps } from './statistic-card'
import { styles } from './styles'

export default function StatisticCard({
  text,
  statistic,
  iconName,
}: CardProps) {
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} style={styles.icon} />
      <View>
        <Text style={styles.number}> {statistic} </Text>
        <Text style={styles.text}> {text} </Text>
      </View>
    </View>
  )
}
