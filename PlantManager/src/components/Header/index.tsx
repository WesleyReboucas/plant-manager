import React from 'react';
import {View} from 'react-native';

import AvatarImage from './../../assets/images/avatar.jpg';

// Styles
import {Container, Greeting, Image, UserName} from './styles';
export interface HeaderProps {
  title?: string;
  subTitle?: string;
}

export function Header({title, subTitle}: HeaderProps) {
  function handleCustomTitle() {
    if (title) {
      return (
        <View>
          <Greeting>{title}</Greeting>
          <UserName>{subTitle}</UserName>
        </View>
      );
    }

    return (
      <View>
        <Greeting>Olá,</Greeting>
        <UserName>Aang</UserName>
      </View>
    );
  }

  return (
    <Container>
      {handleCustomTitle()}
      <Image source={AvatarImage} />
    </Container>
  );
}
