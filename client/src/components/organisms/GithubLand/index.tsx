import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './style';
import { RootState } from '../../../modules';

const GithubLand = () => {
    const {me} = useSelector((state:RootState) => state.user);
  // default
  return (
    <S.Wrapper>
      <S.SubContents flex="3.5">All activity
      {
          me&&me.Posts?.map((v)=>{
              return(<div>{v.id}</div>)
          })
      }
      </S.SubContents>
      <S.SubContents flex="1">sad</S.SubContents>
    </S.Wrapper>
  );
};

export default GithubLand;
