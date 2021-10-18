import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import * as S from './style';
import { AiFillGithub } from 'react-icons/ai';

import { RootState } from '../../modules';
import { loginUser } from '../../modules/user';
import useInput from '../../hooks/useInput';

const LoginPage = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const dispatch = useDispatch();
  const history = useHistory();
  const me = useSelector((state: RootState) => state.user?.me);

  const onSubmitLogin = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(loginUser({ email, password }));
    },
    [email, password]
  );

  useEffect(() => {
    if (me) {
      history.push('/github');
    }
  }, [me]);

  return (
    <S.Wrapper>
      <S.LoginForm>
        <AiFillGithub fontSize="50px" style={{ marginBottom: '32px' }} />
        <h3>Sign in to Github</h3>
        <S.StyledForm>
          <h3>username or email address</h3>
          <S.StyledInput type="email" value={email} onChange={onChangeEmail} />
          <h3>password</h3>
          <S.StyledInput type="password" value={password} onChange={onChangePassword} />
          <S.StyledButton onClick={onSubmitLogin}>Sign in</S.StyledButton>
        </S.StyledForm>
        <S.StyledForm>
          New to Github? <Link to="/signup" color="blue">create a new account</Link>
        </S.StyledForm>
      </S.LoginForm>
    </S.Wrapper>
  );
};

export default LoginPage;
