import React from 'react';
import {Label, ButtonEnvironment} from './styles';
import {TouchableOpacityProps} from 'react-native';

interface EnvironmentButtonProps extends TouchableOpacityProps {
  title: string;
  active?: boolean;
}

export function EnvironmentButton({
  title,
  // active = false,
  ...rest
}: EnvironmentButtonProps) {
  return (
    <ButtonEnvironment {...rest}>
      <Label>{title}</Label>
    </ButtonEnvironment>
  );
}
