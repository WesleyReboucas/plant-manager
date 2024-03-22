import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { PlantProps } from './plant'
import { colors } from '@/theme/colors'
import { styles } from './styles'

type Props = {
  plant: PlantProps
}

export default function Plant({ plant }: Props) {
  const [aspectRatio, setAspectRatio] = useState(1)

  useEffect(() => {
    if (plant.image) {
      Image.getSize(plant.image, (width, height) => {
        setAspectRatio(width / height)
      })
    }
  }, [])

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: plant.image }}
        style={[styles.image, { aspectRatio }]}
      />
      <View style={styles.footer}>
        <Text style={styles.name}>{plant.name}</Text>
        <Feather name='more-horizontal' size={16} color={colors.text[600]} />
      </View>
    </View>
  )
}
