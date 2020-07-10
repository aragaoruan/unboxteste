import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Item = styled.TouchableOpacity`
  padding: 5px;
  border-radius: 4px;
  margin-bottom: 15px;
  flex-direction: row;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Poster = styled.Image`
  width: 100px;
  height: 130px;
`;

export const Description = styled.View`
  flex: 1;
  padding: 0 5px;
  flex-direction: column;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const DescriptionName = styled.Text.attrs({
  numberOfLines: 5,
})`
  font-size: 14px;
  color: #000;
`;
