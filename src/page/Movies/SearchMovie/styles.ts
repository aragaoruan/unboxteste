import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 10px;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background: #fff;
  border: #fff;
`;

export const Submit = styled.TouchableOpacity`
  background: #6bd4c1;
  margin-left: 10px;
  justify-content: center;
  border-radius: 4px;
  padding: 0 14px;
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
