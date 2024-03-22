import { forwardRef } from 'react'
import { View, Text } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import { MenuProps } from './menu'
import { Ionicons } from '@expo/vector-icons'
import { styles } from './styles'
import { theme } from '@/theme'
import MenuButton from '@/components/MenuButton'

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 230]}
      backgroundStyle={styles.container}
      handleComponent={() => null}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Adicionar:</Text>
          <Ionicons
            name='close'
            size={24}
            onPress={onClose}
            color={theme.colors.text[600]}
          />
        </View>
        <View style={styles.options}>
          <MenuButton title={'Planta'} icon='leaf' />
          <MenuButton title={'Água'} icon='water' />
          <MenuButton title={'Adubo'} icon='medical' />
        </View>
      </View>
    </BottomSheet>
  )
})
