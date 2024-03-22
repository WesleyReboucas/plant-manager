import styled from 'styled-components/native';
import {Platform} from 'react-native';

import colors from '../../components/styles/colors';
import fonts from '../../components/styles/fonts';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  justify-content: center;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: ${Platform.OS === 'ios' ? 20 : 0}px;
  background-color: ${colors.background};
`;

export const Spotlight = styled.View`
  background-color: ${colors.blue_light};
  padding-right: 20px;
  padding-left: 20px;
  margin-top: ${Platform.OS === 'ios' ? 20 : 0}px;
  border-radius: 20px;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SpotlightImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const SpotlightText = styled.Text`
  flex: 1;
  color: ${colors.blue};
  padding-right: 20px;
  padding-left: 20px;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsTitle = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  margin-top: 20px;
  margin-bottom: 20px;
`;
