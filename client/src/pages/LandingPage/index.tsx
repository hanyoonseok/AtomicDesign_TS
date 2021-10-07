import React from "react"
import useScore from '../../hooks/useScore';

const LandingPage:React.FC = () => {
  const {score, onScoreDown, onScoreUp} = useScore();
  return (
    <>
    <div>{score}</div>
    <button onClick={onScoreUp}> + </button>
    <button onClick={onScoreDown}> - </button>
    </>
  );
};

export default LandingPage;
