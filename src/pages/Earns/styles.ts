import styled, {css} from 'styled-components/native';

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

export const Container = styled.View`
  flex: 1;
  background: #ffbb00;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.View`
  background: #fff;
  border-radius: 4px;
  width: ${widthPercentageToDP('95%')};
  flex-direction: row;
  padding: 15px;
  align-items: flex-end;
  justify-content: space-between;
`;
export const MainView = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
`;
export const MainPrevious = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
`;
export const MainPreviousValueRed = styled.Text`
  color: #ff4006;
  background: rgba(255, 52, 6, 0.159);
  padding: 5px 15px;
  border-radius: 4px;
`;
export const MainPreviousValueGreen = styled.Text`
  color: #1ad17c;
  background: rgba(26, 209, 124, 0.159);
  padding: 5px 15px;
  border-radius: 4px;
`;
export const MainPreviousValueDesc = styled.Text`
  color: #444;
  font-size: 10px;
  margin-top: 6px;
`;
export const MainTitle = styled.Text`
  color: #1ad17c;
  font-weight: 900;
  font-size: 24px;
`;
export const MainSubtitle = styled.Text`
  color: #444;
  font-size: 14px;
`;

export const List = styled.FlatList`
  background: #fff;
  border-radius: 4px;
  width: ${widthPercentageToDP('95%')};
  flex: 1;
  margin-top: ${widthPercentageToDP('2.5%')};
  padding: 10px 0px;
`;
export const ListItem = styled.TouchableOpacity`
  padding: 12px 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 0.2px;
  border-bottom-color: #c9c9c9;
  border-top-width: 0.2px;
  border-top-color: #c9c9c9;
`;
export const ListItemTitle = styled.Text`
  font-size: 12px;
  font-weight: 900;
  padding: 10px 15px;
  border-radius: 30px;
  color: #1ad17c;
  background: rgba(26, 209, 124, 0.159);
`;
export const ListItemView = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
`;
export const ListItemDescription = styled.Text`
  font-size: 12px;
  color: #666;
`;
export const ListItemDate = styled.Text`
  font-size: 10px;
  color: #888;
`;

export const ModalContainer = styled.View`
  padding: 15px;
`;
export const ModalTitle = styled.Text`
  font-size: 18px;
  color: #444;
  font-weight: 900;
  text-align: center;
  margin-bottom: 10px;
`;
export const TextField = styled.TextInput`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #c9c9c9;
  margin-top: 6px;
  ${(props) =>
    props.multiline
      ? css`
          min-height: ${heightPercentageToDP('15%')};
        `
      : ''}
`;

export const ModalWrapButtons = styled.View`
  width: ${widthPercentageToDP('83%')};
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20px;
`;
export const ModalButtonContained = styled.TouchableOpacity`
  background: #1ad17c;
  padding: 10px 0px;
  text-align: center;
  width: ${widthPercentageToDP('40%')};
  border-radius: 4px;
`;
export const ModalButtonOutline = styled.TouchableOpacity`
  border: 1px solid #1ad17c;
  padding: 10px 0px;
  text-align: center;
  width: ${widthPercentageToDP('40%')};
  border-radius: 4px;
`;

export const ModalButtonTextWhite = styled.Text`
  color: #fff;
  text-align: center;
`;
export const ModalButtonTextGreen = styled.Text`
  color: #1ad17c;
  text-align: center;
`;

export const ButtonAdd = styled.TouchableOpacity`
  background: #1ad17c;
  padding: 10px 0px;
  text-align: center;
  margin-top: ${widthPercentageToDP('2.5%')};
  width: ${widthPercentageToDP('95%')};
  border-radius: 4px;
`;
export const ButtonAddText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: 900;
`;

export const ModalValue = styled.Text`
  font-weight: 900;
  padding: 10px 5px;
  color: #1ad17c;
  border-bottom-width: 3px;
  border-bottom-color: #1ad17c;
  text-align: left;
  font-size: 26px;
`;
export const ModalTitleValue = styled.Text`
  padding-top: 15px;
  font-size: 16px;
  color: #666;
`;
export const ModalDescriptionValue = styled.Text`
  padding-top: 10px;
  font-size: 12px;
  color: #888;
`;

export const BackButton = styled.TouchableOpacity`
  border: 1px solid #c9c9c9;
  padding: 10px 15px;
  border-radius: 4px;
  margin-top: 16px;
`;
export const BackButtonText = styled.Text`
  color: #c9c9c9;
  text-align: center;
`;
