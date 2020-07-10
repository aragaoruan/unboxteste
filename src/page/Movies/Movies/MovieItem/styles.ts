import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: #222;
  width: 110px;
  margin-right: 10px;
`;

export const Image = styled.Image`
  width: 110px;
  height: 140px;
`;

export const ContainerDescription = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 10px;
  color: white;
  padding-right: 5px;
`;

export const HorizontalList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin: 0px 10px;
`;
