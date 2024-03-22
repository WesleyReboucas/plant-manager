import styled from 'styled-components/native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export const ButtonEnvironment = styled.TouchableOpacity`
  background-color: ${colors.shape};
  width: 76px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-left: 5px;
  margin-right: 5px;
  overflow: hidden;
`;

export const Label = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

// containerActive: {
//   backgroundColor: colors.green_light
// },

// textActive: {
//   fontFamily: fonts.heading,
//   color: colors.green_dark,
// }
