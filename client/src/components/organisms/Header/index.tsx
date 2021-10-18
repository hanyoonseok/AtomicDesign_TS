import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import * as S from './style';

import { CircleImg } from '../../../components';
import {defaultProfile} from '../../../assets/imgs'

const Header = () => {
  // default
  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <AiFillGithub fontSize="32px"/>
        <S.StyledInput type="text" />
        <S.StyledUl>
          <li>Pull requests</li>
          <li>Issues</li>
          <li>Marketplace</li>
          <li>Explore</li>
        </S.StyledUl>
      </S.MenuWrapper>
      <S.MenuWrapper>
        <CircleImg width="50px" src='../../../assets/imgs'/>
      </S.MenuWrapper>
    </S.Wrapper>
  );
};

export default Header;
