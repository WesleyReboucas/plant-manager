import React from 'react';
import {
  ButtonRemove,
  Container,
  Details,
  Time,
  TimeLabel,
  Title,
} from './styles';
import {Animated, View} from 'react-native';
import {
  GestureHandlerRootView,
  Swipeable,
  TouchableOpacityProps,
} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../styles/colors';
import {SvgFromUri} from 'react-native-svg';

interface PlantProps extends TouchableOpacityProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove?: () => void;
}

export const PlantCardSecondary = ({
  data,
  handleRemove,
  ...rest
}: PlantProps) => {
  return (
    <GestureHandlerRootView>
      <Swipeable
        overshootRight={false}
        renderRightActions={() => (
          <Animated.View>
            <View>
              <ButtonRemove onPress={handleRemove}>
                <Feather name="trash" size={32} color={colors.white} />
              </ButtonRemove>
            </View>
          </Animated.View>
        )}>
        <Container {...rest}>
          <SvgFromUri uri={data.photo} width={50} height={50} />
          <Title>{data.name}</Title>
          <Details>
            <TimeLabel>Regar às</TimeLabel>
            <Time>{data.hour}</Time>
          </Details>
        </Container>
      </Swipeable>
    </GestureHandlerRootView>
  );
};
