import { useEffect, useState } from 'react'
import { View, Text, TextInput, Pressable, LogBox } from 'react-native'
import { styles } from './styles'
import { Feather } from '@expo/vector-icons'

import Voice, { SpeechResultsEvent } from '@react-native-voice/voice'

LogBox.ignoreLogs(['new NativeEventEmitter'])

export default function SearchInput() {
  const [search, setSearch] = useState('')
  const [isListening, setIsListening] = useState(false)

  function onSpeechResults({ value }: SpeechResultsEvent) {
    const text = value ?? []
    setSearch(text.join().replace(',', ' '))
  }

  async function handleListening() {
    try {
      if (isListening) {
        await Voice.stop()
        setIsListening(false)
      } else {
        setSearch('')
        await Voice.start('pt-BR')
        setIsListening(true)
      }
    } catch (error) {
      console.log('[X] Error handleListening ~ SearchInput ', error)
    }
  }

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults
  }, [])

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={isListening ? 'Gravando...' : 'Pesquisar... '}
        onChangeText={setSearch}
        value={search}
      />

      <Pressable style={styles.button} onPress={handleListening}>
        <Feather name={isListening ? 'pause' : 'mic'} style={styles.icon} />
      </Pressable>
    </View>
  )
}
