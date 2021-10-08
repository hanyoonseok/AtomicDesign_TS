import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { loadPlayer, addPlayer, deletePlayer } from '../reducers/player';
import { useCallback } from 'react';

export default function useScore() {
  const { players } = useSelector((state: RootState) => state.player);
  const dispatch = useDispatch();
  
  const onLoadPlayer = useCallback(() => dispatch(loadPlayer()), [dispatch]);
  const onAddPlayer = useCallback((nickname) => () => {
      dispatch(addPlayer(nickname));
    },
    [dispatch]
  );
  const onDeletePlayer = useCallback(() => dispatch(deletePlayer()), [dispatch]);

  return { players, onLoadPlayer, onAddPlayer, onDeletePlayer };
}
