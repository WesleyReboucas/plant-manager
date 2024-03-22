import { View, Text, Image, TouchableOpacity } from 'react-native'
import { RectButton, Swipeable } from 'react-native-gesture-handler'
import { styles } from './styles'
import { colors } from '@/theme/colors'
import Animated from 'react-native-reanimated'
import { Feather } from '@expo/vector-icons'
import { SchedulesProps } from './schedules'

export default function Schedules({
  schedules_plants,
  handleRemove,
}: SchedulesProps) {
  const maxLength = 10
  const truncatedName =
    schedules_plants.name.length > maxLength
      ? schedules_plants.name.substring(0, maxLength) + '...'
      : schedules_plants.name

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton style={styles.buttonRemove} onPress={handleRemove}>
              <Feather name='trash' size={32} color={colors.white} />
            </RectButton>
          </View>
        </Animated.View>
      )}>
      <RectButton style={styles.container}>
        <Image
          source={{
            uri: schedules_plants.image,
          }}
          width={240}
          height={105}
          style={styles.image}
        />
        <View style={styles.details}>
          <Text style={styles.title}>{truncatedName}</Text>
          <Text style={styles.timeLabel}>Regar às</Text>
          <Text style={styles.time}> {schedules_plants.water_frequency} </Text>
        </View>
      </RectButton>
    </Swipeable>
  )
}
