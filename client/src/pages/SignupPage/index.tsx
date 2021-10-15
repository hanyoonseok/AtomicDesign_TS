import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { RootState } from '../../modules';
import { signupUser } from '../../modules/user';
import useInput from '../../hooks/useInput';

const SignupPage: React.FC = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const dispatch = useDispatch();
  const history = useHistory();
  const {signupDone} = useSelector((state:RootState) => state.user);

  const onSubmitSignup = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(signupUser({ email, password, nickname }));
    },
    [email, password, nickname]
  );

  useEffect(()=>{ // 회원가입 완료되면 로그인 창으로
    if(signupDone){history.push('/login');}
  },[signupDone])

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
