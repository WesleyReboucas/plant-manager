import { View, Text, FlatList } from 'react-native'
import { styles } from './styes'
import { Ionicons } from '@expo/vector-icons'
import { WeatherProps } from './weather'

export default function Weather() {
  const currentHour = new Date().getHours()
  const weatherByHourList: WeatherProps[] = Array.from(
    { length: 24 - currentHour },
    (_, index) => {
      const hour = `${(currentHour + index) % 24}`.padStart(2, '0')
      const weatherCondition = index % 2 === 0 ? 'sunny' : 'rainy'
      const temperature = Math.floor(Math.random() * 20 + 20)
      return { hour, weatherCondition, temperature }
    }
  )
  const renderItem = ({ item }: { item: WeatherProps }) => (
    <View style={styles.weatherByHour}>
      <Text style={styles.text}>{item.hour}</Text>
      <Ionicons name={item.weatherCondition} style={styles.icon} />
      <Text style={styles.text}>{`${item.temperature}ºC`}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.weather}>
          <Text style={styles.subtitle}>Salvador</Text>
          <Text style={styles.title}>28ºC</Text>
        </View>
        <View style={styles.weatherResume}>
          <Ionicons name='sunny' style={styles.icon} />
          <Text style={styles.subtitle}>Um sol por pessoa</Text>
          <Text style={styles.subtitle}>H:32º L:26º</Text>
        </View>
      </View>

      <View style={styles.content}>
        <FlatList
          data={weatherByHourList}
          keyExtractor={(item) => item.hour}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentWeatherByHour}
        />
      </View>
    </View>
  )
}
