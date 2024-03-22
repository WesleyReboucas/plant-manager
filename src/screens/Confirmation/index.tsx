import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';

// Components
import {Button} from '../../components/Button';

// Styles
import {Container, Content, Emoji, Footer, Subtitle, Title} from './styles';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄',
};

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const {title, subtitle, buttonTitle, icon, nextScreen} =
    routes.params as Params;

  function handleMoveOn() {
    navigation.navigate(nextScreen);
  }

  return (
    <Container>
      <Content>
        <Emoji>{emojis[icon]}</Emoji>

        <Title>{title}</Title>

        <Subtitle>{subtitle}</Subtitle>

        <Footer>
          <Button title={buttonTitle} onPress={handleMoveOn} />
        </Footer>
      </Content>
    </Container>
  );
}
