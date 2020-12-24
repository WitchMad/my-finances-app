import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: ${(props) =>
    props.theme.title === 'light' ? '#f9f9f9' : '#444'};
  height: 100%;
`;
export const ListContainer = styled.ScrollView`
  height: 90%;
`;
export const ListItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 25px 25px;
  border-bottom-width: 1px;
  border-bottom-color: #c9c9c9;
`;
export const ListItemText = styled.Text`
  font-weight: 700;
  color: #555;
`;
