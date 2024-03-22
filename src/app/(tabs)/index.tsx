import { useState } from 'react'
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native'

import { Filters } from '@/components/Filters'
import { FILTERS } from '@/Utils/filters'

import Plants from '@/components/Plants'
import { PLANTS } from '@/Utils/plants'

import { theme } from '@/theme'
import Weather from '@/components/Waether'
import { ScrollView } from 'react-native-gesture-handler'

export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0])

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}>
        <View style={styles.container}>
          <Weather />
          <Filters filters={FILTERS} filter={filter} onChange={setFilter} />
          <Plants plants={PLANTS} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 0,
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: theme.colors.background,
  },
  text: {
    fontSize: 22,
    color: theme.colors.text[500],
    fontFamily: theme.fontFamily.heading,
  },
})
