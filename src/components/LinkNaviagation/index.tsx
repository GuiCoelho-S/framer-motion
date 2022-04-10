import { ReactNode } from 'react';
import { VscActivateBreakpoints } from 'react-icons/vsc';
import * as S from './style';

interface LinkProps {
  children:ReactNode;
  path:string;
}

export const LinkNavigation = ({ children, path }:LinkProps) => {

  return(
    <S.Navigation to={path}>
        <VscActivateBreakpoints />
        <p>
         { children } 
        </p>
      
    </S.Navigation>
  )
}