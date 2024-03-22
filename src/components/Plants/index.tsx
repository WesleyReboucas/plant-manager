import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Plant from '@/components/Plant'
import { PlantsProps } from './plants'
import { ScrollView } from 'react-native-gesture-handler'

export default function Plants({ plants }: PlantsProps) {
  function plantsByColumn(column: 'right' | 'left') {
    const rest = column == 'left' ? 0 : 1
    return plants
      .filter((_, index) => index % 2 == rest)
      .map((plant) => <Plant key={plant.id} plant={plant} />)
  }

  return (
    <View style={styles.container}>
      <View style={styles.column}>{plantsByColumn('left')}</View>
      <View style={styles.column}>{plantsByColumn('right')}</View>
    </View>
  )
}
