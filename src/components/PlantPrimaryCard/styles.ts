import styled from 'styled-components/native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  max-width: 45%;
  background-color: ${colors.shape};
  border-radius: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  margin: 10px;
  overflow: hidden;
`;

export const Label = styled.Text`
  color: ${colors.green_dark};
  font-family: ${fonts.heading};
  margin-top: 16px;
  margin-bottom: 16px;
`;
