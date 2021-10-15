import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../modules';
import { loginUser } from '../../modules/user';
import useInput from '../../hooks/useInput';

const LoginPage = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const dispatch = useDispatch();
  const me = useSelector((state: RootState) => state.user?.me);

  const onSubmitLogin = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(loginUser({ email, password, nickname }));
    },
    [email, password, nickname]
  );

  return (
    <>
      {!me ? (
        <>
          <h1>로그인하세요</h1>
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
      ) : (
        <>
          <h1>로그인 되었습니다.</h1>
          <h3>{me?.nickname}님 안녕하세요</h3>
        </>
      )}
    </>
  );
};

export default LoginPage;
