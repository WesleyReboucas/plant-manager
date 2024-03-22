import React, {useState} from 'react';
import {Alert, Platform, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Components
import {Button} from '../../components/Button';

// Styles
import {
  Content,
  Emoji,
  Footer,
  Form,
  Header,
  Input,
  KeyboardContainer,
  SafeAreaContainer,
  Title,
} from './styles';
import colors from '../../components/styles/colors';

export function Login() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  async function handleSubmit() {
    if (!name) {
      return Alert.alert('Me diz como chamar você 😢');
    }

    try {
      await AsyncStorage.setItem('@plantmanager:user', name);
      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subtitle:
          'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'Home',
      });
    } catch {
      Alert.alert('Não foi possível salvar o seu nome. 😢');
    }
  }

  return (
    <SafeAreaContainer>
      <KeyboardContainer
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback>
          <Content>
            <Form>
              <Header>
                <Emoji>{isFilled ? '😄' : '😀'}</Emoji>
                <Title>
                  Como podemos {'\n'}
                  chamar você?
                </Title>
              </Header>

              <Input
                style={(isFocused || isFilled) && {borderColor: colors.green}}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />

              <Footer>
                <Button title="Confirmar" onPress={handleSubmit} />
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardContainer>
    </SafeAreaContainer>
  );
}
