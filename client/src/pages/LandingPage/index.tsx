import React from 'react';
import useScore from '../../hooks/useScore';
import usePlayer from '../../hooks/usePlayer';
import { PlayerType } from '../../types/player';

const LandingPage: React.FC = () => {
  const { score, onScoreDown, onScoreUp } = useScore();
  const { players, onLoadPlayer, onAddPlayer, onDeletePlayer } = usePlayer();

  return (
    <>
      <div>{score}</div>
      <button onClick={onScoreUp}> + </button>
      <button onClick={onScoreDown}> - </button>

      <button onClick={onAddPlayer}> add player </button>
      {players&&players.map((v) => {
        return <div>{v.nickname}</div>;
      })}
    </>
  );
};

export default LandingPage;
