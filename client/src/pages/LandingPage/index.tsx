import React, { useCallback, useState } from 'react';
import useScore from '../../hooks/useScore';
import usePlayer from '../../hooks/usePlayer';
import useInput from '../../hooks/useInput';
import { IPlayer } from '../../types/player';

const LandingPage: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [age, setAge] = useState('');
  const [id, setId] = useState('');
  const [deleteId, setDeleteId] = useState('');
  const { score, onScoreDown, onScoreUp } = useScore();
  const { players, onAddPlayer, onDeletePlayer } = usePlayer();

  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value);
  }, []);
  const onChangeAge = useCallback((e) => {
    setAge(e.target.value);
  }, []);
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangeDeleteId = useCallback((e) => {
    setDeleteId(e.target.value);
  }, []);
  return (
    <>
      <div>{score}</div>
      <button onClick={onScoreUp}> + </button>
      <button onClick={onScoreDown}> - </button>
      <input type="text" value={nickname} onChange={onChangeNickname} />
      <input type="text" value={age} onChange={onChangeAge} />
      <input type="text" value={id} onChange={onChangeId} />
      <input type="text" value={deleteId} onChange={onChangeDeleteId} />

      <button onClick={onAddPlayer(nickname, age, id)}> add player </button>
      <button onClick={onDeletePlayer(deleteId)}>delete last player</button>
      {players &&
        players.map((v) => {
          return (
            <div>
              {v.nickname} {v.age} {v.id}
            </div>
          );
        })}
    </>
  );
};

export default LandingPage;
