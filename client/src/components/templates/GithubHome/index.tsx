import React, { useState, useCallback } from 'react';
import * as S from './style';

import { Header, LeftSpace, GithubLand } from '../../../components';
import useTodo from '../../../hooks/useTodo';

const GithubHome = (): React.ReactElement => {
  return (
    <S.Wrapper>
      <Header />
      <S.MainContent>
        <LeftSpace />
        <GithubLand />
      </S.MainContent>
    </S.Wrapper>
  );
};

export default GithubHome;
