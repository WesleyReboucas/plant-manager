import { FlatList, Text, View } from 'react-native'
import Filter from '@/components/Filter'
import { styles } from './styles'
import { FiltersProps } from './filters'

export function Filters({ filter, filters, onChange }: FiltersProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Em qual ambiente está sua planta?</Text>
      <FlatList
        data={filters}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Filter
            filter={item}
            selected={item == filter}
            onPress={() => onChange(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        contentContainerStyle={styles.content}
      />
    </View>
  )
}
