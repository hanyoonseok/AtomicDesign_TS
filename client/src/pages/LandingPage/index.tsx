import React, { useCallback, useState } from 'react';
import useScore from '../../hooks/useScore';
import usePlayer from '../../hooks/usePlayer';
import { PlayerType } from '../../types/player';

const LandingPage: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const { score, onScoreDown, onScoreUp } = useScore();
  const { players, onLoadPlayer, onAddPlayer, onDeletePlayer } = usePlayer();
  const onChange = useCallback((e) => {
    setNickname(e.target.value);
  }, []);
  return (
    <>
      <div>{score}</div>
      <button onClick={onScoreUp}> + </button>
      <button onClick={onScoreDown}> - </button>
      <input type="text" value={nickname} onChange={onChange} />

      <button onClick={onAddPlayer(nickname)}> add player </button>
      <button onClick={onDeletePlayer}>delete last player</button>
      {players &&
        players.map((v) => {
          return <div>{v.nickname}</div>;
        })}
    </>
  );
};

export default LandingPage;
