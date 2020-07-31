import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = (
  { children, ...rest } // rest pega todas as prpriedades do botao e passao para o container
) => (
  <Container {...rest}>
    <ButtonText>{children} </ButtonText>
  </Container>
);

export default Button;
