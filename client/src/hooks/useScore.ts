import { useSelector, useDispatch } from "react-redux";
import {RootState} from '../reducers';
import { scoreDown, scoreUp } from "../reducers/score";
import { useCallback } from "react";

export default function useScore(){
    const {score} = useSelector((state:RootState)=>state.scoreReducer);
    const dispatch = useDispatch();

    const onScoreUp = useCallback(()=> dispatch(scoreUp(1)), [dispatch]);
    const onScoreDown = useCallback(()=>dispatch(scoreDown(1)), [dispatch]);
    
    return { score, onScoreUp, onScoreDown};
}