import { theme } from '@/theme'
import { View, StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native'
import Plants from '@/components/Plants'
import { PLANTS } from '@/Utils/plants'
import { ScrollView } from 'react-native-gesture-handler'
import SearchInput from '@/components/SearchInput'

export default function Search() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>Qual o nome da planta?</Text>
          <SearchInput />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Plants plants={PLANTS} />
        </ScrollView>
      </View>
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
    marginTop: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  content: {
    alignItems: 'center',
    gap: 10,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 22,
    color: theme.colors.text[500],
    fontFamily: theme.fontFamily.heading,
  },
})
