import React from 'react';
import {ButtonContainer, Label} from './styles';
import {SvgFromUri} from 'react-native-svg';
import {TouchableOpacityProps} from 'react-native';

interface PlantProps extends TouchableOpacityProps {
  data: {
    name: string;
    photo: string;
  };
}

export const PlantPrimaryCard = ({data, ...rest}: PlantProps) => {
  return (
    <ButtonContainer {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <Label>{data.name}</Label>
    </ButtonContainer>
  );
};
