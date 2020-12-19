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
  ${(props) =>
    props.open
      ? css`
          background: rgba(0, 0, 0, 0.5);
          opacity: 1;
          width: ${widthPercentageToDP('100%')};
          height: ${heightPercentageToDP('100%')};
        `
      : css`
          opacity: 0;
        `};
  position: absolute;
  top: 0px;
  left: 0px;
  elevation: 1000;
  z-index: 1000;
`;
export const Body = styled.View`
  width: ${widthPercentageToDP('90%')};
  background: #fff;
  border-radius: 4px;
  position: absolute;
  top: 10%;
  left: ${widthPercentageToDP('5%')};
`;
