import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../reducers';
import { signupUser } from '../../reducers/user';
import useInput from '../../hooks/useInput';

const SignupPage: React.FC = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const dispatch = useDispatch();

  const onSubmitSignup = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(signupUser({ email, password, nickname }));
    },
    [email, password, nickname]
  );
  return (
    <form>
      <h1>Signup Page</h1>
      <h3>email</h3>
      <input type="email" value={email} onChange={onChangeEmail} />
      <h3>password</h3>
      <input type="password" value={password} onChange={onChangePassword} />
      <h3>nickname</h3>
      <input type="text" value={nickname} onChange={onChangeNickname} /> <br />
      <button onClick={onSubmitSignup}>Signup</button>
    </form>
  );
};

export default SignupPage;
