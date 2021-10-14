import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../reducers';
import { loginUser } from '../../reducers/user';
import useInput from '../../hooks/useInput';

const LoginPage = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const dispatch = useDispatch();
  const me = useSelector((state: RootState) => state.user?.me);
  const onSubmitLogin = useCallback((e:React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({email, password, nickname}));
  },[email,password,nickname]);
  return (
    <>
      {!me &&
        <h1>로그인하세요</h1>
      }
      <form>
          <h1>Login Page</h1>
          <h3>email</h3>
          <input type="email" value={email} onChange={onChangeEmail} />
          <h3>password</h3>
          <input type="password" value={password} onChange={onChangePassword} />
          <h3>nickname</h3>
          <input type="text" value={nickname} onChange={onChangeNickname} /> <br />
          <button onClick={onSubmitLogin}>Login</button>
        </form>
    </>
  );
};

export default LoginPage;
