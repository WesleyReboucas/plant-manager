import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import colors from '../../components/styles/colors';
import fonts from '../../components/styles/fonts';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
  font-family: ${fonts.heading};
  line-height: 34px;
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding-right: 20px;
  padding-left: 20px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const Image = styled.Image`
  height: ${Dimensions.get('window').width * 0.7}px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;

export const ButtonIcon = styled(Feather)`
  font-size: 32px;
  color: ${colors.white};
`;
