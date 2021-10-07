import { useSelector, useDispatch } from "react-redux";
import {TestRootState} from '../reducers/test';
import { scoreDown, scoreUp } from "../actions/actions";
import { useCallback } from "react";

export default function useScore(){
    const score = useSelector((state:TestRootState)=>state.score);
    const dispatch = useDispatch();

    const onScoreUp = useCallback(()=> dispatch(scoreUp()), [dispatch]);
    const onScoreDown = useCallback(()=>dispatch(scoreDown()), [dispatch]);
    
    return { score, onScoreUp, onScoreDown};
}