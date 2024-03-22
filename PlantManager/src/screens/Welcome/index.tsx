import React from 'react';

import {
  Button,
  Container,
  Subtitle,
  Title,
  Image,
  Wrapper,
  ButtonIcon,
} from './styles';
import WateringImg from './../../assets/images/watering.png';
import {useNavigation} from '@react-navigation/core';

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('Login');
  }
  return (
    <Container>
      <Wrapper>
        <Title>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Title>

        <Image source={WateringImg} resizeMode="contain" />

        <Subtitle>
          Não esqueça mais de cuidar de suas plantas. Nós ajudamos a te lembrar
          sempre que precisar.
        </Subtitle>

        <Button activeOpacity={0.7} onPress={handleStart}>
          <ButtonIcon name="chevron-right" />
        </Button>
      </Wrapper>
    </Container>
  );
}
