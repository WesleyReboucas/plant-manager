import styled from 'styled-components/native';

import colors from '../../components/styles/colors';
import fonts from '../../components/styles/fonts';
import {SafeAreaView} from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.background};
`;

export const HeaderContainer = styled.View`
  padding-left: 30px;
  padding-right: 30px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-family: ${fonts.text};
  font-size: 17px;
  line-height: 20px;
  color: ${colors.heading};
`;

export const PlantsContainer = styled.View`
  flex: 1;
  padding-right: 32px;
  padding-left: 32px;
  justify-content: center;
`;
