import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export const Container = styled(SafeAreaView)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 20px;
`;

export const Greeting = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const UserName = styled.Text`
  font-size: 32px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  line-height: 40px;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;
