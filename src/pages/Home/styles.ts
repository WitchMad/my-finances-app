import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Dimensions, PixelRatio} from 'react-native';

const widthPercentageToDP = (widthPercent: string) => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100,
  );
};

const heightPercentageToDP = (heightPercent: string) => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(
    (screenHeight * parseFloat(heightPercent)) / 100,
  );
};

export const SafeAreaView = styled.SafeAreaView`
  background: ${(props) =>
    props.theme.title === 'light' ? props.theme.colors.primary : '#444'};
`;
export const Container = styled.View`
  background: ${(props) =>
    props.theme.title === 'light' ? props.theme.colors.primary : '#444'};
  padding: 10px;
`;

export const ScrollContainer = styled.ScrollView`
  height: ${heightPercentageToDP('65%')};
`;

export const Main = styled.View`
  background: ${(props) => props.theme.background};
  border-radius: 4px;
  padding: 15px;
  width: ${widthPercentageToDP('95%')};
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export const MainIcon = styled(Icon).attrs({
  size: 40,
  name: 'monetization-on',
})`
  margin-right: 12px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const MainView = styled.View``;
export const MainViewText = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondary};
`;
export const MainViewTitle = styled.Text`
  font-size: 25px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const GraphicView = styled.View`
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background};
  border-radius: 4px;
  width: ${widthPercentageToDP('95%')};
  margin-top: ${widthPercentageToDP('2.5%')};
`;
export const PercentageView = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: ${(props) => props.theme.background};
  border-radius: 4px;
  padding: 15px;
  width: ${widthPercentageToDP('95%')};
  margin-top: ${widthPercentageToDP('2.5%')};
`;
export const PercentageTitle = styled.Text`
  color: rgb(134, 65, 244);
  font-size: 16px;
  font-weight: 900;
  margin-left: 10px;
`;
export const PercentageSubtitle = styled.Text`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 12px;
  margin-left: 10px;
`;
export const GraphicViewSubView = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const GraphicViewGrid = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
`;
export const GraphicViewValueView = styled.View`
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  padding: 15px;
  width: 100%;
`;
export const PercentageViewValueView = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
`;
export const GraphicViewValueText = styled.Text`
  font-weight: 900;
  font-size: 10px;
  margin-left: 4px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const GridHistory = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: ${widthPercentageToDP('2.5%')};
  width: ${widthPercentageToDP('95%')};
`;
export const GridHistoryItem = styled.View`
  background: ${(props) => props.theme.background};
  height: ${heightPercentageToDP('20%')};
  width: ${widthPercentageToDP('46%')};
  border-radius: 4px;
  padding: 8px;
  justify-content: space-between;
`;

export const GridTitle = styled.Text`
  padding: 10px;
  border: 1px solid #eee;
  background: #f9f9f9;
  color: #888;
  font-size: 12px;
  font-weight: 900;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  text-align: center;
`;
export const GridValueRed = styled.Text`
  font-size: 20px;
  color: #ff4006;
  font-weight: 900;
  text-align: center;
`;
export const GridValueGreen = styled.Text`
  font-size: 20px;
  color: #1ad17c;
  font-weight: 900;
  text-align: center;
`;
export const GridValueDescription = styled.Text`
  font-size: 12px;
  color: #999;
  text-align: center;
`;
