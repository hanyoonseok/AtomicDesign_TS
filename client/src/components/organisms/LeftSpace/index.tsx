import React,{useEffect} from 'react';
import { useHistory } from 'react-router';
import * as S from './style';
import { RootState } from '../../../modules';
import { useSelector } from 'react-redux';

const LeftSpace = () => {
  const { me } = useSelector((state: RootState) => state.user);
  const history = useHistory();
  useEffect(() => {
    if (!me) {
      history.push('/login');
    }
  }, [me]);
  return <S.Wrapper>
      {
          me&& me.nickname
      }
  </S.Wrapper>;
};

export default LeftSpace;
