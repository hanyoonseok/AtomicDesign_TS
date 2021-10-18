import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillGithub } from 'react-icons/ai';

import { RootState } from '../../modules';
import useInput from '../../hooks/useInput';
import {GithubHome} from '../../components';

const GithubPage:React.FC = () => {
  const history = useHistory();
  const me = useSelector((state: RootState) => state.user?.me);

  useEffect(() => {
    if (!me) {
      history.push('/login');
    }
  }, [me]);

  return <GithubHome />;
};

export default GithubPage;
