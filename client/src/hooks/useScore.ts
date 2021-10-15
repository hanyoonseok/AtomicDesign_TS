import { useSelector, useDispatch } from "react-redux";
import {RootState} from '../modules';
import { scoreDown, scoreUp } from "../modules/score";
import { SCORE_UP } from "../constants";
import { useCallback } from "react";

export default function useScore(){
    const {score} = useSelector((state:RootState)=>state.score);
    const dispatch = useDispatch();

    //const onScoreUp = useCallback(()=> dispatch(scoreUp(1)), [dispatch]);
    const onScoreUp = useCallback(()=> dispatch({
        type:SCORE_UP,
        data:1,
    }), [dispatch]);
    const onScoreDown = useCallback(()=>dispatch(scoreDown(1)), [dispatch]);
    
    return { score, onScoreUp, onScoreDown};
}