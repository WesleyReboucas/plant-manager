import Schedules from '@/components/Schedules'
import { theme } from '@/theme'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native'
import { USERS } from '@/Utils/users'

export default function Plants() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Minhas plantas</Text>
            <Text style={styles.text}>
              Organize seus horários! Não esqueça de quando você deve cuidar das
              suas plantas.
            </Text>
          </View>

          <View style={styles.spotlight}>
            <Text style={styles.title}>Hoje</Text>
            <Schedules
              schedules_plants={USERS[0].schedules_plants[1]}
              handleRemove={() => {
                // TODO: Delete schedule plant function
              }}
            />
          </View>

          <View style={styles.schedules}>
            <Text style={styles.title}>Próximos dias</Text>
            {USERS[0].schedules_plants.map((item) => (
              <Schedules
                key={item.id}
                schedules_plants={item}
                handleRemove={() => {
                  // TODO: Delete schedule plant function
                }}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight,
  },
  container: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: theme.colors.background,
    gap: 15,
    marginTop: 10,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spotlight: {},
  schedules: {
    gap: 10,
    width: '100%',
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    color: theme.colors.text[600],
    fontFamily: theme.fontFamily.heading,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: theme.colors.text[500],
    fontFamily: theme.fontFamily.text,
  },
})
