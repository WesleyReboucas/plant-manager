import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native'
import Button from '@/components/Button'
import StatisticCard from '@/components/StatisticCard'
import { theme } from '@/theme'
import RewardsCard from '@/components/RewardsCard'

export default function Profile() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              source={{ uri: 'https://github.com/wesleyreboucas.png' }}
              style={styles.image}
            />
            <View style={styles.content_header}>
              <Text style={styles.title}>Wesley Rebouças</Text>
              <Text style={styles.subtitle}>@wesleyreboucas - ele/dele/-e</Text>
              <Text style={styles.subtitle}>17 seguidores - 5 seguindo</Text>
              <View style={styles.buttons}>
                <Button
                  iconName='user-plus'
                  text='Adicionar amigos'
                  displayOption='both'
                />
                <Button
                  iconName='share'
                  text='Adicionar amigos'
                  displayOption='icon'
                />
                <Button
                  iconName='settings'
                  text='Adicionar amigos'
                  displayOption='icon'
                />
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.text}>Estatísticas</Text>
            <View style={styles.statistics}>
              <StatisticCard iconName='leaf' statistic={17} text='Plantas' />
              <StatisticCard iconName='flash' statistic={1998} text='Pontos' />
              <StatisticCard iconName='water' statistic={5} text='Regas' />
              <StatisticCard
                iconName='medical'
                statistic={2}
                text='Fertilização'
              />
            </View>
          </View>

          <View>
            <Text style={styles.text}>Conquistas</Text>
            <View style={styles.rewards}>
              <RewardsCard />
              <RewardsCard />
              <RewardsCard />
              <RewardsCard />
            </View>
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
    gap: 20,
    paddingTop: 42,
    paddingHorizontal: 12,
    backgroundColor: theme.colors.background,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content_header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: theme.colors.text[500],
    fontFamily: theme.fontFamily.heading,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.text[500],
    fontFamily: theme.fontFamily.complement,
  },
  buttons: {
    flexDirection: 'row',
    marginVertical: 15,
    gap: 8,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: theme.colors.green[500],
  },
  statistics: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    padding: 12,
  },
  rewards: {
    margin: 10,
  },
  text: {
    fontSize: 22,
    color: theme.colors.text[500],
    fontFamily: theme.fontFamily.heading,
  },
})
