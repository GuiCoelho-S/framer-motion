import { FC, ReactNode } from 'react';
import { Container } from './style';


export const Layout:FC = ( {children} ) => {

  return (
    <Container>
      { children }
    </Container>
  )
}