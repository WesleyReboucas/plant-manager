import styled from 'styled-components/native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export const ButtonRemove = styled.TouchableOpacity`
  width: 100px;
  height: 85px;
  background-color: ${colors.red};
  margin-top: 15px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 20px;
  padding-left: 15px;
`;

export const Container = styled(TouchableWithoutFeedback)`
  width: 100%;

  padding-right: 10px;
  padding-left: 10px;
  padding-top: 25px;
  padding-bottom: 25px;

  margin-top: 5px;
  margin-bottom: 5px;

  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.shape};
`;

export const Title = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-size: 17px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
`;

export const Details = styled.View`
  margin-right: 10px;
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  font-size: 16px;
  font-family: ${fonts.text};
  color: ${colors.body_light};
`;

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.body_dark};
`;
