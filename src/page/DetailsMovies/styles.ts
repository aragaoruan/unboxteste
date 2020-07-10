import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

interface PropViewAverage {
  direction: number;
}

export const Container = styled.ScrollView`
  flex: 1;
  margin: 2px;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  padding: 5px 0;

  align-items: center;
`;

export const ImageBackdrop = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${width}px;
  height: 220px;
`;

export const Title = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
  margin: 5px 0;
`;
export const ViewInfo = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #000;
`;

export const TextInfo = styled.Text`
  border-style: solid;
  border-right-width: 1px;
  border-right-color: #000;
  color: #000;
`;

export const TextGenres = styled.Text`
  margin: 3px 0;
  padding: 0 5px;
  color: #000;
`;

export const Text = styled.Text`
  color: #000;
  font-size: 14px;
`;

export const TextCompanies = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #000;
  font-size: 14px;
  margin: 2px;
  padding: 2px;
`;

export const ViewAverage = styled.View`
  margin-left: 5px;
  flex-direction: row;
  align-items: baseline;
`;

export const Average = styled(Text)`
  font-size: 14px;
`;

export const Point = styled(Text)`
  font-size: 10px;
  color: #c1c1c1;
`;

export const Count = styled(Text)`
  font-size: 14px;
  color: #c1c1c1;
`;

export const ProductionCompanies = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 100px;
  height: 120px;
  border-radius: 5px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  border: 1px solid #c1c1c1;
  padding: 2px;
`;

export const ImageCompanies = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 80px;
  height: 80px;
`;
